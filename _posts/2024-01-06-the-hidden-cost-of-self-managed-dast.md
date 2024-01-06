---
layout: post
# The filename will be used for URL slug generation, try to keep it to 1-3 words
title: "The hidden cost of self-managed DAST"
# Keep the title short, does not need to match the filename
subtitle: "A look at calculating the true cost of a popular DAST tool."
# Subtitles should be 90-120 characters
date: 2024-01-06
# Date in YYYY-MM-DD Format, should match date used in the filename
date-updated:
# Date in YYYY-MM-DD Format. Add this if a change is made after the date above
author: Jade Null
# Use "GlitchSecure" if no author
coauthor:
# Coauthor or optionally the editors name
category: Resources
# Use either updates, resources, guides as the category

image:
# Images are stored in the assets/img/ folder.
# Create a new subfolder within assets/img/blog/ for each post new.
  hero: blog/8/header.jpg
  # Upload a 1920x1008 image, replace 10 with the post slug or number
  # This is used for the background on the post
  feature: blog/8/feature.jpg
  # Upload a 1200x630px image, replace 10 with the post slug or number
  # This is used for the preview of the post
  credit: wutzkoh
  # Include the feature photo authors name
  creditlink: https://elements.envato.com/partnership-coworkers-analysis-strategy-with-discu-XJH5G9R
  # Include link to original photo source
hero-vertical: true
# Whether to use a vertical layout. Default is true for blog posts.
hero-wrapper-padding: "pb-24"
# This must be set to "pb-24" when using a vertical layout and removed when not.
comments: true
# Whether or not comments are enabled. This hasn't been implemented yet, but generally we can leave them enabled for anything that's not an update.
---

In April of 2023 PortSwigger —the company that makes the popular security testing tool Burp— [announced a new pricing model](https://portswigger.net/blog/new-burp-suite-enterprise-edition-pay-as-you-scan-pricing) for their Enterprise scanning offering. This model called "Pay as you scan" lowers the financial barrier of entry by reducing the upfront cost of the software and instead charging using a usage based billing model based on number of hours scanned. While the $1,999 price tag may seem appealing, there are a number of other factors to consider that contribute to the final price tag.

In this article we'll explore how you can calculate the actual cost of setting up and using a product like this, both from the software pricing perspective, but also from the human and infrastructure resource perspective.

Throughout the article we will use an example scenario of a mid-sized startup looking to use Burp Enterprise to test two distinct web applications, an internal admin dashboard and their primary SaaS application, both with separate login credentials and subdomains.

## Cost Per Hour Scanned

The key differentiator of Burp Enterprise's new pay as you scan pricing model is the additional cost of $9 USD per hour scanned. While this pricing sounds great on the surface, it can be hard to calculate the total number of hours a scan will take without having used the software yourself.

At GlitchSecure, we utilise Burp Suite Pro and Burp Suite Enterprise alongside a suite of other Dynamic Application Security Testing (DAST) tools to help us identify vulnerabilities in our customer's web applications and APIs. Using data we've collected, we typically see a Burp Enterprise scan configured with "Deep" coverage for both the crawl and audit take anywhere from 4 hours to 48 hours depending on the size of the application and number of parallel scans. We've also seen poorly configured scans run for several days if gone unchecked.

With these numbers in mind, we'll assume an average of 24 hours per application. Again assuming a two distinct web applications, a monthly scanning cadence, and our $9 per hour rate, that's an additional $432 per month or $5184 per year.

```
24 hours * 2 web applications = 48 hours per month
48 hours * $9/hr = $432 per month
$432 * 12 months = $5,184
$5,184 + $1,999 = $7,259 per year
```

As we can see, while the $1,999 entry tag can seem appealing, the cost of a scan can quickly balloon. Incidentally if we look to Burp classic's "concurrent scan" pricing model we'll find the pricing to be similar with the base price of $6,600 for 1 concurrent scan or $7,259 for 2 concurrent scans. Using these numbers for our example scenario, we'll assume the lowest cost going forward.

**Subtotal: $6,600 per year**

## Infrastructure Cost

As a DAST tool, Burp Enterprise is designed to be hosted on your own infrastructure. While the setup and installation of a single-machine deployment is relatively well documented and straight forward, it does create a recurring infrastructure cost.

Looking to Burp Enterprises [system requirement page](https://portswigger.net/burp/documentation/enterprise/getting-started/system-requirements/standard-sys-req) we can see that a single-machine deployment with 1 concurrent scan recommends 8 CPU cores, 24 GB of ram, 30GB of free disk space, and 26GB of SWAP space. Helpfully the same page also points us to the `c6i.4xlarge` AWS EC2 instance.

As of the date of this article, an `c6i.4xlarge` AWS EC2 instance [is listed](https://instances.vantage.sh/aws/ec2/c6i.4xlarge?region=us-east-1&os=linux&cost_duration=hourly&reserved_term=Standard.noUpfront) as $0.68/hr for on demand and $0.4498/hr for 1 year reserved. Assuming we go with a 1 year reserved pricing, that's $323.85 per month, or $3,886.20 per year.

```
$0.4498/hr * 720 hours per month = $323.85
$323.85 per month * 12 = $3,886.20 per year
```

While you could conceivably reduce this cost through something like a dedicated server rental, it's likely this route would only increase the human cost due to increased management requirements.

**Subtotal: $3,886 per year**

## Human Cost

The human cost is one that is extremely difficult to calculate. When you think about it, utilising a DAST tool requires a level of technical skill and understanding of security fundamentals that's typically only found within security professionals. While a typical developer may be able to install, manage, deploy, and configure the tool, a common trend we hear is that there is a lot of time and energy spent on iterating the results and identify both what's important, and also what's simply a false positive.

Tools like Burp Enterprise are designed to be wielded by security professionals, with many findings simply being irrelevant to your typical dev team. Typical informational level findings like a published robots.txt file, Base64-encoded data in parameter, and External service interaction are useful insights that can help a security professional know where to look for potential vulnerabilities. They are not however vulnerabilities on their own.

While there is a lot of nuance required here, for the purpose of this article and for the purposes of providing a quick estimate we'll assume an average of 30 minutes per issue to review. We typically see around 14 unique issues per app reported with anywhere from 5-50 permutations of each. Ignoring potential rabbit holes a specific permutation might lead you down, that's an average of 7 hours per app to triage and validate or 14 hours for our example scenario. If we take a typical security consultants hourly rate of $200/hr, that's $2,800 per month, or $33,600 per year.

```
14 issues * 30 minutes = 7 hours
7 hours * 2 applications = 14 hours
14 hours * $200/hr = $2,800 per month
$3,500 * 12 = $33,600 per year
```

Even with these conservative triage and review times, we can see that once again the cost adds up quickly. While a smaller organisation may farm this out to a less experienced internal developer with a lower hourly wage, we've heard time and time again that this results in days or even weeks of time spent instead of hours.

**Subtotal: $33,600 per year**


## The Total

As demonstrated, the cost of a single DAST tool is more than what might first appear. Totalling our numbers in our example scenario takes us from what appeared to be $1,999 per year to over $40,000 per year across several areas for _just two targets_ and one DAST tool.

| Cost Source | Amount |
| :--- | ---: |
| Software | $6,600/yr |
| Infrastructure | $3,886/yr |
| People | $33,600/yr |
| **Total** | **$44,086/yr** |

## Another Way

While we believe tools like Burp Enterprise are a critical piece of the puzzle when it comes to identifying vulnerabilities in web applications and APIs, they can be costly for non-security teams to run and maintain. While this is a bit of a shameless plug, it is exactly the gap we fill in the market. Our [continuous security testing](/vulnerability-assessment/) solution can not only reduce total spend on dynamic application security testing for teams without dedicated offensive security staff, but it brings more tooling to the table and security expertise to your team.

We make it easy for you to implement regular security testing by _doing it all for you_. By combining the best DAST tools on the market (and not just Burp), our team of security experts, and a single pane of glass dashboard, we're able to deliver you better results and identify vulnerabilities others miss. We ensure each tool is configured and tailored for your unique environment, act as the human element to filter out false positives, explore additional attack vectors, and help you prioritise what's important.

We hope this article will be a helpful resource as you look to implement security testing within your organisation. If you're interested in learning more about what we do, would like some help determining the best solution, or just want to chat, [our calendar is always open](/demo/).
