---
layout: post
# The filename will be used for URL slug generation, try to keep it to 1-3 words
title: "I'm an example post"
# Keep the title short, does not need to match the filename
subtitle: "A short description that is ideally under 120 characters in length to prevent cut off and ensure it's easily sharable."
# Subtitles should be 90-120 characters
date: 2032-07-31
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

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

---

This is a demo of all styled elements in Jekyll Now.

This is a paragraph, it's surrounded by whitespace. Next up are some headers, they're heavily influenced by GitHub's markdown style.

# Header 1

Lorem Ipsum

## Header 2

Lorem Ipsum

### Header 3

Lorem Ipsum

#### Header 4

A link to [Jekyll Now](http://github.com/barryclark/jekyll-now/). A big ass literal link <http://github.com/barryclark/jekyll-now/>

An image

![an image alt text](/assets/img/about/team/glitchsecure.jpg "an image title")

* A bulletted list
- alternative syntax 1
+ alternative syntax 2
  - an indented list item

1. An
2. ordered
3. list

Inline markup styles:

- _italics_
- **bold**
- `code()`

> Blockquote
>> Nested Blockquote

Syntax highlighting can be used by wrapping your code in a liquid tag like so:


{% highlight javascript %}
/* Some pointless Javascript */
var rawr = ["r", "a", "w", "r"];
{% endhighlight %}

Use two trailing spaces  
on the right  
to create linebreak tags  

Finally, horizontal lines

----
****
