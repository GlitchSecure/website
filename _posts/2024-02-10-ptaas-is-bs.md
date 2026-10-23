---
layout: post
# The filename will be used for URL slug generation, try to keep it to 1-3 words
title: "PTaaS is BS"
# Keep the title short, does not need to match the filename
subtitle: "Why (we think) Penetration Testing as a Service is bullshit."
# Subtitles should be 90-120 characters
date: 2024-02-10
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
  hero: blog/10/header.jpg
  # Upload a 1920x1008 image, replace 10 with the post slug or number
  # This is used for the background on the post
  feature: blog/10/feature.jpg
  # Upload a 1200x630px image, replace 10 with the post slug or number
  # This is used for the preview of the post
  credit: Vladimir Srajber
  # Include the feature photo authors name
  creditlink: https://www.pexels.com/photo/horse-poop-on-ground-15671402/
  # Include link to original photo source
hero-vertical: true
# Whether to use a vertical layout. Default is true for blog posts.
hero-wrapper-padding: "pb-24"
# This must be set to "pb-24" when using a vertical layout and removed when not.
comments: true
# Whether or not comments are enabled. This hasn't been implemented yet, but generally we can leave them enabled for anything that's not an update.
---

Recently a redditor asked ["What the hell is PTaaS?"](https://old.reddit.com/r/cybersecurity/comments/1acpbmi/what_the_hell_is_ptaas/)

This is a really good question. While every vendor has a different spin on what they call Penetraion Testing as a Service, the term is often assoiated with one or both of the following:

- Providing Penetration Testing services in a more real-time manner utilising a custom built dashboard or off the shelf software like Plextrac instead of forcing you to wait for some consultant to craft a PDF in word.
- Using crowd-sourced gig-workers to more quickly spin up a penetration test at a lower cost.

In this article, we'll dive into why we think the PTaaS model is marketing bullshit, and why we actively avoid using it.

# Traditional Penetration Testing

Before we dive into PTaaS, it's important to look at how Penetration Testing has historically been performed.

Usually the process looks a little something like:

1. Find a reputable security consultancy and work with them to scope out a test
2. Get a quote and set a time on the calendar for the test to begin
3. Anxiously wait for the testing period to come and go, get a fancy PDF report some time later
4. ~Argue~ work with the consultants to ensure your patches actually fix the flaws.

This process often involved a lot of spreadsheets, emails, and meetings. While some consultancies figured this out better than others, it's a process just dieing for a software solution.

# -aaS All The Things

Efforts to streamline parts of the traditional penetration testing process with a software platform have always been a thing. But where there is software, there are people looking to turn that into a subscription.

# Uber for Pentesting

One of the most infamous users of the term, the ~dingleberries~* lovely folks at Cobalt, [once described PTaaS](https://resource.cobalt.io/hubfs/Pentest_as_a_Service_Impact_Report_2020.pdf) as the following:

> We define Pentest as a Service (PtaaS) as a service that utilizes a global talent pool of certified
pentesters and a data-centric platform to deliver pentests.

<small>* Cobalt once spent 6 months trying to bully GlitchSecure and a friend of the company with legal threats, but that's a story for another time! Don't waste everyones time again Chris ;)</small>

Building on the backs of commerical and open source penetration testing platforms alike,


# It's all BS

# Other Options
