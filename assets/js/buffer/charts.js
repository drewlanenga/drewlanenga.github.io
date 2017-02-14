
var colors = {
	primary: {
		blue: "#008CED",
		darkgrey: "#323B43",
		midgrey: "#8A99A4", // for text
		barelygrey: "#F8F8F8",
		white: "#FFFFFF",
		purple: "#6763D9",
		black: "#0D0A0B",
	}
}

var bufferlogo = {
	paths: [
		"M157.1 0c3.8 0 7.9 1.5 11.4 3.2 45.6 21.1 91.2 42.4 136.7 63.8 3.3 1.5 8 2.1 8.1 7 .1 5-4.7 5.6-7.9 7.1-45.8 21.5-91.7 42.9-137.6 64.3-7.4 3.4-14.8 3.5-22.2 0C99 123.6 52.3 101.9 5.8 80 3.4 78.9.4 76 .4 74s3.1-4.8 5.5-5.9C52.4 46.2 99.1 24.4 145.8 2.8c3.3-1.6 8.7-2.8 11.3-2.8z",
		"M156.6 235c-3.1 0-7.7-1.7-11.3-3.3-46.5-21.6-93-43.3-139.4-65.1-2.4-1.1-5.8-4.1-5.6-5.8.3-2.4 3.2-5 5.7-6.3 7.5-4 15.3-7.3 23-10.9 7.9-3.7 15.7-3.6 23.6.1 30.4 14.3 61 28.4 91.4 42.7 8.6 4.1 16.8 4 25.4-.1 30.4-14.3 60.9-28.4 91.4-42.7 7.7-3.6 15.4-3.7 23.1-.1 8.2 3.8 16.4 7.4 24.4 11.5 2.1 1.1 4.9 3.7 4.7 5.4-.2 2.1-2.7 4.8-4.9 5.9-46.8 22.1-93.7 44-140.7 65.8-3.2 1.4-7.5 2.9-10.8 2.9z",
		"M156.8 321.4c-4.6 0-9.3-2.3-13.4-4.2-45.2-20.9-90.3-42-135.4-63.1-3.3-1.5-8-2.1-8-7.1s3.8-5.5 7-7.1c13.9-6.5 14.9-6.5 21.8-9.8 8-3.8 16-3.7 24.1.1 29.9 14 59.8 27.7 89.6 41.9 9.6 4.6 18.5 4.7 28.2.1 29.8-14.2 59.8-27.9 89.6-41.9 8.2-3.9 16.3-4 24.5 0 7.8 3.8 15.8 7.2 23.5 11.1 2.1 1.1 4.8 3.3 4.8 5.4-.1 2.4-2.7 4.8-4.9 5.9-32.2 15.3-64.5 30.3-96.8 45.4-13.9 6.5-27.7 13.1-41.7 19.3-4 1.8-8.2 4-12.9 4z"
	]
}

function appendBufferLogo(el, w, h, p) {
	g = el.append("g")
		.attr("transform", "translate(0, " + p + ")")
	
	svg = g.append("svg")

	svg.attr("width", w)
		.attr("height", h)
		.attr("x", "0px")
		.attr("y", "0px")
		.attr("viewBox", "0 0 363.1 74.2")
		.style("enable-background", "new 0 0 363.1 74.2;")

	var paths = [
		"M102,71.3c0-3.5,0-6.6,0-9.7c0-18.2,0.2-36.3-0.1-54.5c-0.1-4.7,1.3-6.3,5.9-5.8c2.3,0.3,4.6,0,7.5,0c0,8.4,0,16.2,0,23.1 c5.8-1.7,11.3-4.3,16.9-4.6c9.4-0.5,16.4,5.6,19.6,15.5c2.5,7.7,2.4,15.5-0.4,23c-5.5,14.7-21.5,18.9-33.7,9.1 c-0.5-0.4-1-0.7-1.9-1.3c-0.2,1.9-0.4,3.3-0.6,5.1C111,71.3,106.9,71.3,102,71.3z M114.6,46.6c0.8,3.6,0.7,7.8,2.7,10.6 c3.2,4.4,10.7,5.1,15.5,2.5c5.1-2.7,7.9-9.5,6.7-16.4c-1-6.2-4.8-10.5-10.1-11.5C120,30.2,115.4,35,114.6,46.6z",
		"M291.7,50.4c0.9,12,12.1,14.8,27.7,7.5c1.7,2.5,3.5,5.1,5.2,7.5c-8.1,8.7-26,10-36.7,2.8c-10.2-6.9-13.9-21.3-8.5-33.5 c5.2-11.6,18.2-17.7,30.8-14.3c12,3.2,19.3,15,17.9,29.9C316.1,50.4,303.9,50.4,291.7,50.4z M315.5,41.2c-1.3-7.5-6.1-11.4-12.8-11 c-6.4,0.3-10.7,4.4-11.3,11C299.3,41.2,307.2,41.2,315.5,41.2z",
		"M193.5,21.1c4.7,0,8.5,0,12.7,0c0,16.7,0,33.2,0,50.2c-3.9,0-8,0-12.3,0c-0.2-1.5-0.4-3.1-0.8-5.4c-5.7,4.7-11.7,7.4-18.9,7 c-8.9-0.5-14.4-4.9-14.7-13.7c-0.4-12.5-0.1-24.9-0.1-37.8c4.2,0,8.3,0,13.1,0c0,5.5,0,11.1,0,16.7c0,4.2,0.1,8.3,0,12.5 c-0.1,4.7,0.8,8.7,6.1,10.1c5,1.3,12.1-1,14.2-5c0.7-1.4,0.7-3.2,0.7-4.8C193.5,41.1,193.5,31.4,193.5,21.1z",
		"M248.9,5.3c-1.5,2.4-3,4.6-4.3,6.8c-10.3-2.1-13.1-0.1-11.8,8.6c3,0.2,6.1,0.3,9.4,0.5c0,3.7,0,7.2,0,11 c-3.1,0.2-6.2,0.4-10,0.6c0,12.9,0,25.6,0,38.5c-4.8,0-8.8,0-13.5,0c0-13,0-25.7,0-38.6c-2.8-0.2-5.1-0.4-7.8-0.6 c0-3.7,0-7.2,0-11.1c2.5-0.2,4.9-0.3,7.6-0.5c0.1-8.4,2-15.8,10.7-19.1C235.5-0.8,243.4,0.6,248.9,5.3z",
		"M253.1,32.9c-3.3-0.2-5.6-0.4-8.1-0.6c0-3.7,0-7.1,0-11c2.4-0.2,4.8-0.3,7.8-0.6c0.2-8.8,2.3-16.9,12-19.5 c6.5-1.7,12.8-1,18.5,3.8c-1.6,2.6-3.1,5-4.5,7.2c-9.4-2.7-12.7-0.5-11.9,8.5c3,0,6.1,0,9.5,0c0,4.1,0,7.6,0,11.5 c-3.2,0.2-6.1,0.3-9.7,0.5c0,12.8,0,25.5,0,38.5c-4.7,0-8.7,0-13.5,0C253.1,58.6,253.1,45.9,253.1,32.9z",
		"M347.4,71c-1,0.4-1.3,0.6-1.6,0.6c-11.6,0.9-11.6,0.9-11.6-10.7c0-11.3,0-22.6,0-33.9c0-1.8,0-3.6,0-5.7c4.6,0,8.7,0,13,0 c0.1,1.7,0.3,3.4,0.4,4.7c4.9-2.4,9.8-4.8,15.6-7.6c0,5.5,0,9.4,0,13.6c-1.7,0.1-3.5,0.1-5.3,0.5c-9,2.1-11,4-10.6,12 C347.8,53.3,347.4,62.1,347.4,71z",
		"M36.2,0c0.9,0,1.8,0.4,2.6,0.7c10.5,4.9,21,9.8,31.6,14.7c0.8,0.4,1.8,0.5,1.9,1.6c0,1.2-1.1,1.3-1.8,1.6 c-10.6,5-21.2,9.9-31.8,14.8c-1.7,0.8-3.4,0.8-5.1,0c-10.8-5-21.5-10-32.3-15.1c-0.5-0.3-1.3-0.9-1.2-1.4c0-0.5,0.7-1.1,1.3-1.4 C12.1,10.7,22.9,5.6,33.6,0.6C34.4,0.3,35.7,0,36.2,0z",
		"M36.1,54.2c-0.7,0-1.8-0.4-2.6-0.8c-10.7-5-21.5-10-32.2-15c-0.6-0.3-1.3-0.9-1.3-1.3c0.1-0.5,0.7-1.2,1.3-1.5 c1.7-0.9,3.5-1.7,5.3-2.5c1.8-0.8,3.6-0.8,5.4,0c7,3.3,14.1,6.5,21.1,9.9c2,0.9,3.9,0.9,5.9,0c7-3.3,14.1-6.6,21.1-9.9 c1.8-0.8,3.6-0.9,5.3,0c1.9,0.9,3.8,1.7,5.6,2.7c0.5,0.2,1.1,0.9,1.1,1.2c0,0.5-0.6,1.1-1.1,1.4c-10.8,5.1-21.6,10.1-32.5,15.2 C37.9,53.9,36.9,54.2,36.1,54.2z",
		"M36.2,74.2c-1.1,0-2.1-0.5-3.1-1c-10.4-4.8-20.8-9.7-31.2-14.6C1.1,58.3,0,58.2,0,57c0-1.2,0.9-1.3,1.6-1.6 c3.2-1.5,3.4-1.5,5-2.3c1.9-0.9,3.7-0.9,5.6,0c6.9,3.2,13.8,6.4,20.7,9.7c2.2,1.1,4.3,1.1,6.5,0c6.9-3.3,13.8-6.4,20.7-9.7 c1.9-0.9,3.8-0.9,5.7,0c1.8,0.9,3.6,1.7,5.4,2.6c0.5,0.2,1.1,0.8,1.1,1.2c0,0.6-0.6,1.1-1.1,1.4c-7.4,3.5-14.9,7-22.3,10.5 c-3.2,1.5-6.4,3-9.6,4.5C38.2,73.7,37.3,74.2,36.2,74.2z"
	]

	for(var i = 0; i < paths.length; i++) {
		svg.append("path")
			.attr("class", "layer")
			.attr("d", paths[i])
			.style("fill", colors.primary.white)
	}
}

function appendSlackLogo(el, w, h, p) {
	g = el.append("g")
		.attr("transform", "translate(0, " + p + ")")

	var paths = [
		"m 2013,917.844 c 39.07,-17.051 41.92,-29.84 11.37,-88.094 -31.26,-59.68 -39.08,-63.23 -77.44,-47.598 -48.31,20.598 -110.12,36.231 -149.9,36.231 -65.36,0 -108.7,-23.445 -108.7,-58.965 0,-117.227 374.41,-53.996 374.41,-304.07 0,-125.75 -108,-209.578 -269.97,-209.578 -85.26,0 -190.41,28.414 -262.87,65.359 -36.23,18.469 -38.36,29.125 -7.1,88.805 27,52.574 35.52,58.257 74.59,41.918 61.81,-27 139.96,-47.602 192.54,-47.602 59.67,0 99.46,24.156 99.46,59.676 0,113.672 -380.8,59.676 -380.8,301.937 0,128.59 107.28,214.555 267.84,214.555 75.31,0 170.5,-22.734 236.57,-52.574",
		"M 2314.96,1214.81 V 282.711 c 0,-14.211 -14.91,-29.133 -36.22,-29.133 h -98.05 c -21.31,0 -36.23,14.922 -36.23,29.133 v 932.099 c 0,46.17 12.79,50.44 85.25,50.44 82.42,0 85.25,-5.68 85.25,-50.44",
		"m 2560.07,458.191 c 0,-47.605 40.49,-79.57 101.59,-79.57 73.89,0 140.66,35.52 179.74,95.906 v 62.52 c -39.08,14.922 -86.68,23.445 -129.3,23.445 -90.94,0 -152.03,-43.336 -152.03,-102.301 z M 3011.9,690.504 V 289.102 c 0,-21.309 -14.91,-36.231 -36.22,-36.231 h -96.63 c -22.02,0 -37.65,16.34 -36.23,38.363 l 1.42,43.336 c -52.57,-58.254 -127.88,-88.8 -203.19,-88.8 -146.35,0 -244.39,84.542 -244.39,210.996 0,134.277 110.83,224.5 277.08,225.211 63.23,0 120.77,-11.368 167.66,-30.547 v 46.179 c 0,73.887 -58.26,117.93 -157.01,117.93 -46.18,0 -103.01,-18.473 -148.48,-44.754 -34.81,-19.894 -43.34,-18.476 -80.99,37.649 -36.94,56.128 -35.53,66.785 0,89.515 68.2,44.051 160.56,72.469 245.81,72.469 191.11,0 311.17,-103.727 311.17,-279.914",
		"m 3676.92,916.422 c 35.51,-20.602 36.94,-31.969 -2.14,-92.356 -36.94,-56.836 -43.33,-60.39 -82.4,-40.496 -29.84,15.629 -77.45,29.129 -116.52,29.129 -122.9,0 -204.61,-80.988 -204.61,-203.187 0,-127.168 81.71,-212.422 204.61,-212.422 42.63,0 95.91,16.344 130.72,35.523 35.52,20.606 43.34,19.184 80.99,-35.523 34.1,-51.152 33.39,-63.227 2.84,-84.539 -54.7,-37.656 -141.38,-66.781 -217.39,-66.781 -227.34,0 -379.38,145.636 -379.38,363.742 0,216.683 152.04,360.906 380.8,360.906 69.62,0 151.33,-23.445 202.48,-53.996",
		"m 4418.64,341.68 c 28.42,-36.235 17.05,-49.024 -54,-74.598 -72.46,-26.293 -82.41,-24.863 -107.98,8.523 l -203.19,271.387 -90.94,-88.09 V 282.711 c 0,-14.211 -14.91,-29.133 -36.22,-29.133 h -98.05 c -21.31,0 -36.23,14.922 -36.23,29.133 v 932.099 c 0,46.17 12.79,50.44 85.25,50.44 82.42,0 85.25,-5.68 85.25,-50.44 V 684.82 l 278.5,267.125 c 30.55,29.129 47.6,26.993 102.3,-9.238 60.39,-39.07 64.65,-49.727 35.52,-78.145 L 4171.4,662.797 4418.64,341.68",
		"M 514.773,677.684 568.641,516.863 735.719,572.816 681.855,733.641 514.773,677.684",
		"M 514.773,677.684 568.641,516.863 735.719,572.816 681.855,733.641 514.773,677.684",
		"m 980.828,518.191 -81.016,-27.132 28.079,-83.832 c 11.371,-33.95 -6.934,-70.684 -40.879,-82.051 -7.383,-2.473 -14.899,-3.543 -22.254,-3.352 -26.473,0.688 -50.895,17.668 -59.789,44.231 l -28.078,83.836 -167.079,-55.957 28.083,-83.832 c 11.367,-33.946 -6.934,-70.68 -40.879,-82.051 -7.383,-2.473 -14.903,-3.539 -22.258,-3.352 -26.465,0.692 -50.895,17.672 -59.789,44.231 l -28.078,83.84 -81.036,-27.141 c -7.382,-2.473 -14.898,-3.539 -22.253,-3.348 -26.469,0.684 -50.895,17.668 -59.79,44.231 -11.371,33.945 6.934,70.676 40.879,82.047 l 81.024,27.136 -53.863,160.821 -81.024,-27.137 c -7.383,-2.473 -14.898,-3.539 -22.254,-3.352 -26.469,0.688 -50.894,17.672 -59.789,44.231 -11.371,33.945 6.934,70.68 40.883,82.051 l 81.012,27.132 -28.082,83.832 c -11.371,33.95 6.933,70.68 40.882,82.051 33.95,11.364 70.676,-6.937 82.043,-40.879 l 28.079,-83.836 167.082,55.953 -28.079,83.836 c -11.371,33.946 6.934,70.682 40.879,82.052 33.938,11.37 70.676,-6.93 82.043,-40.88 l 28.078,-83.836 81.028,27.133 c 33.961,11.367 70.679,-6.937 82.043,-40.879 11.371,-33.945 -6.934,-70.676 -40.879,-82.047 l -81.02,-27.136 53.864,-160.821 81.027,27.137 c 33.949,11.356 70.682,-6.937 82.042,-40.883 11.37,-33.941 -6.93,-70.676 -40.882,-82.047 z M 1198.16,797.133 C 1069.25,1226.81 883.051,1327.07 453.367,1198.16 23.6836,1069.25 -76.5703,883.051 52.3398,453.367 181.25,23.6914 367.445,-76.5703 797.129,52.3398 1226.81,181.25 1327.07,367.449 1198.16,797.133"
	]

	svg = g.append("svg")

	svg.attr("width", w)
		.attr("height", h)
		.attr("x", 0)
		.attr("y", 0)
		.attr("viewBox", "0 0 591.08002 168.69333")

	pathContainer = svg.append("g")
		.attr("transform", "matrix(1.333333,0,0,-1.33333333,0,168.69333)")
		.append("g")
			.attr("transform", "scale(0.1)")

	for(var i = 0; i < paths.length; i++) {
		pathContainer.append("path")
			.attr("id", "path" + i)
			.attr("d", paths[i])
			.style("fill-rule", "nonzero")
			.style("stroke", "none")
			.style("fill", colors.primary.white)
	}
}


 var charts = {
 	props: {
 		titleHeight: 36,
 		footerHeight: 20
 	},
 	/*
		GLOBAL config properties
			- h: height of the chart guts
			- w: width of the entire chart
			- padding: global padding around the edges

 	*/
 	formatDate: function(d) {
 		return d.getDate() + " " + charts.months[d.getMonth()].toUpperCase() + " " + d.getFullYear();
 	},
 	months: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
	draw: function(config, method, includeFooter, includeHeader, bumpers) {
		var metaStuff = {
			headerHeight: 80,
			headerPadding: 36,
			footerHeight: 36,
			footerPadding: 24,
			hrHeight: 1
		};

		var width = config.w - config.padding * 2;
		var height = config.h - config.padding * 2;

		var totalHeight = config.h
		if(includeFooter) {
			totalHeight += metaStuff.footerHeight + metaStuff.footerPadding
		}

		if(includeHeader) {
			totalHeight += metaStuff.headerHeight + metaStuff.headerPadding + metaStuff.hrHeight
		}

		var svg = d3.select(config.selector).append("svg")
			.attr("width", config.w)
			.attr("height", totalHeight)
			//.attr("xmlns", "http://www.w3.org/2000/svg")
			//.attr("xmlns:xlink", "http://www.w3.org/1999/xlink")

		svg.append("rect")
			.attr("width", config.w)
			.attr("height", totalHeight)
			.style("fill", colors.primary.white)

		var topPadding = config.padding


		if(includeHeader) {
			topPadding += metaStuff.headerHeight

			chartHeader = svg.append("g") //.selectAll("g.chart-header")
				.attr("class", "chart-header")
				.attr("width", width)
				.attr("height", metaStuff.headerHeight)
				.attr("transform", "translate(" + config.padding + "," + config.padding + ")")

			if(bumpers) {
				chartHeader.append("rect")
					.attr("class", "bg")
					.attr("width", width)
					.attr("height", metaStuff.headerHeight)
					.style("fill", "#996699")
			}

			chartTitleBox = chartHeader.append("text")
				.attr("class", "chart-titlebox")
				.attr("dy", "1em")

			chartTitleBox.append("tspan")
				.attr("class", "chart-title")
				.attr("text-anchor", "start")
				.attr("dy", "1em")
				.style("fill", colors.primary.black)
				.text(config.title)

			chartTitleBox.append("tspan")
				.attr("class", "chart-subtitle")
				.attr("text-anchor", "start")
				.attr("x", 0)
				.attr("dy", "2em")
				.style("fill", colors.primary.grey)
				.style("font-size", "12pt")
				.text(config.subtitle)

			chartTitleHr = svg.append("rect")
				.attr("height", metaStuff.hrHeight)
				.attr("width", width)
				.attr("x", config.padding)
				.attr("y", topPadding)
				.style("fill", colors.primary.grey)

			topPadding += metaStuff.headerPadding
		}

		guts = svg.append("g")
			.attr("class", "chart-guts")
			.attr("width", width)
			.attr("height", height)
			.attr("transform", "translate(" + config.padding + ", " + topPadding + ")")

		if(bumpers) {	
			svg.append("rect")
				.attr("class", "bg")
				.attr("width", config.w)
				.attr("height", totalHeight)
				.style("fill", '#DDDDAA')
				.style("opacity", 0.3)

			guts.append("rect")
				.attr("class", "bg")
				.attr("width", width)
				.attr("height", height)
		}

		if(includeFooter) {
			voffset = topPadding + height + metaStuff.footerPadding

			// write the footer
			chartFooter = svg.append("g")
				.attr("class", "chart-footer")
				.attr("width", width)
				.attr("height", metaStuff.footerHeight)
				.attr("transform", "translate(" + config.padding + ", " + voffset + ")")

			footerBg = chartFooter.append("rect")
				.attr("width", width + config.padding * 2)
				.attr("height", metaStuff.footerHeight + config.padding)
				.attr("fill", colors.primary.darkgrey)
				.attr("transform", "translate(-" + config.padding + ", 0)")

			if(bumpers) {
				chartFooter.append("rect")
					.attr("class", "bg")
					.attr("width", width)
					.attr("height", metaStuff.footerHeight)
					.style("fill", "#669966")
			}

			appendBufferLogo(chartFooter, 100, 21.5, 12.25)

			chartFooterRight = chartFooter.append("g")
				.attr("transform", "translate(685, 0)")
			
			//appendSlackLogo(chartFooterRight, 100, 21.5, 12.25)
		}

		console.log({totalHeight: totalHeight, height: height, width: width, config: config})

		// do boilerplate stuff
		method(config, guts)

		/*
		// re-extract height/width stuff for final positioning... maybe
		height = 

		svg.attr("width", width)
		svg.attr("height", height)
		*/
	},
	createLogo: function(ctx) {
		ctx.append("g")
			.attr("class", "chart-logo")
	},
	drawCollaboration: function(config, ctx) {
		chartData = config.chartData

		var padding = {h: 60, v: 20};
		var labelHeight = 46;

		var height = ctx.attr("height")
		var width = ctx.attr("width") - padding.h * 2

		var innerDistance = width / (chartData.nodes.length - 1);

		var centers = {};
		for(var i=0; i<chartData.nodes.length; i++) {
			team = chartData.nodes[i];
			centers[team.id] = (innerDistance * i) + padding.h;
		}

		var edgeMax = d3.max(chartData.edges, function(x){ return x.explore; })
		var nodeMax = d3.max(chartData.nodes, function(x){ return x.energy; })
		var arcGroup = ctx.append("g")
			.attr("class", "arc-group")
			.attr("transform", "translate(0, 0)")
		arcGroup.selectAll("path")
			.data(chartData.edges).enter()
			.append("path")
			.attr("stroke-width", function(d, i){ return 15 * d.explore / edgeMax; })
			.attr("d", function(d, i){
				var from = d.from;
				var to = d.to;

				var fromX = centers[from];
				var toX = centers[to];

				var x1 = fromX;
				var x2 = toX;
				if(fromX > toX) {
					var x1 = toX;
					var x2 = fromX;
				}

				var y = height - padding.v - labelHeight;

				val = 40;
				var arc = "M " + x1 + "," + y + " A " + val + "," + parseInt(val / 1.25)  + " 0 1 1 " + x2 + "," + y;
				return arc;
			})
			.style("opacity", function(d){ return Math.pow(d.explore / edgeMax, 0.75); })

		var circleGroup = ctx.append("g")
			.attr("class", "circle-group")

		var entities = circleGroup.selectAll("g.entity")
		      .data(chartData.nodes)
		      .enter()
		      .append("g")
		      	.attr("class", "entity")
		      	.attr("cx", function(d, i){ return centers[d.id]; })

		entities.append("circle")
		      .attr("cx", function(d, i){ return centers[d.id]; })
		      .attr("cy", height - padding.v - labelHeight)
		      .attr("r", function(d, i){ return Math.sqrt((200 * d.energy/nodeMax) / Math.PI ); })
		      /*.attr("fill", "#FDE643")*/
		      .attr("nodeid", function(d) { return d.id; });

		entities.append("text")
			.attr("text-anchor", "middle")
			.attr("x", function(d){ return centers[d.id]; })
			.attr("y", height - padding.v)
			.text(function(d){ return d.name; })

		// legend
		var linearSize = d3.scale.linear().domain([0,10]).range([0, 20]);

		ctx.append("g")
			.attr("class", "legendSize")
			.attr("transform", "translate(20, 40)");

		/*
		var legendSize = d3.legend.size()
			.scale(linearSize)
			.shape('circle')
			.shapePadding(15)
			.labelOffset(20)
			.ascending(true)
			.title('Team Energy')
			.orient('vertical');

		ctx.select(".legendSize")
			.call(legendSize);
		*/

	},
	// note: doesn't draw three axes very well
	drawRadar: function(config, ctx) {
		var allAxis = config.chartData.radar.actual
		var total = allAxis.length

		var radians = 2 * Math.PI
		var nticks = 5 //  20, 40, 60, 80, 100 (0 implicit)
		var padding = 0
		var height = ctx.attr("height") - (padding * 2)
		var width = ctx.attr("width") - (padding * 2)

		var radius = Math.min(height, width) / 3

		function xy(factor, i, op) {
			return( factor * (1 - op(i * radians / total)) )
		}

		function calcXY(percentageOfMax, maxLength, percentRadian, op) {
			return(op(percentRadian * radians) * maxLength * percentageOfMax)
		}

		ctx = ctx.append("g")
			.attr("width", width)
			.attr("height", height)
			.attr("class", "spider-axis")
			.attr("transform", "translate(0, 0)")

		// draw chart ticks
		var tickFactor = 0
		for( var j=1; j <= nticks; j++) {
			tickFactor = j / nticks
			ctx.selectAll(".levels")
				.data(allAxis)
				.enter()
				.append("svg:line")
				.attr("x1", function(d, i){ return -calcXY(tickFactor, radius, i / total, Math.sin); })
				.attr("y1", function(d, i){ return -calcXY(tickFactor, radius, i / total, Math.cos); })
				.attr("x2", function(d, i){ return -calcXY(tickFactor, radius, (i+1) / total, Math.sin); })
				.attr("y2", function(d, i){ return -calcXY(tickFactor, radius, (i+1) / total, Math.cos); })
				.attr("class", "line")
				.attr("transform", "translate(" + (width/2) + ", " + (height/2) + ")")
		}

		var series = 0;

		// create the axis object
		var axis = ctx.selectAll(".axis")
			.data(allAxis)
			.enter()
			.append("g")
			.attr("class", "axis")

		// draw axes
		axis.append("line")
			.attr("x1", width/2)
			.attr("y1", height/2)
			.attr("x2", function(d, i){ return width/2 - calcXY(1.05, radius, i / total, Math.sin); })
			.attr("y2", function(d, i){ return height/2 - calcXY(1.05, radius, i / total, Math.cos); })
			.attr("class", "line")
			.style("stroke-width", "3px")


		// add axis labels
		labels = axis.append("text")
			.attr("class", "legend")
			.attr("text-anchor", "middle")
			.attr("dy", "1.5em")
			.attr("transform", "translate(0, -24)")
			.attr("x", function(d, i){ return width/2 - calcXY(1.3, radius, i / total, Math.sin); })
			.attr("y", function(d, i){ return height/2 - calcXY(1.3, radius, i / total, Math.cos); })
			
		labels.append("tspan")
			.attr("class", "axis-label")
			.attr("text-anchor", "middle")
			.attr("dy", "1.2em")
			.attr("x", function(d, i){ return width/2 - calcXY(1.3, radius, i / total, Math.sin); })
			.text(function(d){ return d.name.toUpperCase(); })
			
		labels.append("tspan")
			.attr("class", "axis-value")
			.attr("text-anchor", "middle")
			.attr("dy", "1.2em")
			.attr("x", function(d, i){ return width/2 - calcXY(1.3, radius, i / total, Math.sin); })
			.text(function(d){ return d.value; })


		charts.drawPolygons(ctx, config.chartData.radar.benchmark, "radar-chart-benchmark", width, height, radius, total, calcXY)
		charts.drawPolygons(ctx, config.chartData.radar.actual, "radar-chart-actual", width, height, radius, total, calcXY)
	},
	drawPolygons: function(ctx, chartData, className, width, height, radius, total, calcXY) {
		dataValues = [];
		ctx.selectAll(".nodes")
			.data(chartData, function(j, i){
				dataValues.push([
					width/2 - calcXY(j.value / 100, radius, i / total, Math.sin),
					height/2 - calcXY(j.value / 100, radius, i / total, Math.cos)
				]);
			})

		// polygon needs to come full circle
		dataValues.push(dataValues[0]);

		ctx.selectAll(".area")
			.data([dataValues])
			.enter()
			.append("polygon")
			.attr("class", className)
			.attr("points", function(d){
				var str = "";
				for(var pointi=0; pointi<d.length; pointi++) {
					str += d[pointi][0] + ", " + d[pointi][1] + " ";
				}
				return str;
			})	
	},
	drawKarma: function(config, ctx) {
		var karmaData = config.chartData.karma

		var padding = {w: 0, h: 20};

		var height = ctx.attr("height") - (padding.h * 2)
		var width = ctx.attr("width") - (padding.w * 2)

		
		var npeople = Math.min(karmaData.length, config.chartData.maxKarmaDims.rows * config.chartData.maxKarmaDims.cols)
		var ncol = Math.ceil(Math.max(config.chartData.maxKarmaDims.cols, npeople) / config.chartData.maxKarmaDims.rows)
		var nrow = Math.ceil(npeople / ncol)
		
		karmaData.splice(npeople)

		var gridHeight = height
		var gridWidth = width

		var cellWidth = gridWidth / ncol
		var cellHeight = gridHeight / nrow

		function getIJ(index, nrows, ncols) {
			var j = index % ncols
			var i = Math.floor(index / ncols)
			return {i: i, j: j}
		}

		var karmaRadius = Math.min(gridHeight / nrow, gridWidth / ncol) * 0.4
		var karmaArea = Math.PI * Math.pow(karmaRadius, 2)

		function calcR(area) {
			return Math.sqrt(area / Math.PI);
		}

		var maxKarma = 0
		var coords = []
		for( var i=0; i<npeople; i++ ) {
			
			if(karmaData[i].value > maxKarma) {
				maxKarma = karmaData[i].value;
			}

			ij = getIJ(i, nrow, ncol)

			coords.push({
				x: (ij.j / ncol * gridWidth) + (cellWidth / 2) + padding.w,
				y: (ij.i / nrow * gridHeight) + (cellHeight / 3) + padding.h
			})
		}

		entities = ctx.selectAll("g.entity")
			.data(karmaData)
			.enter()
			.append("g")
				.attr("class", "entity")
				.attr("cx", function(d, i){ return coords[i].x; })

		entities.append("circle")
			.attr("class", "karma-circle")
			.attr("cx", function(d, i){ return coords[i].x; })
			.attr("cy", function(d, i){ return coords[i].y; })
			.attr("r", function(d, i){ return calcR(d.value / maxKarma * karmaArea); })
		

		labels = entities.append("text")
			.attr("x", function(d, i){ return coords[i].x; })
			.attr("y", function(d, i){ return coords[i].y + karmaRadius; })

		labels.append("tspan")
			.attr("class", "axis-label")
			.attr("text-anchor", "middle")
			.attr("dy", "1.2em")
			.attr("x", function(d, i){ return coords[i].x; })
			.text(function(d, i){ return d.name; })
		
		labels.append("tspan")
			.attr("class", "axis-value")
			.attr("text-anchor", "middle")
			.attr("dy", "1.2em")
			.attr("x", function(d, i){ return coords[i].x; })
			.text(function(d, i){ return d.value; })
	},
	drawParallelBars: function(config, ctx) {
		var barData = config.chartData.bars

		var titleHeight = 40

		var height = ctx.attr("height") - titleHeight
		var width = ctx.attr("width")

		var ncolumns = config.chartData.bars.length

		var totalColumnPadding = width * 0.1
		var columnPadding = totalColumnPadding / (ncolumns - 1)
		var columnWidth = (width - totalColumnPadding) / ncolumns

		var labelWidth = 140
		var barWidth = columnWidth - labelWidth

		console.log({cw: columnWidth, bw: barWidth, cp: columnPadding})

		for(var i=0; i<barData.length; i++) {
			var columnOffset = (columnWidth + columnPadding) * i
			var rowHeight = height / (barData[i].bars.length + 1)
			var rowPadding = rowHeight * 0.1

			g = ctx.append("g")
				.attr("x", columnOffset)
				.attr("y", 0)

			g.append("text")
				.attr("class", "column-label")
				.attr("x", columnOffset + labelWidth)
				.attr("y", titleHeight)
				.text(barData[i].name)


			rows = g.selectAll("g.bar-row")
				.data(barData[i].bars)
				.enter()
				.append("g")
					.attr("class", "bar-row")
					.attr("height", rowHeight)
			
			rows.append("rect")
				.attr("class", "bar")
				.attr("x", columnOffset + labelWidth)
				.attr("y", function(d, i){ return (i+1) * rowHeight + rowPadding; })
				.attr("width", function(d, i){ return d.value / 100 * barWidth; })
				.attr("height", rowHeight - rowPadding * 2)

			rows.append("text")
				.attr("class", "bar-label")
				.attr("x", columnOffset)
				.attr("y", function(d, i){ return ((i+1) * rowHeight) + (rowHeight / 2); })
				.text(function(d){ return d.name; })

			rows.append("text")
				.attr("class", "bar-value")
				.attr("x", columnOffset + labelWidth + rowPadding)
				.attr("y", function(d, i){ return ((i+1) * rowHeight) + (rowHeight / 2); })
				.text(function(d){ return d.value; })

			var imgs = rows.append("svg:image")
				.attr("class", "headshot")
				.attr("xlink:href", function(d){ return "headshots/" + d.id + ".png"; }) //"file:///D:/d3js_projects/refresh.png")
				.attr("x", columnOffset + labelWidth - (rowHeight))
				.attr("y", function(d, i){ return((i+1) * rowHeight); })
				.attr("width", rowHeight)
				.attr("height", rowHeight)
		}
	},
	drawNetwork: function(config, ctx) {

		var padding = {w: 120, h: 50};

		var height = ctx.attr("height") - (padding.h * 2)
		var width = ctx.attr("width") - (padding.w * 2)

		var xmin =  99999;
		var xmax = -99999;
		var ymin =  99999;
		var ymax = -99999;
		
		var nodes = config.chartData.nodes;
		var n = nodes.length;
		
		for( var i = 0; i < n; i++ ) {
			node = config.chartData.nodes[i];
			if(node !== undefined) {
				if(node.x < xmin) {
					xmin = node.x;
				}
				if(node.x > xmax) {
					xmax = node.x;
				}
				if(node.y < ymin) {
					ymin = node.y;
				}
				if(node.y > ymax) {
					ymax = node.y;
				}
			}
		}

		var x = d3.scale.linear()
			.domain([xmin, xmax])
			.range([0, width]);
		
		var y = d3.scale.linear()
			.domain([ymin, ymax])
			.range([0, height]);

		getNodeCoords = function(i) {
			var node = nodes[i];
			return {x: x(nodes[i-1].x), y: y(nodes[i-1].y)};
		}

		var graph = ctx.append("g")
			.attr("transform", "translate(" + padding.w + ", " + padding.h + ")")

		var edges = graph.selectAll("line")
			.data(config.chartData.links)
			.enter()
			.append("line")
				.attr("x1", function(d){ return getNodeCoords(d.source).x; })
				.attr("x2", function(d){ return getNodeCoords(d.target).x; })
				.attr("y1", function(d){ return getNodeCoords(d.source).y; })
				.attr("y2", function(d){ return getNodeCoords(d.target).y; })
				.style("stroke-width", 2)
				.style("stroke", colors.primary.darkgrey)
				.style("stroke-opacity", 0.07)

		var nodes = graph.selectAll("g.node")
			.data(config.chartData.nodes)
			.enter()
			.append("g")
				.attr("class", "node")
				.attr("transform", function(d, i) { return "translate(" + x(d.x) + ", " + y(d.y) + ")"; })

		nodes.append("circle")
		// sqrt(sqrt(vip.centrality$between / 30) + 0.2)
			.attr("r", function(d, i){ return Math.sqrt(d.between) + 5; })
			.style("fill", colors.primary.blue)
			.style("stroke", colors.primary.white)
			.style("stroke", 2)
	},
	drawLine: function(config, ctx) {
		var padding = {w: 80, h: 40};
		var height = ctx.attr("height") - (padding.h * 2)
		var width = ctx.attr("width") - (padding.w * 2)

		console.log({chartData: config.chartData});

		var formatDate = d3.time.format("%Y-%m-%d");
		for(var i = 0; i < config.chartData.length; i++) {
			config.chartData[i].when = formatDate.parse(config.chartData[i].when)
		}

		var x = d3.time.scale()
			.range([0, width]);

		var y = d3.scale.linear()
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.ticks(6)
			.tickSize(-height);

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.ticks(4)
			.tickSize(2);

		var rawline = d3.svg.line()
			.x(function(d) { return x(d.when); })
			.y(function(d) { return y(d.count); });
		var smoothline = d3.svg.line()
			.x(function(d) { return x(d.when); })
			.y(function(d) { return y(d.smooth); });


		x.domain(d3.extent(config.chartData, function(d) { return d.when; }));
		y.domain(d3.extent(config.chartData, function(d) { return d.count; }));

		var graph = ctx.append("g")
			.attr("transform", "translate(" + padding.w + ", " + padding.h + ")")

		graph.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		graph.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end");

		graph.append("path")
			.datum(config.chartData)
			.attr("class", "rawline")
			.attr("d", rawline);

		graph.append("path")
			.datum(config.chartData)
			.attr("class", "smoothline")
			.attr("d", smoothline);
	},
	getRadialCoord: function(i, n, r, f) {
		var radians = (360 / n) / 57.2957795;
		var degrees = f(i * radians);
		return degrees * r + r;
	},
	getRadialX: function(i, n, r) {
		return charts.getRadialCoord(i, n, r, Math.cos);
	},
	getRadialY: function(i, n, r) {
		return charts.getRadialCoord(i, n, r, Math.sin);
	},
	drawEngagement: function(config, ctx) {
		var padding = {w: 120, h: 50};

		var height = ctx.attr("height") - (padding.h * 2)
		var width = ctx.attr("width") - (padding.w * 2)

		var nrings = config.chartData.groups.length;


		var bigRadius = 300 //Math.min(width, height) / 2;
		var smallRadius = 60; // ??

		var tip = d3.tip()
			.attr('class', 'd3-tip')
			.offset([-10, 0])
			.html(function(d) {
				return "<div class='tooltip'> <strong>" + d.name +  "</strong> </div>";
			})
		ctx.call(tip);

		// draw links
		var lineExtent = d3.extent(config.chartData.edges, function(d){ return d.explore; })
		function lineWeight(d, scale) {
			return( scale * d.explore / lineExtent[1] );
		}
		var ringLinks = ctx.selectAll("line.ring-link")
			.data(config.chartData.edges)
			.enter()
			.append("line")
				.attr("class", "ring-link")
				.attr("x1", function(d){ return getNodeCoords(d.from).x })
				.attr("x2", function(d){ return getNodeCoords(d.to).x })
				.attr("y1", function(d){ return getNodeCoords(d.from).y })
				.attr("y2", function(d){ return getNodeCoords(d.to).y })
				.style("stroke", colors.primary.darkgrey)
				.style("stroke-width", function(d){ return lineWeight(d, 80); })
				//.style("stroke-opacity", function(d){ return lineWeight(d, 0.7); })
				//.style("filter", "url(#blurFilter)")

		// draw rings
		function getNodeCoords(id) {
			var index = 0;
			for( var i = 0; i < config.chartData.groups.length; i++ ) {
				if(config.chartData.groups[i].id == id) {
					index = i;
					break;
				}
			}

			return {x: charts.getRadialX(index, nrings, bigRadius) + smallRadius, y: charts.getRadialY(index, nrings, bigRadius) + smallRadius};
		}

		var rings = ctx.selectAll("g.ring")
			.data(config.chartData.groups)
			.enter()
			.append("g")
				.attr("id", function(d, i){ return "ring-" + i; })
				.attr("class", "ring")
				.attr("width", smallRadius * 2)
				.attr("height", smallRadius * 2)
				.attr("transform", function(d, i) {  return "translate(" + charts.getRadialX(i, nrings, bigRadius) + "," + charts.getRadialY(i, nrings, bigRadius) + ")"; })
		
		for( var i = 0; i < config.chartData.groups.length; i++ ) {
			charts.drawRing(ctx.selectAll("#ring-" + i), smallRadius, tip)
		}
	},
	drawRing: function(ring, r, tip) {
		chartData = ring.data()[0]
		n = chartData.nodes.length;
		function getNodeCoords(id) {
			var index = 0;
			for( var i = 0; i < chartData.nodes.length; i++ ) {
				if(chartData.nodes[i].id == id) {
					index = i;
					break;
				}
			}
			return {x: charts.getRadialX(index, n, r), y: charts.getRadialY(index, n, r)};
		}

		var div = ring.append("div")	
			.attr("class", "tooltip")				
			.style("opacity", 0);

		var lineExtent = d3.extent(chartData.edges, function(d){ return d.explore; })
		function lineWeight(d, scale) {
			return( scale * d.explore / lineExtent[1] );
		}

		// draw bg
		ring.append("circle")
			.attr("cx", r)
			.attr("cy", r)
			.attr("r", r)
			.style("fill", colors.primary.white)

		// draw links
		var links = ring.selectAll("line.connection")
			.data(chartData.edges)
			.enter()
			.append("line")
			.attr("class", "connection")
			.attr("x1", function(d){ return getNodeCoords(d.from).x })
			.attr("x2", function(d){ return getNodeCoords(d.to).x })
			.attr("y1", function(d){ return getNodeCoords(d.from).y })
			.attr("y2", function(d){ return getNodeCoords(d.to).y })
			.attr("from", function(d){ return d.from; })
			.attr("to", function(d){ return d.to; })
			.attr("stroke-linecap", "round")
			.style("stroke", colors.primary.darkgrey)
			.style("stroke-width", function(d){ return lineWeight(d, 20) })
			//.style("stroke-opacity", function(d){ return lineWeight(d, 0.7) });

		// big white circle overlay
		ring.append("circle")
			.attr("cx", r)
			.attr("cy", r)
			.attr("r", r)
			.style("fill-opacity", 0)
			.style("stroke", colors.primary.white)
			.style("stroke-width", 10)

		// draw people
		var circles = ring.selectAll("circle.person")
			.data(chartData.nodes)
			.enter()
			.append("circle")
			.attr("class", "person")
			.attr("cx", function(d, i) { return charts.getRadialX(i, n, r); })
			.attr("cy", function(d, i) { return charts.getRadialY(i, n, r); })
			.attr("r", function(d, i) { return(Math.sqrt(d.between)); })
			.style("fill", colors.primary.blue)
			.style("stroke", colors.primary.white)
			.style("stroke-width", 2)
			.attr("nodeid", function(d) { return d.id; })
			.on("mouseover", function(d){
				tip.show(d);
				d3.selectAll("line[from]").transition().style("stroke-opacity", "0.2")
				d3.selectAll("line[from='" + d.id + "']").transition().style("stroke-opacity", "0.8")
				d3.selectAll("line[to='" + d.id + "']").transition().style("stroke-opacity", "0.8")
			})
			.on("mouseout", function(d){
				tip.hide(d);
				d3.selectAll("line[from]").transition().style("stroke-opacity", "0.5")
			})
	},
	drawPack: function(config, ctx) {
		var padding = {h: 60, v: 20};
		var height = ctx.attr("height")
		var width = ctx.attr("width") - padding.h * 2

		var r = width / 2;

		var w = 1280,
			h = 800,
			//r = 720,
			x = d3.scale.linear().range([0, r]),
			y = d3.scale.linear().range([0, r]),
			node,
			root;

		var pack = d3.layout.pack()
			.size([r, r])
			.value(function(d) { return 10; }); //d.size; })

		node = root = config.chartData.pack;

		var nodes = pack.nodes(root);

		ctx.selectAll("circle")
			.data(nodes)
			.enter().append("svg:circle")
			.attr("id", function(d) { return d.id; })
			.attr("svg:title", function(d) { return d.name; })
			.attr("class", function(d) { return d.children ? "parent" : "child"; })
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; })
			.attr("r", function(d) { return d.r; })
			.on("click", function(d){
				console.log(d);
			})
			.on("mouseover", function(d){
				console.log(d)
				if(d.id) {
					for(var name in d) {
						if(name != "name" && name != "id") {
							console.log(name, d[name]);
							d3.selectAll("#pack circle[id='" + name + "']").transition().style("opacity", String(d[name]))
						}
					}
					
					/*
					d3.selectAll("#pack circle[id='']").transition().style("opacity", "0")
					d3.selectAll("path[source='" + d.properties.name + "']").transition().style("stroke-width", "4")
					d3.selectAll("path[target='" + d.properties.name + "']").transition().style("stroke-width", "4")
					*/
				}
			})
			// add hover listener

		
		ctx.selectAll("text")
			.data(nodes)
			.enter().append("svg:text")
			.attr("class", function(d) { return d.children ? "parent" : "child"; })
			.attr("x", function(d) { return d.x; })
			.attr("y", function(d) { return d.y; })
			.attr("dy", ".35em")
			.attr("text-anchor", "middle")
			.style("opacity", function(d) { return d.r > 20 ? 1 : 0; })
			.text(function(d) { return d.name; });


	},
	drawGlobe: function(config, ctx) {
		var center = [50.0, -40.0];

		var padding = {h: 60, v: 20};
		var height = ctx.attr("height")
		var width = ctx.attr("width") - padding.h * 2

		world = config.chartData.world;
		places = config.chartData.places;

		coords = {}
		for(var i = 0; i < places.features.length; i++) {
			feature = places.features[i]
			coords[feature.properties.name] = feature.geometry.coordinates
		}

		// listeners
		ctx.on("mousedown", mousedown)
			.on("mousemove", mousemove)
			.on("mouseup", mouseup);

		proj = d3.geo.orthographic()
			.translate([width / 2, height / 2])
			//.scale(220)
			.scale(330)
			.precision(0.3)
			.rotate(center)
			.clipAngle(90);
		        
		sky = d3.geo.orthographic()
			.translate([width / 2, height / 2])
			.clipAngle(90)
			.scale(420);
			//.scale(280);

		path = d3.geo.path().projection(proj).pointRadius(2);

		swoosh = d3.svg.line()
			.x(function(d) { return d[0]; })
			.y(function(d) { return d[1]; })
			.interpolate("basis");
		var links = [],
		    arcLines = [];

		var ocean_fill = ctx.append("defs").append("radialGradient")
			.attr("id", "ocean_fill")
			//.attr("cx", "75%")
			.attr("cx", "5%")
			//.attr("cy", "25%");
			.attr("cy", "5%");

		// water sphere
		ctx.append("path")
			.datum({type: "Sphere"})
			.attr("class", "water noclick")
			.attr("d", path)
			.style("fill", "#fff");

		// land shape
		ctx.append("path")
			.datum(topojson.object(world, world.objects.land))
			.attr("class", "land noclicks")
			.attr("d", path);
		
		// edge sphere
		ctx.append("path")
			.datum({type: "Sphere"})
			.attr("class", "edge noclick")
			.attr("d", path);

		// build geoJSON features from links array
		config.chartData.links.forEach(function(link, i, a) {
			var feature = { "type": "Feature", "properties": {"weight": link.weight, "source": link.from, "target": link.to}, "geometry": { "type": "LineString", "coordinates": [coords[link.from], coords[link.to]] }};
			arcLines.push(feature);
		});

		ctx.append("g").attr("class","arcs")
			.selectAll("path").data(arcLines)
			.enter()
			.append("path")
			.attr("class", "arc")
			.attr("d", path)
			.attr("source", function(d){ return d.properties.source; })
			.attr("target", function(d){ return d.properties.target; })
			.style("stroke-opacity", function(d){ return d.properties.weight; })

		ctx.append("g")
			.attr("class","points")
			.selectAll("text").data(places.features)
			.enter().append("path")
			.attr("class", "city")
			.attr("svg:title", function(d){ return d.properties.name; })
			.attr("d", path)
			.on("mouseover", function(d){
				d3.selectAll("path[class='arc']").transition().style("stroke-width", "0")
				d3.selectAll("path[source='" + d.properties.name + "']").transition().style("stroke-width", "4")
				d3.selectAll("path[target='" + d.properties.name + "']").transition().style("stroke-width", "4")
			})
			.on("mouseout", function(d){
				d3.selectAll("path[class='arc']").transition().style("stroke-width", "1");
			});

		proj.rotate(center);
		sky.rotate(center);
		refresh();
	}
};

var sky;
var proj;
var path;
var swoosh;

var m0, o0;
function mousedown() {
	m0 = [d3.event.pageX, d3.event.pageY];
	o0 = proj.rotate();
	d3.event.preventDefault();
}

function mousemove() {
	if (m0) {
		var m1 = [d3.event.pageX, d3.event.pageY]
		, o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
		o1[1] = o1[1] > 55 ? 55 :
		o1[1] < -55 ? -55 :
		o1[1];
		proj.rotate(o1);
		sky.rotate(o1);
		refresh();
	}
}

function mouseup() {
	if (m0) {
		mousemove();
		m0 = null;
	}
}

// borrowed from https://gist.github.com/jthomassie/9569067

function refresh() {
	d3.selectAll(".land").attr("d", path);
	d3.selectAll(".city").attr("d", path);
	d3.selectAll("path").attr("d", path);

	d3.selectAll(".arc")
		.attr("d", path)
}