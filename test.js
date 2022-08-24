const x = [
	{
		title: "NICOBAR",
		id: "573",
		color: "#7CFC00",
		balloonText:
			"NICOBAR<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "WEST SIANG",
		id: "517",
		color: "#7CFC00",
		balloonText:
			"WEST SIANG<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "AGRA",
		id: "442",
		color: "#7CFC00",
		balloonText:
			"AGRA<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "FIROZABAD",
		id: "445",
		color: "#7CFC00",
		balloonText:
			"FIROZABAD<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "MAINPURI",
		id: "444",
		color: "#7CFC00",
		balloonText:
			"MAINPURI<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "LEH",
		id: "703",
		color: "#7CFC00",
		balloonText:
			"LEH<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "HARDA",
		id: "229",
		color: "#7CFC00",
		balloonText:
			"HARDA<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "ETAWAH",
		id: "427",
		color: "#7CFC00",
		balloonText:
			"ETAWAH<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "NORTH GOA",
		id: "98",
		color: "#7CFC00",
		balloonText:
			"NORTH GOA<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "SOUTH GOA",
		id: "95",
		color: "#7CFC00",
		balloonText:
			"SOUTH GOA<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "SOUTH ANDAMAN",
		id: "572",
		color: "#7CFC00",
		balloonText:
			"SOUTH ANDAMAN<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
	{
		title: "KARGIL",
		id: "660",
		color: "#7CFC00",
		balloonText:
			"KARGIL<BR>Date: 2022-08-23 :</br>No warning<p></p><p>Updated on:2022-08-22</p>",
	},
];

const a = x.sort((a, b) => b.title - a.title).map((i) => i.title);
console.log(a);
