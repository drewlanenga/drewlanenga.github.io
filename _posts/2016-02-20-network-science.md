---
layout: post
title:  "Network Science"
date:   2016-02-20
description: "An introduction to Network Science for teams between 30 and 300 people."
categories: general, network science
draft: false
---


A couple of jobs ago, I was lucky enough to get to work with some very smart network scientists.

We were building a product together that performed organizational network analysis (ONA) in large enterprise companies.  ONA allows you to get strategic and identify how people collaborate.  You can identify overall network connectiveness, silos and cliques, key contributors, quantify synergy, etc.  We wanted to help companies identify and monitor key metrics and "actionable insights".  People loved it.

Unfortunately, getting there can be a difficult journey.  You have to (1) realize that network science can improve the way people work together, then (2) convince leadership that it's worthwhile because (3) $$$.  People don't have network scientists in-house, and they are definitely scarce and expensive.

Hopefully, by the end of this post you'll be a network science convert with some tools in your belt to start improving your own organizations.

I'll start with examples.  There's a glossary at the end for all the terms I just gloss over.

## Modeling Relationships

Meet three co-workers: Alice, Bob and Charlie.  Alice and Bob are good friends.  Bob and Charlie are not.  Bob talks to Charlie, but Charlie never reciprocates.  He's grumpy.  That's why him and Alice aren't friends.

If we wanted to represent this structure mathematically, we'd make a matrix &mdash; every person gets a row and a column.  Then we put a value in every person in a row talks to each person's column.  Ours would look something like this:


|         | Alice | Bob | Charlie |
| ------- | ----- | --- | ------- |
| Alice   |   0   |  1  |    0    |
| Bob     |   1   |  0  |    1    |
| Charlie |   0   |  0  |    0    |


Expressing a network as a matrix allows us to do a lot of math behind the scenes.

## Cliques

Cliques exist in every social context.  Birds of a feather really do [flock together](https://en.wikipedia.org/wiki/Assortativity).  **Organizations get pretty interesting when cliques don't align with the org chart.**

If they don't align, does it mean that cliques form because the existing org chart failed? Or have they succeeding in opening up collaboration with other groups?  If they do align, does it mean that teams are focused, or are they working in isolation?  It's always a good idea to have a core set of productivity metrics, so the answers to these questions can be validated with experimentation.

## Key Actors

Sometimes there are actors who perform strategic roles in brokering relationships between cliques or structured areas of the organization.  If there are two groups of people working very cohesively, but there's no communication between teams, that's usually a problem.  There needs to be at least a couple of actors brokering communication between the two groups.

You can see why those actors are important to the network &mdash; we'd say that those brokers lie on many _shortest paths_ between the two groups.  That is, if you want to talk with someone from the other group, it's probably through those brokers.  Finding out how many shortest paths an actor lies on is a metric called **betweenness**.

Betweenness is one of a couple metrics that can be used to determine how important &mdash; or _central_ &mdash; an actor is to a network.

### Centrality

Centrality scores are an effort by network scientists to determine how important different actors are.  The idea is that more important members have higher scores of centrality.

Actor centrality can give insights into how stable an organization is.  **A stable network will have pretty similar centrality scores among most of its members.**  That is, each individual is equally important, so if anyone leaves the network, those connections can be easily absorbed by others in the network.

**An unstable network will have most of the centrality in a network carried by a few strategic actors.**  If a highly central actor were to leave the network, it would leave a disproportionately high number of relationships unbrokered.

### Brokerage

When considering an actor's position in a network, we can also consider their functional role in collaboration.

[Brokerage roles](https://www.insna.org/PDF/Connections/v26/2004_I-1-6.pdf) let us explain how someone facilitates collaboration.  We look at how actors from some groups _broker_ relationship with actors from other groups.

We start by breaking up a network into all of its **triads**.  (Triads are formally defined in the glossary.)  For every triad, we classify the relationship according to the following:

- **Coordinator**: The broker mediates contact between two individuals in the same group: **A → A → A**
- **Consultant**: The broker mediates contact between two individuals in the same group, who are not member of the broker's group: **A → B → A**
- **Representative**: The broker mediates an incoming contact from an out-group member to an in-group member: **A → B → B**
- **Gatekeeper**: The broker mediates an outgoing contact from an in-group member to an out-group member: **A → A → B**
- **Liaison**: The broker mediates contact between two individuals from different groups: **A → B → C**

After we classify all of their triads, we'd say an actor's brokerage role is whatever role they find themselves in most frequently.

**When used in conjunction with centrality scores, brokerage roles can be used to identify actors who are important in terms of both centrality and function.**  For example, for succession planning, you might want to identify individuals who have high centrality and fall into a representative role to fill vacant leadership positions on their team.


### Consensus

Some colleagues of the network scientists I worked with wrote a [book](http://www.amazon.com/Connected-Surprising-Networks-Friends-Everything/dp/0316036137) on the power of network connectivity.  They note some particularly [interesting work](https://www.cis.upenn.edu/~mkearns/papers/behvoting.pdf) that highlights the importance of a network's structure in its ability to reach consensus.

Consensus deals with the homogeneity of a network's state.  If everyone in the network were painted red, it would be in consensus.  If some were blue and some were red, it would not be in consensus.

Let me illustrate with an example we're all to familiar with: employee attrition.  When there's unhappiness or dissatisfaction in our network, it's contagious.  Ideally, we'd love it if our network were painted "satisfied", but that won't always be the case.

When key actors in the network &mdash; high centrality and broker strategic relationships &mdash; are dissatisfied, they have a disproportionately high influence on the consensus on the network, which can be fatal.

Why so fatal? [Michael Kearns argues](https://www.cis.upenn.edu/~mkearns/papers/KearnsJuddVorobeychik.pdf) that **a network whose core actors are not in consensus will never arrive at a consensus.**  If you're trying to rally around Business Plan B, you need your company to rally with you.  Doubt and negative energy are contagious, and **a team that doesn't have the same vision won't build the same thing**.





## Glossary

- **Network**: A collection of things that are connected.  Here we've only talked about people.  Some people call it a **graph**, or a [social graph](http://www.zdnet.com/article/facebooks-zuckerberg-uncorks-the-social-graph/).
- **Matrix**: A mathematical representation of a network.  (Specifically, we're talking about an [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix).)
- **Actor**: A person in a network.
- **Edge**: A connection between two actors.  We typically infer edges/connections by email or chat history, or surveys.
- **Triad**: A specific type of connection between three actors.  For actors A, B, and C, a triad exists when A is connected to B and B is connected to C, but A is not connected to C (**A → B → C**). 
- **Shortest Path**: The shortest set of edges between two actors.  You win if you can calculate these for [Kevin Bacon](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon).  Mathematicians call this [geodesic distance](https://en.wikipedia.org/wiki/Distance_(graph_theory)).
- **Connectedness**: There are a couple of ways to evaluate connectedness, which were formulated by a guy named [Krackhardt](http://www.contrib.andrew.cmu.edu/~krack/documents/pubs/1994/1994%20Graph%20Theoretical%20Dimensions%20of%20Informal%20Organizations.pdf).  He proposes four dimensions, which are **connectedness**, **hierarchy**, **efficiency** and least upper boundedness (or **lubness**, for short).  Typically, you like it when your network has high connectedness and efficiency.
- **Centrality**: How [central](https://en.wikipedia.org/wiki/Centrality), or important, an actor is to a network. Popular ways to calculate it are **betweenness**, **closeness**, using **eigenvectors**, or using **PageRank**.  You can get a lot of mileage from looking at centrality in different ways &mdash; comparing among actors, looking at averages across teams, [Pareto charts](https://en.wikipedia.org/wiki/Pareto_chart), etc.
- **Brokerage Role**: The way an actor typically brokers relationships .  Some actors are **gatekeepers**, **liaisons**, **representatives**, **coordinator**, or **consultant**.


<!-- styling for the adjacency matrix table -->
<style>
table {
	margin: 30px auto;
	text-align: center;
}
table thead tr th, table tbody tr td {
	padding: 4px 8px;
	border: 1px solid #CCC;
}
table thead tr th, table tbody tr td:first-child {
	font-weight: bold;
}
table tbody tr td:first-child {
	text-align: right;
}
</style>
