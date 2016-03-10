---
layout: post
title:  "Sanders Would Win Electoral College"
date:   2016-03-08
description: "Sanders currently beats Clinton in terms of Electoral Votes"
categories: general, politics
draft: true
image: /assets/images/posts/electoral-votes/preview.png
---


Lately, most political commentary treats Secretary Clinton as the de facto nominee for the Democratic Party.  Clinton is leading in the delegate count, and has a staggering number of superdelegates already "pledged".

However, people don't elect presidents in the United States &mdash; the [Electoral College](https://en.wikipedia.org/wiki/Electoral_College_(United_States)) does.

What does that mean for Secretary Clinton?  **Most of the states that she is winning are likely to vote Republican anyway.**  So, in effect, her wins wouldn't put her in office.  However, Senator Sanders' wins would.

If you consider current primary results in terms of the 2012 Electoral College, as of March 8th, **Secretary Clinton would have 36** electoral votes, and **Senator Sanders would have 46** electoral votes.

And that includes Clinton's razor-thin victories in [Iowa](https://www.google.com/search?q=iowa+democratic+caucus) and [Massachusetts](https://www.google.com/search?q=massachusetts+democratic+primary).

## Electoral Map

<div id="container" style="position: relative; width: 700px; height: 360px;margin-bottom: 72px;"></div>


States in <span class="caption hillary-yes">dark blue</span> indicate a win for Clinton that would give her Electoral Votes, while states in <span class="caption hillary-no">light blue</span> indicate a win that wouldn't give her Electoral Votes.

States in <span class="caption bernie-yes">dark green</span> indicate a win for Sanders that would give him Electoral Votes, while states in <span class="caption bernie-no">light green</span> indicate a win that wouldn't give him Electoral Votes.

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
<script src="/assets/js/datamaps.all.min.js"></script>


<style>
.hoverinfo table tr td {
  line-height: 1.1em;
  padding: 4px 2px;
}
.caption {
  font-weight: bold;
}
.hillary-yes {
  color: #267291;
}
.hillary-no {
  color: #A7C7D4;
}
.bernie-yes {
  color: #26A65B;
}
.bernie-no {
  color: #A6DCBC;
}
</style>
<script>
var election = new Datamap({
  scope: "usa",
  element: document.getElementById("container"),
  geographyConfig: {
    highlightBorderColor: "#323534",
    popupTemplate: function(geography, data) {
      winner2012 = "Democrat"
      if(data.winner_2012 == "R") {
        winner2012 = "Republican"
      }

      winner2016 = "TBD"
      if(data.winner_2016 == "H") {
        winner2016 = "Hillary"
      } else if(data.winner_2016 == "B") {
        winner2016 = "Bernie"
      }

      tableRows = []
      tableRows.push("<tr> <td> Electoral Votes: </td> <td> " + data.electoral_votes + " </td> </tr>")
      tableRows.push("<tr> <td> 2012 General: <br /> Outcome </td> <td> " + winner2012 + " </td> </tr>")
      tableRows.push("<tr> <td> 2016 Primary: <br /> Outcome </td> <td> " + winner2016 + " </td> </tr>")

      return "<div class='hoverinfo'> <strong>" + geography.properties.name + "</strong><br /> <table><tbody> " + tableRows.join(" ") +  " </tbody></table> </div>"
    },
    highlightOnHover: false,
    highlightBorderWidth: 1
  },
  defaultFillName: "TBD",
  fills: {
  "H1": "#267291",
  "H0": "#A7C7D4",
  "B1": "#26A65B",
  "B0": "#A6DCBC",
  "defaultFill": "#EEE"
},
data:{
 "AL": {
 "electoral_votes": 9,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"AK": {
 "electoral_votes": 3,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"AZ": {
 "electoral_votes": 11,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"AR": {
 "electoral_votes": 6,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"CA": {
 "electoral_votes": 55,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"CO": {
 "electoral_votes": 9,
"winner_2012": "D",
"winner_2016": "B",
"fillKey": "B1" 
},
"CT": {
 "electoral_votes": 7,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"DC": {
 "electoral_votes": 3,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"DE": {
 "electoral_votes": 3,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"FL": {
 "electoral_votes": 29,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"GA": {
 "electoral_votes": 16,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"HI": {
 "electoral_votes": 4,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"ID": {
 "electoral_votes": 4,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"IL": {
 "electoral_votes": 20,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"IN": {
 "electoral_votes": 11,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"IA": {
 "electoral_votes": 6,
"winner_2012": "D",
"winner_2016": "H",
"fillKey": "H1" 
},
"KS": {
 "electoral_votes": 6,
"winner_2012": "R",
"winner_2016": "B",
"fillKey": "B0" 
},
"KY": {
 "electoral_votes": 8,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"LA": {
 "electoral_votes": 8,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"ME": {
 "electoral_votes": 4,
"winner_2012": "D",
"winner_2016": "B",
"fillKey": "B1" 
},
"MD": {
 "electoral_votes": 10,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"MA": {
 "electoral_votes": 11,
"winner_2012": "D",
"winner_2016": "H",
"fillKey": "H1" 
},
"MI": {
 "electoral_votes": 16,
"winner_2012": "D",
"winner_2016": "B",
"fillKey": "B1" 
},
"MN": {
 "electoral_votes": 10,
"winner_2012": "D",
"winner_2016": "B",
"fillKey": "B1" 
},
"MS": {
 "electoral_votes": 6,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"MO": {
 "electoral_votes": 10,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"MT": {
 "electoral_votes": 3,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"NE": {
 "electoral_votes": 5,
"winner_2012": "R",
"winner_2016": "B",
"fillKey": "B0" 
},
"NV": {
 "electoral_votes": 6,
"winner_2012": "D",
"winner_2016": "H",
"fillKey": "H1" 
},
"NH": {
 "electoral_votes": 4,
"winner_2012": "D",
"winner_2016": "B",
"fillKey": "B1" 
},
"NJ": {
 "electoral_votes": 14,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"NM": {
 "electoral_votes": 5,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"NY": {
 "electoral_votes": 29,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"NC": {
 "electoral_votes": 15,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"ND": {
 "electoral_votes": 3,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"OH": {
 "electoral_votes": 18,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"OK": {
 "electoral_votes": 7,
"winner_2012": "R",
"winner_2016": "B",
"fillKey": "B0" 
},
"OR": {
 "electoral_votes": 7,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"PA": {
 "electoral_votes": 20,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"RI": {
 "electoral_votes": 4,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"SC": {
 "electoral_votes": 9,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"SD": {
 "electoral_votes": 3,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"TN": {
 "electoral_votes": 11,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"TX": {
 "electoral_votes": 38,
"winner_2012": "R",
"winner_2016": "H",
"fillKey": "H0" 
},
"UT": {
 "electoral_votes": 6,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"VT": {
 "electoral_votes": 3,
"winner_2012": "D",
"winner_2016": "B",
"fillKey": "B1" 
},
"VA": {
 "electoral_votes": 13,
"winner_2012": "D",
"winner_2016": "H",
"fillKey": "H1" 
},
"WA": {
 "electoral_votes": 12,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"WV": {
 "electoral_votes": 5,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
},
"WI": {
 "electoral_votes": 10,
"winner_2012": "D",
"winner_2016": "",
"fillKey": "NONE" 
},
"WY": {
 "electoral_votes": 3,
"winner_2012": "R",
"winner_2016": "",
"fillKey": "NONE" 
}
}
});
election.labels();
election.legend({
  "labels": {
    "H1": "Clinton:",
    "B1": "Sanders:",
    "H0": " ",
    "B0": " "
  }
});
</script>

