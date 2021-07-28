var tasks = [
	"AwardContract",
	"CheckOutcome",
	"ProvideService",
];

var resourceData = [
{label: "Blah", times: [
	{"label":"AwardContract (A3)", task: "AwardContract", "id":"cc607013-3d46-4a39-8d6d-beaf624d1322", "starting_time": 0, "ending_time": 60000, delay: 0, cost: 2},
	{"label":"AwardContract (D2)", task: "AwardContract", "id":"d1de528f-e6f7-42c1-88f4-eba57cd560bc", "starting_time": 60000, "ending_time": 120000, delay: 60000, cost: 2},
	{"label":"AwardContract (A5)", task: "AwardContract", "id":"e5c0a77e-2792-4849-9b58-4c97ff2b08f2", "starting_time": 120000, "ending_time": 180000, delay: 120000, cost: 2},
	{"label":"AwardContract (A1)", task: "AwardContract", "id":"09f8a1e6-ea39-4a0c-9468-dbe332fb12fa", "starting_time": 180000, "ending_time": 240000, delay: 180000, cost: 2},
	{"label":"ProvideService (D4)", task: "ProvideService", "id":"a90e05b6-2179-4d5a-ab30-4056cf55a5f1", "starting_time": 240000, "ending_time": 540000, delay: 180000, cost: 6},
	{"label":"ProvideService (D1)", task: "ProvideService", "id":"b782f268-64a2-4af6-a58b-c4dfec2da79c", "starting_time": 540000, "ending_time": 840000, delay: 480000, cost: 6},
	{"label":"ProvideService (A2)", task: "ProvideService", "id":"4cfd23ea-3655-4783-9129-facacc37bf79", "starting_time": 840000, "ending_time": 1140000, delay: 540000, cost: 6},
	{"label":"CheckOutcome (A2)", task: "CheckOutcome", "id":"6d652be2-ba67-4a5f-8553-edc5d33bf005", "starting_time": 1320000, "ending_time": 1440000, delay: 180000, cost: 3},
	{"label":"CheckOutcome (D2)", task: "CheckOutcome", "id":"ae08783b-1ea2-4f63-99e2-9ecf916f8539", "starting_time": 1620000, "ending_time": 1740000, delay: 720000, cost: 3}
]},
{label: "Orphen", times: [
	{"label":"AwardContract (D4)", task: "AwardContract", "id":"2765e653-3e6d-4b9d-becc-f5fb2ae836a9", "starting_time": 0, "ending_time": 60000, delay: 0, cost: 2},
	{"label":"ProvideService (D5)", task: "ProvideService", "id":"91237848-6a29-4305-9d10-c158db37d6d7", "starting_time": 240000, "ending_time": 540000, delay: 0, cost: 6},
	{"label":"ProvideService (D3)", task: "ProvideService", "id":"df2deea1-8359-4fa4-94b6-dd1c05bcd9d3", "starting_time": 900000, "ending_time": 1200000, delay: 780000, cost: 6},
	{"label":"ProvideService (A4)", task: "ProvideService", "id":"ade376ee-94b6-4fd5-afc8-7c6f40bf3ad1", "starting_time": 1200000, "ending_time": 1500000, delay: 1020000, cost: 6},
	{"label":"ProvideService (A5)", task: "ProvideService", "id":"b3d8bc5b-9442-430a-81eb-0f675dcfed30", "starting_time": 1500000, "ending_time": 1800000, delay: 1320000, cost: 6},
	{"label":"CheckOutcome (A4)", task: "CheckOutcome", "id":"9a78592e-cb74-4fc8-a0c6-3fe00a190014", "starting_time": 1800000, "ending_time": 1920000, delay: 300000, cost: 3}
]},
{label: "Patient1", times: [
	{"label":"ProvideService (D5)", task: "ProvideService", "id":"91237848-6a29-4305-9d10-c158db37d6d7", "starting_time": 240000, "ending_time": 540000, delay: 0, cost: 6},
	{"label":"ProvideService (A2)", task: "ProvideService", "id":"4cfd23ea-3655-4783-9129-facacc37bf79", "starting_time": 840000, "ending_time": 1140000, delay: 540000, cost: 6},
	{"label":"CheckOutcome (D5)", task: "CheckOutcome", "id":"37b12b2d-10e2-4bf9-98de-54e9e6d8e68b", "starting_time": 1200000, "ending_time": 1320000, delay: 660000, cost: 3},
	{"label":"CheckOutcome (A2)", task: "CheckOutcome", "id":"6d652be2-ba67-4a5f-8553-edc5d33bf005", "starting_time": 1320000, "ending_time": 1440000, delay: 180000, cost: 3}
]},
{label: "Patient2", times: [
	{"label":"ProvideService (A3)", task: "ProvideService", "id":"9719cec7-77f7-486d-8e14-5a906a8b9823", "starting_time": 300000, "ending_time": 600000, delay: 240000, cost: 6},
	{"label":"ProvideService (D2)", task: "ProvideService", "id":"8a622d36-1907-4371-936c-45901e72242c", "starting_time": 600000, "ending_time": 900000, delay: 480000, cost: 6},
	{"label":"ProvideService (D3)", task: "ProvideService", "id":"df2deea1-8359-4fa4-94b6-dd1c05bcd9d3", "starting_time": 900000, "ending_time": 1200000, delay: 780000, cost: 6},
	{"label":"ProvideService (A4)", task: "ProvideService", "id":"ade376ee-94b6-4fd5-afc8-7c6f40bf3ad1", "starting_time": 1200000, "ending_time": 1500000, delay: 1020000, cost: 6},
	{"label":"CheckOutcome (A3)", task: "CheckOutcome", "id":"c8c0e847-6570-4a5a-9e61-ad9b3bcba01c", "starting_time": 1500000, "ending_time": 1620000, delay: 900000, cost: 3},
	{"label":"CheckOutcome (D2)", task: "CheckOutcome", "id":"ae08783b-1ea2-4f63-99e2-9ecf916f8539", "starting_time": 1620000, "ending_time": 1740000, delay: 720000, cost: 3},
	{"label":"CheckOutcome (A4)", task: "CheckOutcome", "id":"9a78592e-cb74-4fc8-a0c6-3fe00a190014", "starting_time": 1800000, "ending_time": 1920000, delay: 300000, cost: 3},
	{"label":"CheckOutcome (D3)", task: "CheckOutcome", "id":"e25622f1-1bbf-4c6a-9944-262e5fd99ede", "starting_time": 1920000, "ending_time": 2040000, delay: 720000, cost: 3}
]},
{label: "Patient3", times: [
	{"label":"ProvideService (D4)", task: "ProvideService", "id":"a90e05b6-2179-4d5a-ab30-4056cf55a5f1", "starting_time": 240000, "ending_time": 540000, delay: 180000, cost: 6},
	{"label":"ProvideService (D1)", task: "ProvideService", "id":"b782f268-64a2-4af6-a58b-c4dfec2da79c", "starting_time": 540000, "ending_time": 840000, delay: 480000, cost: 6},
	{"label":"ProvideService (A1)", task: "ProvideService", "id":"897732c3-2859-462d-a52b-405307003acc", "starting_time": 900000, "ending_time": 1200000, delay: 660000, cost: 6},
	{"label":"CheckOutcome (D1)", task: "CheckOutcome", "id":"518224a0-e09d-4241-9ed4-2832e4dafacf", "starting_time": 1320000, "ending_time": 1440000, delay: 480000, cost: 3},
	{"label":"ProvideService (A5)", task: "ProvideService", "id":"b3d8bc5b-9442-430a-81eb-0f675dcfed30", "starting_time": 1500000, "ending_time": 1800000, delay: 1320000, cost: 6},
	{"label":"CheckOutcome (A1)", task: "CheckOutcome", "id":"dd0fc97f-5ce0-454d-b581-709b09146c82", "starting_time": 1800000, "ending_time": 1920000, delay: 600000, cost: 3}
]},
{label: "Petros", times: [
	{"label":"AwardContract (D1)", task: "AwardContract", "id":"96929ae5-144f-4e21-b40e-dd64b520ce9b", "starting_time": 0, "ending_time": 60000, delay: 0, cost: 2},
	{"label":"AwardContract (D3)", task: "AwardContract", "id":"a09715fb-35c7-48a7-b7af-dd2e9da74b10", "starting_time": 60000, "ending_time": 120000, delay: 60000, cost: 2},
	{"label":"AwardContract (A4)", task: "AwardContract", "id":"bc4de2b5-8530-444b-b4fb-8d759b8536ef", "starting_time": 120000, "ending_time": 180000, delay: 120000, cost: 2},
	{"label":"AwardContract (D5)", task: "AwardContract", "id":"e7816890-5e1c-43f8-a1ce-e35092f4f1b1", "starting_time": 180000, "ending_time": 240000, delay: 180000, cost: 2},
	{"label":"AwardContract (A2)", task: "AwardContract", "id":"4b0374fe-1887-47a5-8039-72c3309de36e", "starting_time": 240000, "ending_time": 300000, delay: 240000, cost: 2},
	{"label":"ProvideService (A3)", task: "ProvideService", "id":"9719cec7-77f7-486d-8e14-5a906a8b9823", "starting_time": 300000, "ending_time": 600000, delay: 240000, cost: 6},
	{"label":"ProvideService (D2)", task: "ProvideService", "id":"8a622d36-1907-4371-936c-45901e72242c", "starting_time": 600000, "ending_time": 900000, delay: 480000, cost: 6},
	{"label":"ProvideService (A1)", task: "ProvideService", "id":"897732c3-2859-462d-a52b-405307003acc", "starting_time": 900000, "ending_time": 1200000, delay: 660000, cost: 6},
	{"label":"CheckOutcome (D5)", task: "CheckOutcome", "id":"37b12b2d-10e2-4bf9-98de-54e9e6d8e68b", "starting_time": 1200000, "ending_time": 1320000, delay: 660000, cost: 3},
	{"label":"CheckOutcome (D1)", task: "CheckOutcome", "id":"518224a0-e09d-4241-9ed4-2832e4dafacf", "starting_time": 1320000, "ending_time": 1440000, delay: 480000, cost: 3},
	{"label":"CheckOutcome (A3)", task: "CheckOutcome", "id":"c8c0e847-6570-4a5a-9e61-ad9b3bcba01c", "starting_time": 1500000, "ending_time": 1620000, delay: 900000, cost: 3},
	{"label":"CheckOutcome (A1)", task: "CheckOutcome", "id":"dd0fc97f-5ce0-454d-b581-709b09146c82", "starting_time": 1800000, "ending_time": 1920000, delay: 600000, cost: 3},
	{"label":"CheckOutcome (D3)", task: "CheckOutcome", "id":"e25622f1-1bbf-4c6a-9944-262e5fd99ede", "starting_time": 1920000, "ending_time": 2040000, delay: 720000, cost: 3}
]},
];

var simulationData = [
{label: "A1", times: [
	{"label":"AwardContract (A1)", task: "AwardContract", "id":"09f8a1e6-ea39-4a0c-9468-dbe332fb12fa", "starting_time": 180000, "ending_time": 240000, delay: 180000, cost: 2},
	{"label":"ProvideService (A1)", task: "ProvideService", "id":"897732c3-2859-462d-a52b-405307003acc", "starting_time": 900000, "ending_time": 1200000, delay: 660000, cost: 6},
	{"label":"CheckOutcome (A1)", task: "CheckOutcome", "id":"dd0fc97f-5ce0-454d-b581-709b09146c82", "starting_time": 1800000, "ending_time": 1920000, delay: 600000, cost: 3}
]},
{label: "A2", times: [
	{"label":"AwardContract (A2)", task: "AwardContract", "id":"4b0374fe-1887-47a5-8039-72c3309de36e", "starting_time": 240000, "ending_time": 300000, delay: 240000, cost: 2},
	{"label":"ProvideService (A2)", task: "ProvideService", "id":"4cfd23ea-3655-4783-9129-facacc37bf79", "starting_time": 840000, "ending_time": 1140000, delay: 540000, cost: 6},
	{"label":"CheckOutcome (A2)", task: "CheckOutcome", "id":"6d652be2-ba67-4a5f-8553-edc5d33bf005", "starting_time": 1320000, "ending_time": 1440000, delay: 180000, cost: 3}
]},
{label: "A3", times: [
	{"label":"AwardContract (A3)", task: "AwardContract", "id":"cc607013-3d46-4a39-8d6d-beaf624d1322", "starting_time": 0, "ending_time": 60000, delay: 0, cost: 2},
	{"label":"ProvideService (A3)", task: "ProvideService", "id":"9719cec7-77f7-486d-8e14-5a906a8b9823", "starting_time": 300000, "ending_time": 600000, delay: 240000, cost: 6},
	{"label":"CheckOutcome (A3)", task: "CheckOutcome", "id":"c8c0e847-6570-4a5a-9e61-ad9b3bcba01c", "starting_time": 1500000, "ending_time": 1620000, delay: 900000, cost: 3}
]},
{label: "A4", times: [
	{"label":"AwardContract (A4)", task: "AwardContract", "id":"bc4de2b5-8530-444b-b4fb-8d759b8536ef", "starting_time": 120000, "ending_time": 180000, delay: 120000, cost: 2},
	{"label":"ProvideService (A4)", task: "ProvideService", "id":"ade376ee-94b6-4fd5-afc8-7c6f40bf3ad1", "starting_time": 1200000, "ending_time": 1500000, delay: 1020000, cost: 6},
	{"label":"CheckOutcome (A4)", task: "CheckOutcome", "id":"9a78592e-cb74-4fc8-a0c6-3fe00a190014", "starting_time": 1800000, "ending_time": 1920000, delay: 300000, cost: 3}
]},
{label: "A5", times: [
	{"label":"AwardContract (A5)", task: "AwardContract", "id":"e5c0a77e-2792-4849-9b58-4c97ff2b08f2", "starting_time": 120000, "ending_time": 180000, delay: 120000, cost: 2},
	{"label":"ProvideService (A5)", task: "ProvideService", "id":"b3d8bc5b-9442-430a-81eb-0f675dcfed30", "starting_time": 1500000, "ending_time": 1800000, delay: 1320000, cost: 6}
]},
{label: "D1", times: [
	{"label":"AwardContract (D1)", task: "AwardContract", "id":"96929ae5-144f-4e21-b40e-dd64b520ce9b", "starting_time": 0, "ending_time": 60000, delay: 0, cost: 2},
	{"label":"ProvideService (D1)", task: "ProvideService", "id":"b782f268-64a2-4af6-a58b-c4dfec2da79c", "starting_time": 540000, "ending_time": 840000, delay: 480000, cost: 6},
	{"label":"CheckOutcome (D1)", task: "CheckOutcome", "id":"518224a0-e09d-4241-9ed4-2832e4dafacf", "starting_time": 1320000, "ending_time": 1440000, delay: 480000, cost: 3}
]},
{label: "D2", times: [
	{"label":"AwardContract (D2)", task: "AwardContract", "id":"d1de528f-e6f7-42c1-88f4-eba57cd560bc", "starting_time": 60000, "ending_time": 120000, delay: 60000, cost: 2},
	{"label":"ProvideService (D2)", task: "ProvideService", "id":"8a622d36-1907-4371-936c-45901e72242c", "starting_time": 600000, "ending_time": 900000, delay: 480000, cost: 6},
	{"label":"CheckOutcome (D2)", task: "CheckOutcome", "id":"ae08783b-1ea2-4f63-99e2-9ecf916f8539", "starting_time": 1620000, "ending_time": 1740000, delay: 720000, cost: 3}
]},
{label: "D3", times: [
	{"label":"AwardContract (D3)", task: "AwardContract", "id":"a09715fb-35c7-48a7-b7af-dd2e9da74b10", "starting_time": 60000, "ending_time": 120000, delay: 60000, cost: 2},
	{"label":"ProvideService (D3)", task: "ProvideService", "id":"df2deea1-8359-4fa4-94b6-dd1c05bcd9d3", "starting_time": 900000, "ending_time": 1200000, delay: 780000, cost: 6},
	{"label":"CheckOutcome (D3)", task: "CheckOutcome", "id":"e25622f1-1bbf-4c6a-9944-262e5fd99ede", "starting_time": 1920000, "ending_time": 2040000, delay: 720000, cost: 3}
]},
{label: "D4", times: [
	{"label":"AwardContract (D4)", task: "AwardContract", "id":"2765e653-3e6d-4b9d-becc-f5fb2ae836a9", "starting_time": 0, "ending_time": 60000, delay: 0, cost: 2},
	{"label":"ProvideService (D4)", task: "ProvideService", "id":"a90e05b6-2179-4d5a-ab30-4056cf55a5f1", "starting_time": 240000, "ending_time": 540000, delay: 180000, cost: 6}
]},
{label: "D5", times: [
	{"label":"AwardContract (D5)", task: "AwardContract", "id":"e7816890-5e1c-43f8-a1ce-e35092f4f1b1", "starting_time": 180000, "ending_time": 240000, delay: 180000, cost: 2},
	{"label":"ProvideService (D5)", task: "ProvideService", "id":"91237848-6a29-4305-9d10-c158db37d6d7", "starting_time": 240000, "ending_time": 540000, delay: 0, cost: 6},
	{"label":"CheckOutcome (D5)", task: "CheckOutcome", "id":"37b12b2d-10e2-4bf9-98de-54e9e6d8e68b", "starting_time": 1200000, "ending_time": 1320000, delay: 660000, cost: 3}
]},
];
