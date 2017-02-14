
queue()
	.defer(d3.json, "/assets/js/buffer/pack.json")
	.await(function(error, pack){
		charts.draw({
			w: 960,
			h: 700,
			padding: 10,
			selector: "#pack",
			chartData: {pack: pack}
		}, charts.drawPack, false, false, false)
	});

queue()
	.defer(d3.json, "/assets/js/buffer/world-110m.json")
	.defer(d3.json, "/assets/js/buffer/buffer-cities.json")
	.defer(d3.json, "/assets/js/buffer/buffer-cities-links.json")
	.await(function(error, world, places, links){
		console.log({e: error, w: world, p: places, links});
		chartData = {world: world, places: places, links: links};
		charts.draw({
			w: 960,
			h: 700,
			padding: 10,
			selector: "#world",
			chartData: chartData
		}, charts.drawGlobe, false, false, false)
	});

queue()
	.defer(d3.json, "/assets/js/buffer/timeline.json")
	.await(function(error, timeline){
		console.log({pretimeline: timeline});
		charts.draw({
			w: 960,
			h: 400,
			padding: 10,
			team: 'company',
			selector: "#line",
			chartData: timeline,
			title: "Timeline of Chat Communication",
			subtitle: "Daily counts of raw Slack messages"
		}, charts.drawLine, false, false, false);
	});

queue()
	.defer(d3.json, "/assets/js/buffer/collaboration.json")
	.await(function(error, collaboration){
		console.log({preco: collaboration});
		charts.draw({
			w: 1200,
			h: 500,
			padding: 10,
			selector: "#synergy",
			team: 'company',
			title: "Cross Team Collaboration",
			subtitle: "",
			chartData: collaboration
		}, charts.drawCollaboration, false, false, false);
	});
