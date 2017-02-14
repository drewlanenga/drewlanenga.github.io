---
layout:      feature
title:       Buffer's Organizational Network
date:        2016-03-08
description: An analysis of Buffer's organizational network
categories:  general, networks, data, startups
draft:       true
image:       /assets/images/posts/electoral-votes/preview.png
stylesheet:  /assets/css/buffer/charts.css

---

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,800italic,800,700italic,700' rel='stylesheet' type='text/css'>

<!--link href="file:///Users/lanenga/Code/js/buffer-d3/charts.css" rel="stylesheet"-->

<script type="text/javascript" src="/assets/js/buffer/d3.v3.js"></script>
<script type="text/javascript" src="/assets/js/buffer/d3-queue.js"></script>
<script type="text/javascript" src="/assets/js/buffer/topojson.js"></script>
<!--script type="text/javascript" src="/assets/js/buffer/d3-tip.js"></script-->
<script type="text/javascript" src="/assets/js/buffer/d3-legend.js"></script>
<script type="text/javascript" src="/assets/js/buffer/charts.js"></script>
<script type="text/javascript" src="/assets/js/buffer/draw.js"></script>

<div id="pack" class="d3"></div>

<style>
#pack circle {
	fill: none;
	stroke: red;
}

#pack .parent {
	fill: purple;
	opacity: 0.2;
}
#pack .child {
	fill: green;
	opacity: 0.4;
}
</style>

## Introduction

Some teams perform better than other teams.

A lot of people research why that is, and what high performing teams have in common.  [Harvard Business Review does](https://hbr.org/2012/03/the-new-science-of-building-gr).  [MIT and CMU do](http://science.sciencemag.org/content/330/6004/686).  Google does.  [The New York Times does](http://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html).  Even [venture capitalists do](http://tomtunguz.com/emotional_intelligence).

So what's the consensus?  High performing teams share two common characteristics.

1.  Team members have higher than average levels of empathy and social awareness.
2.  Team members communicate frequently and informally.

And it's pretty much just those two things.  Some researchers went as far as [getting people to wear sociometers](http://alumni.media.mit.edu/~tanzeem/shortcuts/workingpaper.pdf) that measured all of their communication with and proximity to other team members. They ultimately [found that](https://hbr.org/2012/04/the-new-science-of-building-great-teams) **"patterns of communication [are] the most important predictor of a team's success. Not only that, but they are as significant as all the other factors &mdash; individual intelligence, personality, skill, and the substance of discussions &mdash; combined."**

For most teams, it's hard to get a handle of one's own "patterns of communication" and what that looks like, let alone whether it's good or bad.  Today, we'll use chat data from Slack to look at Buffer's own patterns of communication to identify what is or isn't going well.

## Building a Network

In order to analyze the patterns efficiently, we're going to create an **organizational network**, which will provide us a framework for thinking about interpersonal interactions.  An organizational network is a data structure that describes which team members are communicating with which other team members and allows us to identify *large scale patterns* from *small scale interactions*.

I've looked at a lot of different organizational networks.  I used to work with a network science consultancy that specialized solely on being able to create these networks and answer these questions.  For most companies, that process usually involved hiring a consultancy, creating surveys and bullying everone into completing them, and then running the analysis.  If you wanted the same results six months later, you had to repeat the whole process again.

Luckily for us, we can get the data we need directly from Slack, and we'll start by pulling message metadata from public Slack channels.  For this analysis, we're not going to focus solely on data from public channels.  ?By excluding data from video chats (and arguably meetings), we can focus our exploration on informal communication.  We'll save the analysis on direct messages and private groups for another day.?

## Timeline

Here's a timeline of all messages sent on Buffer's public Slack channels.  The black line shows the raw daily message counts, while the blue line applies a smoother over the raw counts to show a more discernible trend.

<div id="line" class="d3"> </div>

There are a couple of things that are immediately apparent from the timeline. First, Buffer employees chat **a lot**.  During weekdays, Buffer employees send an average of over 2,000 per day, which doesn't include messages sent over private channels, direct messages, reactions to messages, or video conferences.

The second important note on the timeline is the evidence of [healthy work-life balance](https://open.buffer.com/how-much-do-you-work-without-set-hours-a-buffer-case-study/), at least in terms of weekend work.  On weekdays, Buffer employees send an average of over 2,000 messages on public channels.  On weekends, they send on average less than 100 messages.  That is, Buffer employees communicate over 20x less on the weekends.

## A Distributed Team

It's important to not that, by necessity, Buffer employees need chat.  Being a [fully distributed team](https://open.buffer.com/distributed-team-benefits/), unless they're meeting face-to-face at one of their [semi-annual retreats](https://open.buffer.com/inside-buffer-retreat/), all communication happens digitally.

<div id="world" class="d3"> </div>

What that's resulted in, in Buffer's case, is a team that is **much more** connected than many teams of their size with a physical presence.

Let's illustrate why by first defining a term in network science called [centrality](https://en.wikipedia.org/wiki/Centrality).  We'll take a subset of four Buffer employees &mdash; Åsa, Boris, Courtney and Darcy &mdash; and assume they have the following (fictitious) organizational network.  Two members will have a connection if there's a 1 in their cell, and a zero otherwise.

|          | Åsa | Boris | Courtney | Darcy |
| -------- + --- + ----- + -------- + ----- +
| Åsa      |  0  |    0  |       1  |    0  |
| Boris    |  0  |    0  |       1  |    1  |
| Courtney |  1  |    1  |       0  |    1  |
| Darcy    |  0  |    1  |       1  |    0  |

Let's say Åsa needs something from Darcy, but doesn't usually communicate with Darcy, but she does communicate frequently with Courtney and relays the message through her &mdash; Åsa → Courtney → Darcy.  Likewise, Boris shares information he knows to those with whom he works closely.  If Åsa needed information from Boris, it'd likely go through Courtney first &mdash; Boris → Courtney → Åsa.

In this example we see that Courtney's position in this network makes her very important, or *central*. Team members with high centrality help broker a lot of information to other team members, usually moreso than is usually noticeable through interpersonal dynamics.  In a lot of networks, like [Hillary Clinton's State Department](http://drew.lanen.ga/hillary-emails/#the-network), there are a couple of members who wield a large percentage of the centrality &mdash; if they were removed from the network, general connectivity would severly suffer.

In Buffer's case, if you were to remove given employee from the team, overall centrality only decreases by **at most 1.5%**. Each member of the Buffer team is contributing to the Buffer network &mdash; regardless of team, gender, race, hierarchy or tenure.

## Collaboration

While it's a great thing for teams to be communicating frequently and informally, it's also important that communication be directed in ways that maintain collaboration.

There are two fundamental ways that multiple teams in an organization collaborate.  When members on a given team chat amongst themselves, we'll call that **energy**.  When they chat with members of other teams, we'll call that **exploration**.  Usually, it's important to have a healthy balance of both.

Below we can see how different teams balance their energy and exploration.  The grey dot below each team reflects their internal energy, while the blue arcs show the degree of their exploration with other teams.

<div id="synergy" class="d3"> </div>

Let's note that the size of each dot is not a reflection of team size, but of team energy.  We can see that the Happiness team is communicating very frequently amongst themselves, and have a less active role in communicating with some of the other teams, like the Data team or the Marketing team.

On the other hand, the Caretaker team (which consist of founders and other top leaders), have an average inner-team energy, but has strategic above-average exploration with teams, like Product and Engineering.  Visualizing the balance between energy and exploration can help identify if certain teams could benefit by increasing or decreasing communication with other teams.

## Conclusions

We've taken a high-level look at some of Buffer's chat data to understand what patterns of communication emerge.  We've taken a look at communication frequency, work-life balance, effects of a global and distributed team, centrality and collaboration.  These are just some of the points to consider when evaluating how current patterns of communication enable success.  Other points of consideration could include incorporating ticket or project management data to contextualize productivity data or even using sentiment analysis and theme extraction over public messages to identify topics that drive collaboration.

**What are your thoughts?  What would your organizational network reveal about your organization?  Do the modes and patterns of your team's communication enable or hinder your success?**
