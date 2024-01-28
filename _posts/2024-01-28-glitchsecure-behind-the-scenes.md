---
layout: post
# The filename will be used for URL slug generation, try to keep it to 1-3 words
title: "A look into how we built our security testing offering"
# Keep the title short, does not need to match the filename
subtitle: "How we continually help companies identify and remediate vulnerabilities without millions in VC"
# Subtitles should be 90-120 characters
date: 2024-01-28
# Date in YYYY-MM-DD Format, should match date used in the filename
date-updated:
# Date in YYYY-MM-DD Format. Add this if a change is made after the date above
author: Jade Null
# Use "GlitchSecure" if no author
coauthor:
# Coauthor or optionally the editors name
category: updates
# Use either updates, resources, guides as the category

image:
# Images are stored in the assets/img/ folder.
# Create a new subfolder within assets/img/blog/ for each post new.
  hero: blog/10/hero.jpg
  # Upload a 1920x1008 image, replace 10 with the post slug or number
  # This is used for the background on the post
  feature: blog/10/feature.jpg
  # Upload a 1200x630px image, replace 10 with the post slug or number
  # This is used for the preview of the post
  credit: cottonbro studio
  # Include the feature photo authors name
  creditlink: https://www.pexels.com/photo/green-and-white-lights-5473951/
  # Include link to original photo source
hero-vertical: true
# Whether to use a vertical layout. Default is true for blog posts.
hero-wrapper-padding: "pb-24"
# This must be set to "pb-24" when using a vertical layout and removed when not.
comments: true
# Whether or not comments are enabled. This hasn't been implemented yet, but generally we can leave them enabled for anything that's not an update.
---

As a small bootstrapped and capital effiecent company with a focus on security testing, you can imagine we're up against some pretty big players. From incumbent PTaaS providers with pools of hundreds of gig-work or "crowd-sourced" hackers, to SaaS based security tools that claim to automate the pentest.

At GlitchSecure, we're neither of those things, and we won't ever be. But that may leave you wondering, what are we and how do we stack up against these providers? Let's dive in...


# Penetration Testing

It's no secret that Penetration Testing is becoming more and more commotized. Crowd-sourced vendors have done a lot to reduce the cost through the gig-work model and steal away customers from the larger incumbent consultantancies. This however has created a large divide in quality and budget.

When you go out to look for a human powered penetration test, these days you really have two options.

- A crowd sourced "PTaaS" pentest. Cheap but of variable quality due to the nature of gig-work.
- A traditional penetration test. Expensive but often performed by highly experienced and well paid consultants.

This new paradime has created a gap in the market. Software companies that care about security more than a compliance checkbox want to know the quality of work is done right, that the hackers working on their pentest are focued with limited context switching, and that they have their backs. They also want this without spending tens of thousands of dollars.

We fill that gap in the market simply because we are small. By not having VC pressure to grow at all costs, we're able to build up our team of highly skilled security professionals, work closely with our customers to extend their team, and even turn down projects that may not be a good fit for our uniuqe skill set.

We're also able to do that since human driven penetration testing isn't our primary focus as a company. While it's not as scalable, the services aspect of our business is an important one as it helps us self-fund development of our platform and our continuous security testing offering.

# Building a Platform

[When I started](/updates/introducing-glitchsecure) writing the code for the GlitchSecure platform, I set out to streamline my existing security consulting, automate the collaboration and reporting process, and give my customers a better experience than a one and done PDF with remediation tracking handled in a spreedsheet. The reality is I could have done this with off the shelf commercial or opensource software like Plextrac or Dradis, but I wanted something that fit my specific needs.

After only a few short months of writing code in 2022 I had an MVP and was able to work with my first customer to provide penetration testing through it. The experience from both sides was great and the platform did a few things really well:

- It allowed the customer to see findings as I found them
- It provided additional insight and consitency by mapping what I was doing to an industry standard methodology and displaying that work to the customer
- It saved me time by automating report delivery which meant more time to hack
- It allowed real-time collaboration

The MVP was a total success. The cost? 3 months of my time and under $10k. For a fraction of the price of the existing commercial PTaaS delivery platforms I was able meet my goals, learn some new tricks in my framework of choice (Laravel), and build up something that could help me better deliver the penetration testing services I was already providing. As I grew the team and our consulting practice grew, the platform proved invaluable for maintaining that level of quality and speed of delivery.

# Exploring Automation

With a pentest delivery platform built and the team growing, we shifted our focus to exploring automated testing. While we strongly believe we are a long way from fully automated web application penetration testing —[some companies are sinking tens of millions just to scratch the surface](https://old.reddit.com/r/cybersecurity/comments/1acpbmi/what_the_hell_is_ptaas/kjwl3h2/?context=1)— we knew there were a good handful of tasks we could automate within the OWASP Application Security Verification Standard (ASVS) and that there was already a wealth of automations out there in the form of opensource projects like testssl, nuclei, and OWASP ZAP as well as commercial offferings that stand on their own.

While researching this, we learned more and more from customers about what they were doing and what they wanted. After extensive customer interviews we found that most software companies who pay for security testing fell into one or both of the following categories:

- They were performing regular (quarterly, annualy) human driven penetration testing.
- Their teams used vulnerability scanners or Dynamic Application Security Testing (DAST) tools in-house.

There is an inside joke within the security community around what my friend Travis calls "Pentest puppy mills". The reality is, anyone can go out and buy a copy of a well known vulnerability scanner, slap their logo on it, and call it a pentest. Some companies have even gone so far as to call that automated pentesting and build their entire platform on top of it.

At GlitchSecure, we approached this differently. We learned that while companies were spending money on these tools, they were going under utilised and leaving teams overwhelemed. While a company can go out and deploy a commercial DAST tool, the reality is that doing so [requires a large amount of resources to both deploy and get value out of it](/resources/the-hidden-cost-of-self-managed-dast). With this knowledge on hand, we started building out our Continuous Security Testing product.

# Continuous Security Testing

As a small bootstrapped team, we knew that try as we may there are limits to what we could automate on our own. We also knew from customer interviews that companies were already paying for and underutilisng DAST tooling. With a platform already built to manage and deliver findings, we began looking for ways to integrate the well known tools such as Acunetix, Burp Enterprise, OWASP ZAP, Nuclei, and yes, even Nessus. While evaluating these tools, we found that results can vary widley from tool to tool, and environment to environment.

So why settle on one? By ingesting data from not just our own automation or a single tool, but as many as we could get our hands on, we started to see some really cool results and begin to infer things we couldn't without all the data. From this we were able to build our product offering to not only deliver more results that a single tool on it's own, but also better identify one-off false-positives from real and exploitable vulnerabilities.

# The Human Touch

While orchistrating a dozen different automated security testing tools and ingesting the data is cool and all, it can be a bit overwhelming to sift through dozens or even hundreds of results to find the signal through the noise.

That's where our team comes back in. While we could have just called it a day and started marketing this as a point and click SaaS, because we have less pressure we decided to bring the human element back in.

Each and every result that our platform ingests from those tools is manually reviewed by our team. We take a 3 step approach when doing this.

- 1) Consolidate the results
  - We take the large amount of data collected and consolidate it into a logical set of potential vulnerabilities.
- 2) Prove exploitablity
  - We take those potential vulnerabilities and manually validate each one, demonstrating impact and ensuring validitity.
- 3) Explore additional attacks
  - Once we've proven a vulnerability is real and exploitable, we'll often spend some additional time manually testing permutations.
- 4) Provide tailored advice
  - We don't just copy and paste the information from the tools, but instead build up a library of findings, PoCs, and remediation advice while tailoring them to each framework and environments unique attributes.

While this approach isn't as scalable —or profitable— as simply spitting out the results we get, we believe it's the only way to truly ensure quality findings.

# Conclusion

As a team of hackers, we're passionate about security first and foremost. Bootstrapping has forced us to remain humble, work harder, and stay true to our roots as hackers. It forces us to go against the grain and find creative angles others missed instead of relying on throwing money at problems.

And it's worked! By remaining a bootstrapped company we've been able to build something unique within our industry that's not easily repeatable by our VC backed counterparts. Because we priortise quality over quantity, ensure highly skilled professionals are in the loop, and aren't trying to chase automations and profit at all costs we've been able to successfully provide industry leading security testing to our customers and continually identify high impact vulnerabilities. 

---

This article was written by humans for humans. Interested in learning how we can help you identify and remediate vulnerabilities? [Book a call with the founders of GlitchSecure](/demo/).
