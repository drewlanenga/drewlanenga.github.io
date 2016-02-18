---
layout: post
title:  "Hillary's Damn Emails"
date:   2016-02-17
description: "A glimpse of what we can learn about Hillary's emails."
categories: general
---

> The American people are sick and tired about hearing about [Hillary Clinton's] damn emails.
>
> &ndash; Sen. Bernie Sanders


By now the dust has more than settled on [Hillary Clinton's email controversy](https://en.wikipedia.org/wiki/Hillary_Clinton_email_controversy).

I'm not interested in bringing the topic back from the dead to debate the concerns about the security of potentially confidential information, but more in the network it identifies, which is interesting for two reasons.  First, it could be a nice, toy-ish data set to run analysis and benchmarks against, like the [Enron corpus](https://www.cs.cmu.edu/~./enron/).  Second, it could potentially help identify the type of leadership style and kind of organization that Hillary Clinton runs, which is obviously relevant seeing as how she might end up being [the next American president](http://projects.fivethirtyeight.com/election-2016/national-primary-polls/democratic/).

But first, the data...

## FOIA

First off, the data aren't great.  I got mine from [Kaggle](https://www.kaggle.com/kaggle/hillary-clinton-emails), which had some helpful additions/modifications.

The problem is that the data, which came from a FOIA request, consist of some semi-structured output from computer vision over a bunch of *PDFs* of *scanned* copies of *printed* emails.  So needless to say, there are some inconsistencies in what was extracted [^1]. Some fuzzy matching helped a little, but I still spent a while manually resolving funky naming variations.

The email contacts are the most important part of the data for me &mdash; they identify the structure of the network I care about, and I can now create a matrix that identifies how individuals are engaging with every other individual in the network.  If I had been interested in sentiment analysis or topic modeling I probably wouldn't have cared.

## The Network

![Hillary's State Department Network](/assets/images/hillary-network-full.png)

Sometimes I wish I were a network scientist.  There are a lot of [interesting ways](https://en.wikipedia.org/wiki/Centrality) to think about how important an individual is to a network of people.  I tend to gravitate to [betweenness](https://en.wikipedia.org/wiki/Betweenness_centrality), and the gist of it is this &mdash; I need to talk to Alice, and the only way for me to contact Alice is through our mutual connection, Bob.  Therefore, Bob is important to that network.

**In an unstable network, betweenness is distributed among a few key individuals.**  If someone leaves the network, the results in terms of connectivity and information flow are catastrophic.  **In a stable network, betweenness is distributed more evenly among its members.**

In Hillary's case, we can look at the *betweenness centrality* of everyone in her network to identify who key individuals are.

![Hillary's State Department Betweenness](/assets/images/hillary-betweenness-full.png)

Here we see that **Secretary Clinton's State Department is supported by three key people**: [Jacob Sullivan](https://en.wikipedia.org/wiki/Jake_Sullivan), [Cheryl Mills](https://en.wikipedia.org/wiki/Cheryl_Mills) and [Huma Abedin](https://en.wikipedia.org/wiki/Huma_Abedin).  It seems very reasonable that Secretary Clinton's three most influential staffers would be her Deputy Chief of Staff, Chief of Staff, and semi-Deputy Chief of Staff, respectively.

Are those staffers over-leveraged, creating instability in the network?  Maybe.

Looking at network similarity &mdash; how similarly each individual engages with every other individual in the network, measured by [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity) &mdash; we see a bit of interesting asymmetry.  In terms of **incoming similarity** &mdash; how similarly they receive email from people in the network &mdash; **they're not very similar**, with similarites around 0.6 or below.  But in terms of **outgoing similarity** &mdash; how similarly they send email in the network &mdash; **they're much more similar**, reaching similarities as high as 0.85.


![Hillary's State Department VIP Similarity](/assets/images/hillary-cosine-vip.png)

## Takeaway

What does it all mean?  Secretary Clinton employed a Chief of Staff and Deputy Chiefs of Staff who were able to connect the majority of her State Department.  They received correspondence from a wide set of individuals, and then (likely) corresponded and executed among a smaller, more shared set of individuals.


## Future Work

This is a data set I'd love to spend more time with.  If you'd like to use my resolved aliases, it's available on [GitHub]().  If I were to explore any of this further, I might examine:

1. **How this changes over time**.  Are there individuals whose importance increase or decrease over time, and how was the network affected by it?
2. **Clique analysis**.  I might dive deeper on cliques/neighborhoods/clusters to see who was working with whom, which groups worked well together (or didn't), and what differences might exist in terms of topics discussed and actions taken.
3. **Backchanneling**.  Is there any evidence in the data? With whom?  (How would we detect it?)  What the implications be?
4. **Succession**.  Would there be any catastrophic changes to network connectivity if certain individuals were to leave? What would that mean to the work of the State Department?  What kind of strategies could we surmise to mitigate against it?

At this point I'm just rambling, but I'm sure I'll have more ideas I might want to address later.


### Footnotes

[^1]: For example, [Jake Sullivan](https://en.wikipedia.org/wiki/Jake_Sullivan), who served as Secretary Clinton's Deputy Chief of Staff, appears in over 2,500 email threads with over 40 variations of spelling &mdash; "Sullivan, Jacob J", "sullivanjj@state.gov", "Sullivan, Jacob J <Sullivanil@state.gov>", "isullivanjj@state.govi <sullivanjj@state.gov>", my personal favorite "lake.sullivar", and more!

