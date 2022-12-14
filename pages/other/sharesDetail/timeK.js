var option;

let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [
	[base, Math.random() * 300]
];
for (let i = 1; i < 200; i++) {
	let now = new Date((base += oneDay));
	data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);

	console.log("data", data)
}
option = {
	tooltip: {
		trigger: 'axis',
		position: function(pt) {
			return [pt[0], '10%'];
		}
	},
	title: {
		left: 'center',
		text: 'Large Ara Chart'
	},
	xAxis: {
		type: 'time',
		boundaryGap: false
	},
	yAxis: {
		type: 'value',
		boundaryGap: [0, '100%']
	},
	dataZoom: [{
			type: 'inside',
			start: 0,
			end: 20
		},
		{
			start: 0,
			end: 20
		}
	],
	series: [{
		name: '时分图',
		type: 'line',
		smooth: true,
		symbol: 'none',
		areaStyle: {},
		data: data
	}]
};

export {
	option
}
