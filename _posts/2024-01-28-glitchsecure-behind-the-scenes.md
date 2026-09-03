---
layout: post
# The filename will be used for URL slug generation, try to keep it to 1-3 words
title: "GlitchSecure Behind The Scenes"
# Keep the title short, does not need to match the filename
subtitle: "How we continually help companies identify and remediate vulnerabilities without millions in venture capital."
# Subtitles should be 90-120 characters
date: 2024-01-28
# Date in YYYY-MM-DD Format, should match date used in the filename
date_updated:
# Date in YYYY-MM-DD Format. Add this if a change is made after the date above
author: Jade Null
# Use "GlitchSecure" if no author
collaborators:
 - name: Jade Null
 - name: Brad Bahls
category: Updates
# Use either updates, resources, guides as the category

image:
# Images are stored in the assets/img/ folder.
# Create a new subfolder within assets/img/blog/ for each post new.
  hero: blog/9/header.jpg
  # Upload a 1920x1008 image, replace 10 with the post slug or number
  # This is used for the background on the post
  feature: blog/9/feature.jpg
  # Upload a 1200x630px image, replace 10 with the post slug or number
  # This is used for the preview of the post
  credit: Tima Miroshnichenko
  # Include the feature photo authors name
  creditlink: https://www.pexels.com/photo/piles-on-money-on-the-table-6266639/
  # Include link to original photo source
hero-vertical: true
# Whether to use a vertical layout. Default is true for blog posts.
hero-wrapper-padding: "pb-24"
# This must be set to "pb-24" when using a vertical layout and removed when not.
---

As a small bootstrapped company in the security testing space, you can imagine we're up against some pretty big players. Incumbent PTaaS providers boast pools of hundreds of gig-workers or "crowd-sourced" hackers, while SaaS-based security tools claim to automate the pentest.

At GlitchSecure, we don't fit into either of those molds, and we have no intention of doing so. But that may leave you wondering, what are we and how do we stack up against these providers? Let's dive in...

# Penetration Testing

It's no secret that Penetration Testing is becoming increasingly commoditized. Crowd-sourced vendors have managed to win against incumbent consultancies through low-cost gig-work. However, this has created a large divide in quality and pricing within the industry.

When you go out to look for a human-powered penetration test these days, you really have two options:

- A crowd-sourced "PTaaS" pentest: cheap but of variable quality due to the nature of gig-work.

- A traditional penetration test: costly but often performed by highly experienced and well-paid consultants.

This new paradigm has created a gap in the market. Software companies that prioritize security beyond a mere compliance checkbox (SOC2 / ISO27001 etc.) want assurance that the work is done right. They want the hackers working on their pentest to be focused, with limited context switching, and to know that they have their backs. They also want this without spending tens of thousands of dollars.

**We fill that gap** in the market because we are small. Not having VC pressure to grow at all costs allows us to build up our team of highly skilled security professionals. This approach also lets us work closely with our customers to extend their team. And, we can even turn down projects that may not be a good fit for our unique skill set.

We're also able to do that since human-driven penetration testing isn't our primary focus as a company. While it may not be as scalable, the services aspect of our business is an important one as it helps us fund and shape the development of our platform and our continuous security testing offering.

# Building a Platform

[When I started](/updates/introducing-glitchsecure) writing the code for the GlitchSecure platform, I aimed to streamline my existing security consulting. My goal was to automate the collaboration and reporting process and give my customers a better experience than a one-and-done PDF. In reality, I could have used off-the-shelf commercial or open-source software like Plextrac or Dradis. However, I wanted something that fit my specific needs.

After only a few short months of writing code in 2022, I had an MVP and was able to work with my first customer to provide penetration testing through it. The experience from both sides was great, and the platform did a few things really well:

- It allowed the customer to see findings as I found them.

- It provided additional insight and consistency.

- It saved me time by automating report delivery, which meant more time to hack.

- It allowed real-time collaboration.

The MVP was a total success. The cost? Three months of my time and under $10k. I met my goals and learned new tricks in Laravel for a fraction of the price of the existing commercial PTaaS delivery platforms. I built something that could help me deliver my penetration testing services even better than before.

As I grew the team and our consulting practice, the platform proved invaluable for maintaining that level of quality and speed of delivery.

# Exploring Automation

With a pentest delivery platform built and the team growing, we shifted our focus to exploring automated testing. While we strongly believe we are a long way from fully automated web application penetration testing —[some companies are sinking tens of millions just to scratch the surface](https://old.reddit.com/r/cybersecurity/comments/1acpbmi/what_the_hell_is_ptaas/kjwl3h2/?context=1)— we knew there were many tasks we could automate within the OWASP Application Security Verification Standard (ASVS). A wealth of automations already existed, including open-source projects like testssl, nuclei, and OWASP ZAP, as well as stand-alone commercial offerings.

While researching this, we learned more and more from customers about what they were doing and what they wanted. After extensive customer interviews, we found that most software companies who pay for security testing fell into one or both of the following categories:

- They were performing regular (quarterly, annualy) human-driven penetration testing.

- Their teams used vulnerability scanners or Dynamic Application Security Testing (DAST) tools in-house.

There is an inside joke within the security community around what my friend Travis calls "Pentest puppy mills". The reality is, anyone can go out and buy a copy of a well-known vulnerability scanner, slap their logo on it, and call it a pentest. Some companies have even gone so far as to call that automated pentesting and build their entire platform on top of it.

At GlitchSecure, we approached this differently. We learned that while companies were spending money on these tools, they were often either underutilised or leaving teams overwhelemed with a mountain of noise. While a company can go out and deploy a commercial DAST tool, the reality is that doing so [requires a large amount of resources to both deploy and get value out of it](/resources/the-hidden-cost-of-self-managed-dast). With this knowledge on hand, we started building out our Continuous Security Testing product.

# Continuous Security Testing

We knew that there would be limits to what we could automate on our own. We also knew from customer interviews that companies were already paying for and underutilising DAST tooling. We already had a platform to manage and deliver findings. So we started looking for ways to integrate the well-known tools, like Acunetix, Burp Enterprise, OWASP ZAP, Nuclei, and even Nessus. While evaluating these tools, we found that results can vary wildly from tool to tool, and environment to environment.

So why settle on one? By ingesting data from not just our own automation or a single tool, but as many as we could get our hands on, we started to see some really cool results and begin to infer things we couldn't without all the data. From this, we were able to build our product offering to not only deliver more results than a single tool on its own but also better identify one-off false positives from real and exploitable vulnerabilities.


# The Human Touch

Orchestrating a half a dozen automated security testing tools and ingesting the data is cool and all. However, sifting through dozens or even hundreds of results can be overwhelming. It's hard to find the signal through the noise.

That's where our team comes back in. While we could have just called it a day and started marketing this as a point-and-click SaaS, because we have less pressure, we decided to bring the human element back in.

![A diagram of our process](/assets/img/blog/9/ct-process-diagram.png)

Each and every result that our platform ingests from those tools is manually reviewed by our team. We take a 5-step approach when doing this:

- 1) Consolidate the results
  - We take the large amount of data collected and consolidate it into a logical set of potential vulnerabilities.

- 2) Prove exploitablity
  - We manually validate each potential vulnerability to demonstrate its impact and ensure its validity.

- 3) Provide tailored advice
  - We don't just copy and paste the information from the tools. Instead, we've built up a library of findings, PoCs, and remediation advice. We tailor them to each framework and environment's unique attributes.

- 4) Validate remediation efforts
  - Once a vulnerability is fixed, we work closely with development teams to test permutations of the issue and ensure it's fully remediated.

- 5) Improve testing

  - On each iteration, we look at the results, fine-tune our tools, and continue learning from the data.

This approach isn't as scalable or profitable as simply spitting out the results. However, we believe it's the only way to truly ensure quality findings.

# Hackers At Heart

As a team of hackers, we're passionate about security first and foremost. Bootstrapping has forced us to remain humble, work harder, and stay true to our roots as hackers. It compels us to go against the grain and find creative angles others may have missed, instead of relying on throwing money at problems.

And it's working! We prioritize quality over quantity. We ensure highly skilled professionals are in the loop. We avoid chasing automations and profit at all costs.

As a result, we've been able to provided industry-leading security testing to our customers and continually identify high-impact vulnerabilities.

---

This article was written by humans for humans.

Interested in learning how we can help you identify and remediate vulnerabilities? [Book a call with the founders of GlitchSecure](/intro/).
