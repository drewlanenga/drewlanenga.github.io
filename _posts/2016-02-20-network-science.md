---
layout: post
title:  "Network Science"
date:   2016-02-20
description: "Something catchy here later."
categories: general
draft: true
---


**NB: This is a long post. It'll probably evolve as more technical context is necessary for subsequent posts.  Happy reading :)**

A couple of jobs ago, I was lucky enough to get to work with some very smart network scientists.

We were building a product together that performed network analysis on large corporate organizational networks.  The idea was that many large organizations suffer from teams that worked in isolation, some were bottlenecks.  Some individuals were well connected and facilitated the flow of a lot of information, while others were having a negative impact on network connectivity.

As I've continued to work in smaller startups, I've realized that this problem isn't confined to large groups of people.  **Even companies of 30 people can suffer from the same problems as a company of 300 or 3,000.**  The biggest difference is that in smaller networks they often slip by undetected.

Consequently, I think it's useful enough for everyone to know at least a little bit about terms and concepts in network science **to be able to identify them in our own networks**.

So this isn't meant to serve as a comprehensive introduction into network science.  Just a jump start so we can have more meaningful discussions about how to diagnose and improve our own networks.  Here we go.

## Modeling Relationships

Meet three friends: Alice, Bob and Charlie.  Alice and Bob are good friends.  Bob and Charlie are not.  Bob talks to Charlie, but Charlie never reciprocates.  He's grumpy.  That's why him and Alice aren't friends.

If we wanted to represent this structure mathematically, we'd make a matrix &mdash; every person gets a row and a column.  Then we put a value in every person in a row talks to each person's column.  Ours would look something like this:


|         | Alice | Bob | Charlie |
| ------- | ----- | --- | ------- |
| Alice   |   0   |  1  |    0    |
| Bob     |   1   |  0  |    1    |
| Charlie |   0   |  0  |    0    |


Expressing a network as a matrix allows us to do a lot of math behind the scenes.

### Connectivity

Some colleagues of the network scientists I worked with wrote a [book](http://www.amazon.com/Connected-Surprising-Networks-Friends-Everything/dp/0316036137) on the power of network connectivity.  They note some particularly [interesting work](https://www.cis.upenn.edu/~mkearns/papers/behvoting.pdf) that highlights the importance of a network's structure in its ability to reach concensus.

### Consensus

Let me illustrate: imagine you're the CEO at a venture-backed company that's still struggling to find [product-market fit](http://www.stanford.edu/class/ee204/ProductMarketFit.html).  You're at about 30 employees, and you're confident that the team you built can execute on any business model.  After a lot of research/advice/guts you decide to [pivot](https://en.wikipedia.org/wiki/Lean_startup#Pivot). Everyone seems to be on board, except your Director of Engineering and VP of Sales.

Eventually, and unfortunately, it doesn't pan out.  There were a lot of misaligned expectations, miscommunication, and missed deadlines.  It turns out, the two people who didn't agree with you were the two most [central](#centrality) people at your company.  We'll get to centrality in a minute, but it means that those two individuals are the most strategically connected everyone else at your company.

Why is that so fatal? [Michael Kearns argues](https://www.cis.upenn.edu/~mkearns/papers/KearnsJuddVorobeychik.pdf) that **a network whose core actors are not in consensus will never arrive at a consensus.**  If you're trying to rally around Business Plan B, you need your company to rally with you.  Doubt and negative energy are contagious, and **a team that doesn't have the same vision won't build the same thing**.

If you don't know who your core actors are, you need to.

### Centrality

There are a couple of different ways to determine how important (or central) an actor is in a given network.  The idea is called **[centrality](https://en.wikipedia.org/wiki/Centrality)**, and there are a couple of ways to calculate it.

My favorite centrality metric is called **betweenness**.  To calculate it, first you have to look at the shortest paths between every pair of actors in the network.  If two individuals are connected, their path is of length 1.  If we look at Alice and Charlie from the first example, we see that theirs is of length 2: Alice → Bob → Charlie.  Since Bob is connecting everyone in his network (albeit two people), he is a very important guy.


### Cliques

Cliques exist in every social context.  Sometimes birds of a feather really do [flock together](https://en.wikipedia.org/wiki/Assortativity).

This gets pretty interesting when cliques don't align with some pre-existing or hierarchical structuring.

If they don't align, does it mean that sub-groups form because the existing org chart failed? Or that they're collaborating well with other groups?  If they do align, does it mean that teams are well-defined, or are they working in isolation?

The answers aren't always clear, but asking them can help ensure we're aware of the network structure that's forming.


### Brokerage Roles

In every network, cliques will exist and silos will exist.  Just like it would be inefficient if no one worked together on anything, it would also be inefficient if everyone worked together on everything.

Hence, collaboration.

[Brokerage roles](https://www.insna.org/PDF/Connections/v26/2004_I-1-6.pdf) let us explain how someone facilitates collaboration.  We look at how actors from some groups _broker_ relationship with actors from other groups.

We start by breaking up a network into all of its **triads**. The Alice → Bob → Charlie relationship is a triad &mdash; A is connected to B, and B to C, but A is not connected to C.  We'd say that Bob is a _broker_ in that relationship.

For every triad, we classify the relationship according to the following:

- **Coordinator**: The broker mediates contact between two individuals in the same group: **A → A → A**
- **Consultant**: The broker mediates contact between two individuals in the same group, who are not member of the broker's group: **A → B → A**
- **Representative**: The broker mediates an incoming contact from an out-group member to an in-group member: **A → B → B**
- **Gatekeeper**: The broker mediates an outgoing contact from an in-group member to an out-group member: **A → A → B**
- **Liaison**: The broker mediates contact between two individuals from different groups: **A → B → C**

After we classify all of their triads, we'd say an actor's brokerage role is whatever role they find themselves in most frequently.

