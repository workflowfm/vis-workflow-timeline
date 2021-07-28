var tasks = [
	"Turning 03",
	"UpdateConfiguration",
	"PipeCutting",
	"Polishing",
	"Rifling",
	"Pressing",
	"PrecisionTurning 02",
	"Light Drawing",
	"Milling",
	"Move",
	"Turning 01A",
	"Light Calibration",
	"PrecisionTurning 01",
	"Turning 02",
	"Turning 01B",
	"Washing",
	"Testing",
	"Light Parting",
	"Buffer(R)",
];

var resourceData = [
{label: "MillingMachine", times: [
	{"label":"Milling(T01)", task: "Milling", "id":46, "starting_time": 31800000, "ending_time": 39000000, delay: 0, cost: 121},
	{"label":"Milling(T03)", task: "Milling", "id":57, "starting_time": 39600000, "ending_time": 46800000, delay: 0, cost: 121},
	{"label":"Milling(T02)", task: "Milling", "id":67, "starting_time": 47400000, "ending_time": 54600000, delay: 0, cost: 121}
]},
{label: "PipeCuttingMachine", times: [
	{"label":"PipeCutting(T01)", task: "PipeCutting", "id":5, "starting_time": 600000, "ending_time": 7800000, delay: 0, cost: 121},
	{"label":"PipeCutting(T03)", task: "PipeCutting", "id":13, "starting_time": 8400000, "ending_time": 15600000, delay: 0, cost: 121},
	{"label":"PipeCutting(T02)", task: "PipeCutting", "id":23, "starting_time": 16200000, "ending_time": 23400000, delay: 0, cost: 121},
	{"label":"PipeCutting(T01)", task: "PipeCutting", "id":31, "starting_time": 24000000, "ending_time": 31200000, delay: 0, cost: 121},
	{"label":"PipeCutting(T03)", task: "PipeCutting", "id":45, "starting_time": 31800000, "ending_time": 39000000, delay: 0, cost: 121},
	{"label":"PipeCutting(T02)", task: "PipeCutting", "id":56, "starting_time": 39600000, "ending_time": 46800000, delay: 0, cost: 121}
]},
{label: "PneumaticPress01Machine", times: [
	{"label":"Light Drawing(C03)", task: "Light Drawing", "id":41, "starting_time": 30000000, "ending_time": 37200000, delay: 0, cost: 121},
	{"label":"Light Drawing(C02)", task: "Light Drawing", "id":82, "starting_time": 59400000, "ending_time": 66600000, delay: 0, cost: 121},
	{"label":"Light Drawing(C01)", task: "Light Drawing", "id":104, "starting_time": 88800000, "ending_time": 96000000, delay: 0, cost: 121}
]},
{label: "PneumaticPress02Machine", times: [
	{"label":"Light Parting(C03)", task: "Light Parting", "id":52, "starting_time": 37800000, "ending_time": 45000000, delay: 0, cost: 121},
	{"label":"Light Parting(C02)", task: "Light Parting", "id":89, "starting_time": 67200000, "ending_time": 74400000, delay: 0, cost: 121},
	{"label":"Light Parting(C01)", task: "Light Parting", "id":112, "starting_time": 96600000, "ending_time": 103800000, delay: 0, cost: 121}
]},
{label: "PneumaticPress03Machine", times: [
	{"label":"Light Calibration(C03)", task: "Light Calibration", "id":63, "starting_time": 45600000, "ending_time": 52800000, delay: 0, cost: 121},
	{"label":"Light Calibration(C02)", task: "Light Calibration", "id":95, "starting_time": 75000000, "ending_time": 82200000, delay: 0, cost: 121},
	{"label":"Light Calibration(C01)", task: "Light Calibration", "id":123, "starting_time": 104400000, "ending_time": 111600000, delay: 0, cost: 121}
]},
{label: "PolishingMachine", times: [
	{"label":"Polishing(J02)", task: "Polishing", "id":14, "starting_time": 8400000, "ending_time": 15600000, delay: 0, cost: 121},
	{"label":"Polishing(J01)", task: "Polishing", "id":21, "starting_time": 16200000, "ending_time": 23400000, delay: 0, cost: 121},
	{"label":"Polishing(J03)", task: "Polishing", "id":32, "starting_time": 24000000, "ending_time": 31200000, delay: 0, cost: 121}
]},
{label: "PrecisionTurning01Machine", times: [
	{"label":"PrecisionTurning 01(T01)", task: "PrecisionTurning 01", "id":61, "starting_time": 43800000, "ending_time": 72600000, delay: 0, cost: 481},
	{"label":"PrecisionTurning 01(T03)", task: "PrecisionTurning 01", "id":93, "starting_time": 73200000, "ending_time": 102000000, delay: 0, cost: 481},
	{"label":"PrecisionTurning 01(T02)", task: "PrecisionTurning 01", "id":118, "starting_time": 102600000, "ending_time": 131400000, delay: 0, cost: 481}
]},
{label: "PrecisionTurning02Machine", times: [
	{"label":"PrecisionTurning 02(T01)", task: "PrecisionTurning 02", "id":92, "starting_time": 73200000, "ending_time": 102000000, delay: 0, cost: 481},
	{"label":"PrecisionTurning 02(T03)", task: "PrecisionTurning 02", "id":119, "starting_time": 102600000, "ending_time": 131400000, delay: 0, cost: 481},
	{"label":"PrecisionTurning 02(T02)", task: "PrecisionTurning 02", "id":139, "starting_time": 132000000, "ending_time": 160800000, delay: 0, cost: 481}
]},
{label: "PressingMachine", times: [
	{"label":"Pressing(C03)", task: "Pressing", "id":87, "starting_time": 66000000, "ending_time": 94800000, delay: 0, cost: 481},
	{"label":"Pressing(C02)", task: "Pressing", "id":110, "starting_time": 95400000, "ending_time": 124200000, delay: 0, cost: 481},
	{"label":"Pressing(C01)", task: "Pressing", "id":134, "starting_time": 124800000, "ending_time": 153600000, delay: 0, cost: 481}
]},
{label: "RiflingMachine", times: [
	{"label":"Rifling(C03)", task: "Rifling", "id":7, "starting_time": 600000, "ending_time": 29400000, delay: 0, cost: 481},
	{"label":"Rifling(C02)", task: "Rifling", "id":40, "starting_time": 30000000, "ending_time": 58800000, delay: 0, cost: 481},
	{"label":"Rifling(C01)", task: "Rifling", "id":81, "starting_time": 59400000, "ending_time": 88200000, delay: 0, cost: 481}
]},
{label: "TestingMachine", times: [
	{"label":"Testing(J02)", task: "Testing", "id":78, "starting_time": 57600000, "ending_time": 61200000, delay: 0, cost: 61},
	{"label":"Testing(C03)", task: "Testing", "id":85, "starting_time": 61800000, "ending_time": 65400000, delay: 0, cost: 61},
	{"label":"Testing(J01)", task: "Testing", "id":102, "starting_time": 87000000, "ending_time": 90600000, delay: 0, cost: 61},
	{"label":"Testing(C02)", task: "Testing", "id":106, "starting_time": 91200000, "ending_time": 94800000, delay: 0, cost: 61},
	{"label":"Testing(C03)", task: "Testing", "id":114, "starting_time": 99600000, "ending_time": 103200000, delay: 0, cost: 61},
	{"label":"Testing(T01)", task: "Testing", "id":121, "starting_time": 103800000, "ending_time": 107400000, delay: 0, cost: 61},
	{"label":"Testing(J03)", task: "Testing", "id":128, "starting_time": 116400000, "ending_time": 120000000, delay: 0, cost: 61},
	{"label":"Testing(C01)", task: "Testing", "id":130, "starting_time": 120600000, "ending_time": 124200000, delay: 0, cost: 61},
	{"label":"Testing(C02)", task: "Testing", "id":136, "starting_time": 129000000, "ending_time": 132600000, delay: 0, cost: 61},
	{"label":"Testing(T03)", task: "Testing", "id":141, "starting_time": 133200000, "ending_time": 136800000, delay: 0, cost: 61},
	{"label":"Testing(C01)", task: "Testing", "id":145, "starting_time": 158400000, "ending_time": 162000000, delay: 0, cost: 61},
	{"label":"Testing(T02)", task: "Testing", "id":148, "starting_time": 162600000, "ending_time": 166200000, delay: 0, cost: 61}
]},
{label: "Turning01MachineA", times: [
	{"label":"Turning 01A(J02)", task: "Turning 01A", "id":4, "starting_time": 600000, "ending_time": 7800000, delay: 0, cost: 121}
]},
{label: "Turning01MachineB", times: [
	{"label":"Turning 01A(J01)", task: "Turning 01A", "id":6, "starting_time": 600000, "ending_time": 7800000, delay: 0, cost: 121},
	{"label":"UpdateConfiguration(J03)", task: "UpdateConfiguration", "id":9, "starting_time": 7800000, "ending_time": 15000000, delay: 0, cost: 121},
	{"label":"Turning 01B(J03)", task: "Turning 01B", "id":16, "starting_time": 15600000, "ending_time": 22800000, delay: 0, cost: 121}
]},
{label: "Turning02Machine", times: [
	{"label":"Turning 02(J02)", task: "Turning 02", "id":25, "starting_time": 20400000, "ending_time": 27600000, delay: 0, cost: 121},
	{"label":"Turning 02(J01)", task: "Turning 02", "id":37, "starting_time": 28200000, "ending_time": 35400000, delay: 0, cost: 121},
	{"label":"Turning 02(J03)", task: "Turning 02", "id":50, "starting_time": 36000000, "ending_time": 43200000, delay: 0, cost: 121}
]},
{label: "Turning03Machine", times: [
	{"label":"Turning 03(J02)", task: "Turning 03", "id":36, "starting_time": 28200000, "ending_time": 57000000, delay: 0, cost: 481},
	{"label":"Turning 03(J01)", task: "Turning 03", "id":76, "starting_time": 57600000, "ending_time": 86400000, delay: 0, cost: 481},
	{"label":"Turning 03(J03)", task: "Turning 03", "id":101, "starting_time": 87000000, "ending_time": 115800000, delay: 0, cost: 481}
]},
{label: "WashingMachine", times: [
	{"label":"Washing(J02)", task: "Washing", "id":22, "starting_time": 16200000, "ending_time": 19800000, delay: 0, cost: 61},
	{"label":"Washing(J01)", task: "Washing", "id":33, "starting_time": 24000000, "ending_time": 27600000, delay: 0, cost: 61},
	{"label":"Washing(J03)", task: "Washing", "id":47, "starting_time": 31800000, "ending_time": 35400000, delay: 0, cost: 61},
	{"label":"Washing(T01)", task: "Washing", "id":58, "starting_time": 39600000, "ending_time": 43200000, delay: 0, cost: 61},
	{"label":"Washing(T03)", task: "Washing", "id":66, "starting_time": 47400000, "ending_time": 51000000, delay: 0, cost: 61},
	{"label":"Washing(C03)", task: "Washing", "id":70, "starting_time": 53400000, "ending_time": 57000000, delay: 0, cost: 61},
	{"label":"Washing(T02)", task: "Washing", "id":77, "starting_time": 57600000, "ending_time": 61200000, delay: 0, cost: 61},
	{"label":"Washing(C02)", task: "Washing", "id":97, "starting_time": 82800000, "ending_time": 86400000, delay: 0, cost: 61},
	{"label":"Washing(C03)", task: "Washing", "id":109, "starting_time": 95400000, "ending_time": 99000000, delay: 0, cost: 61},
	{"label":"Washing(C01)", task: "Washing", "id":125, "starting_time": 112200000, "ending_time": 115800000, delay: 0, cost: 61},
	{"label":"Washing(C02)", task: "Washing", "id":133, "starting_time": 124800000, "ending_time": 128400000, delay: 0, cost: 61},
	{"label":"Washing(C01)", task: "Washing", "id":143, "starting_time": 154200000, "ending_time": 157800000, delay: 0, cost: 61}
]},
];

var simulationData = [
{label: "C01", times: [
	{"label":"Move(C01)", task: "Move", "id":79, "starting_time": 58800000, "ending_time": 59400000, delay: 58800000, cost: 0},
	{"label":"Rifling(C01)", task: "Rifling", "id":81, "starting_time": 59400000, "ending_time": 88200000, delay: 0, cost: 481},
	{"label":"Move(C01)", task: "Move", "id":103, "starting_time": 88200000, "ending_time": 88800000, delay: 0, cost: 0},
	{"label":"Light Drawing(C01)", task: "Light Drawing", "id":104, "starting_time": 88800000, "ending_time": 96000000, delay: 0, cost: 121},
	{"label":"Move(C01)", task: "Move", "id":111, "starting_time": 96000000, "ending_time": 96600000, delay: 0, cost: 0},
	{"label":"Light Parting(C01)", task: "Light Parting", "id":112, "starting_time": 96600000, "ending_time": 103800000, delay: 0, cost: 121},
	{"label":"Move(C01)", task: "Move", "id":122, "starting_time": 103800000, "ending_time": 104400000, delay: 0, cost: 0},
	{"label":"Light Calibration(C01)", task: "Light Calibration", "id":123, "starting_time": 104400000, "ending_time": 111600000, delay: 0, cost: 121},
	{"label":"Move(C01)", task: "Move", "id":124, "starting_time": 111600000, "ending_time": 112200000, delay: 0, cost: 0},
	{"label":"Washing(C01)", task: "Washing", "id":125, "starting_time": 112200000, "ending_time": 115800000, delay: 0, cost: 61},
	{"label":"Buffer(R)(C01)", task: "Buffer(R)", "id":127, "starting_time": 115800000, "ending_time": 116400000, delay: 0, cost: 0},
	{"label":"Move(C01)", task: "Move", "id":129, "starting_time": 120000000, "ending_time": 120600000, delay: 4200000, cost: 0},
	{"label":"Testing(C01)", task: "Testing", "id":130, "starting_time": 120600000, "ending_time": 124200000, delay: 0, cost: 61},
	{"label":"Move(C01)", task: "Move", "id":132, "starting_time": 124200000, "ending_time": 124800000, delay: 0, cost: 0},
	{"label":"Pressing(C01)", task: "Pressing", "id":134, "starting_time": 124800000, "ending_time": 153600000, delay: 0, cost: 481},
	{"label":"Move(C01)", task: "Move", "id":142, "starting_time": 153600000, "ending_time": 154200000, delay: 0, cost: 0},
	{"label":"Washing(C01)", task: "Washing", "id":143, "starting_time": 154200000, "ending_time": 157800000, delay: 0, cost: 61},
	{"label":"Move(C01)", task: "Move", "id":144, "starting_time": 157800000, "ending_time": 158400000, delay: 0, cost: 0},
	{"label":"Testing(C01)", task: "Testing", "id":145, "starting_time": 158400000, "ending_time": 162000000, delay: 0, cost: 61}
]},
{label: "C02", times: [
	{"label":"Move(C02)", task: "Move", "id":38, "starting_time": 29400000, "ending_time": 30000000, delay: 29400000, cost: 0},
	{"label":"Rifling(C02)", task: "Rifling", "id":40, "starting_time": 30000000, "ending_time": 58800000, delay: 0, cost: 481},
	{"label":"Move(C02)", task: "Move", "id":80, "starting_time": 58800000, "ending_time": 59400000, delay: 0, cost: 0},
	{"label":"Light Drawing(C02)", task: "Light Drawing", "id":82, "starting_time": 59400000, "ending_time": 66600000, delay: 0, cost: 121},
	{"label":"Move(C02)", task: "Move", "id":88, "starting_time": 66600000, "ending_time": 67200000, delay: 0, cost: 0},
	{"label":"Light Parting(C02)", task: "Light Parting", "id":89, "starting_time": 67200000, "ending_time": 74400000, delay: 0, cost: 121},
	{"label":"Move(C02)", task: "Move", "id":94, "starting_time": 74400000, "ending_time": 75000000, delay: 0, cost: 0},
	{"label":"Light Calibration(C02)", task: "Light Calibration", "id":95, "starting_time": 75000000, "ending_time": 82200000, delay: 0, cost: 121},
	{"label":"Move(C02)", task: "Move", "id":96, "starting_time": 82200000, "ending_time": 82800000, delay: 0, cost: 0},
	{"label":"Washing(C02)", task: "Washing", "id":97, "starting_time": 82800000, "ending_time": 86400000, delay: 0, cost: 61},
	{"label":"Buffer(R)(C02)", task: "Buffer(R)", "id":100, "starting_time": 86400000, "ending_time": 87000000, delay: 0, cost: 0},
	{"label":"Move(C02)", task: "Move", "id":105, "starting_time": 90600000, "ending_time": 91200000, delay: 4200000, cost: 0},
	{"label":"Testing(C02)", task: "Testing", "id":106, "starting_time": 91200000, "ending_time": 94800000, delay: 0, cost: 61},
	{"label":"Move(C02)", task: "Move", "id":108, "starting_time": 94800000, "ending_time": 95400000, delay: 0, cost: 0},
	{"label":"Pressing(C02)", task: "Pressing", "id":110, "starting_time": 95400000, "ending_time": 124200000, delay: 0, cost: 481},
	{"label":"Move(C02)", task: "Move", "id":131, "starting_time": 124200000, "ending_time": 124800000, delay: 0, cost: 0},
	{"label":"Washing(C02)", task: "Washing", "id":133, "starting_time": 124800000, "ending_time": 128400000, delay: 0, cost: 61},
	{"label":"Move(C02)", task: "Move", "id":135, "starting_time": 128400000, "ending_time": 129000000, delay: 0, cost: 0},
	{"label":"Testing(C02)", task: "Testing", "id":136, "starting_time": 129000000, "ending_time": 132600000, delay: 0, cost: 61}
]},
{label: "C03", times: [
	{"label":"Move(C03)", task: "Move", "id":1, "starting_time": 0, "ending_time": 600000, delay: 0, cost: 0},
	{"label":"Rifling(C03)", task: "Rifling", "id":7, "starting_time": 600000, "ending_time": 29400000, delay: 0, cost: 481},
	{"label":"Move(C03)", task: "Move", "id":39, "starting_time": 29400000, "ending_time": 30000000, delay: 0, cost: 0},
	{"label":"Light Drawing(C03)", task: "Light Drawing", "id":41, "starting_time": 30000000, "ending_time": 37200000, delay: 0, cost: 121},
	{"label":"Move(C03)", task: "Move", "id":51, "starting_time": 37200000, "ending_time": 37800000, delay: 0, cost: 0},
	{"label":"Light Parting(C03)", task: "Light Parting", "id":52, "starting_time": 37800000, "ending_time": 45000000, delay: 0, cost: 121},
	{"label":"Move(C03)", task: "Move", "id":62, "starting_time": 45000000, "ending_time": 45600000, delay: 0, cost: 0},
	{"label":"Light Calibration(C03)", task: "Light Calibration", "id":63, "starting_time": 45600000, "ending_time": 52800000, delay: 0, cost: 121},
	{"label":"Move(C03)", task: "Move", "id":69, "starting_time": 52800000, "ending_time": 53400000, delay: 0, cost: 0},
	{"label":"Washing(C03)", task: "Washing", "id":70, "starting_time": 53400000, "ending_time": 57000000, delay: 0, cost: 61},
	{"label":"Buffer(R)(C03)", task: "Buffer(R)", "id":75, "starting_time": 57000000, "ending_time": 57600000, delay: 0, cost: 0},
	{"label":"Move(C03)", task: "Move", "id":83, "starting_time": 61200000, "ending_time": 61800000, delay: 4200000, cost: 0},
	{"label":"Testing(C03)", task: "Testing", "id":85, "starting_time": 61800000, "ending_time": 65400000, delay: 0, cost: 61},
	{"label":"Move(C03)", task: "Move", "id":86, "starting_time": 65400000, "ending_time": 66000000, delay: 0, cost: 0},
	{"label":"Pressing(C03)", task: "Pressing", "id":87, "starting_time": 66000000, "ending_time": 94800000, delay: 0, cost: 481},
	{"label":"Move(C03)", task: "Move", "id":107, "starting_time": 94800000, "ending_time": 95400000, delay: 0, cost: 0},
	{"label":"Washing(C03)", task: "Washing", "id":109, "starting_time": 95400000, "ending_time": 99000000, delay: 0, cost: 61},
	{"label":"Move(C03)", task: "Move", "id":113, "starting_time": 99000000, "ending_time": 99600000, delay: 0, cost: 0},
	{"label":"Testing(C03)", task: "Testing", "id":114, "starting_time": 99600000, "ending_time": 103200000, delay: 0, cost: 61}
]},
{label: "J01", times: [
	{"label":"Move(J01)", task: "Move", "id":2, "starting_time": 0, "ending_time": 600000, delay: 0, cost: 0},
	{"label":"Turning 01A(J01)", task: "Turning 01A", "id":6, "starting_time": 600000, "ending_time": 7800000, delay: 0, cost: 121},
	{"label":"Buffer(R)(J01)", task: "Buffer(R)", "id":11, "starting_time": 7800000, "ending_time": 8400000, delay: 0, cost: 0},
	{"label":"Move(J01)", task: "Move", "id":17, "starting_time": 15600000, "ending_time": 16200000, delay: 7800000, cost: 0},
	{"label":"Polishing(J01)", task: "Polishing", "id":21, "starting_time": 16200000, "ending_time": 23400000, delay: 0, cost: 121},
	{"label":"Move(J01)", task: "Move", "id":30, "starting_time": 23400000, "ending_time": 24000000, delay: 0, cost: 0},
	{"label":"Washing(J01)", task: "Washing", "id":33, "starting_time": 24000000, "ending_time": 27600000, delay: 0, cost: 61},
	{"label":"Move(J01)", task: "Move", "id":35, "starting_time": 27600000, "ending_time": 28200000, delay: 0, cost: 0},
	{"label":"Turning 02(J01)", task: "Turning 02", "id":37, "starting_time": 28200000, "ending_time": 35400000, delay: 0, cost: 121},
	{"label":"Buffer(R)(J01)", task: "Buffer(R)", "id":48, "starting_time": 35400000, "ending_time": 36000000, delay: 0, cost: 0},
	{"label":"Move(J01)", task: "Move", "id":72, "starting_time": 57000000, "ending_time": 57600000, delay: 21600000, cost: 0},
	{"label":"Turning 03(J01)", task: "Turning 03", "id":76, "starting_time": 57600000, "ending_time": 86400000, delay: 0, cost: 481},
	{"label":"Move(J01)", task: "Move", "id":99, "starting_time": 86400000, "ending_time": 87000000, delay: 0, cost: 0},
	{"label":"Testing(J01)", task: "Testing", "id":102, "starting_time": 87000000, "ending_time": 90600000, delay: 0, cost: 61}
]},
{label: "J02", times: [
	{"label":"Move(J02)", task: "Move", "id":3, "starting_time": 0, "ending_time": 600000, delay: 0, cost: 0},
	{"label":"Turning 01A(J02)", task: "Turning 01A", "id":4, "starting_time": 600000, "ending_time": 7800000, delay: 0, cost: 121},
	{"label":"Move(J02)", task: "Move", "id":10, "starting_time": 7800000, "ending_time": 8400000, delay: 0, cost: 0},
	{"label":"Polishing(J02)", task: "Polishing", "id":14, "starting_time": 8400000, "ending_time": 15600000, delay: 0, cost: 121},
	{"label":"Move(J02)", task: "Move", "id":20, "starting_time": 15600000, "ending_time": 16200000, delay: 0, cost: 0},
	{"label":"Washing(J02)", task: "Washing", "id":22, "starting_time": 16200000, "ending_time": 19800000, delay: 0, cost: 61},
	{"label":"Move(J02)", task: "Move", "id":24, "starting_time": 19800000, "ending_time": 20400000, delay: 0, cost: 0},
	{"label":"Turning 02(J02)", task: "Turning 02", "id":25, "starting_time": 20400000, "ending_time": 27600000, delay: 0, cost: 121},
	{"label":"Move(J02)", task: "Move", "id":34, "starting_time": 27600000, "ending_time": 28200000, delay: 0, cost: 0},
	{"label":"Turning 03(J02)", task: "Turning 03", "id":36, "starting_time": 28200000, "ending_time": 57000000, delay: 0, cost: 481},
	{"label":"Move(J02)", task: "Move", "id":74, "starting_time": 57000000, "ending_time": 57600000, delay: 0, cost: 0},
	{"label":"Testing(J02)", task: "Testing", "id":78, "starting_time": 57600000, "ending_time": 61200000, delay: 0, cost: 61}
]},
{label: "J03", times: [
	{"label":"UpdateConfiguration(J03)", task: "UpdateConfiguration", "id":9, "starting_time": 7800000, "ending_time": 15000000, delay: 0, cost: 121},
	{"label":"Move(J03)", task: "Move", "id":15, "starting_time": 15000000, "ending_time": 15600000, delay: 15000000, cost: 0},
	{"label":"Turning 01B(J03)", task: "Turning 01B", "id":16, "starting_time": 15600000, "ending_time": 22800000, delay: 0, cost: 121},
	{"label":"Buffer(R)(J03)", task: "Buffer(R)", "id":26, "starting_time": 22800000, "ending_time": 23400000, delay: 0, cost: 0},
	{"label":"Move(J03)", task: "Move", "id":28, "starting_time": 23400000, "ending_time": 24000000, delay: 600000, cost: 0},
	{"label":"Polishing(J03)", task: "Polishing", "id":32, "starting_time": 24000000, "ending_time": 31200000, delay: 0, cost: 121},
	{"label":"Move(J03)", task: "Move", "id":43, "starting_time": 31200000, "ending_time": 31800000, delay: 0, cost: 0},
	{"label":"Washing(J03)", task: "Washing", "id":47, "starting_time": 31800000, "ending_time": 35400000, delay: 0, cost: 61},
	{"label":"Move(J03)", task: "Move", "id":49, "starting_time": 35400000, "ending_time": 36000000, delay: 0, cost: 0},
	{"label":"Turning 02(J03)", task: "Turning 02", "id":50, "starting_time": 36000000, "ending_time": 43200000, delay: 0, cost: 121},
	{"label":"Buffer(R)(J03)", task: "Buffer(R)", "id":59, "starting_time": 43200000, "ending_time": 43800000, delay: 0, cost: 0},
	{"label":"Move(J03)", task: "Move", "id":98, "starting_time": 86400000, "ending_time": 87000000, delay: 43200000, cost: 0},
	{"label":"Turning 03(J03)", task: "Turning 03", "id":101, "starting_time": 87000000, "ending_time": 115800000, delay: 0, cost: 481},
	{"label":"Move(J03)", task: "Move", "id":126, "starting_time": 115800000, "ending_time": 116400000, delay: 0, cost: 0},
	{"label":"Testing(J03)", task: "Testing", "id":128, "starting_time": 116400000, "ending_time": 120000000, delay: 0, cost: 61}
]},
{label: "T01", times: [
	{"label":"Move(T01)", task: "Move", "id":0, "starting_time": 0, "ending_time": 600000, delay: 0, cost: 0},
	{"label":"PipeCutting(T01)", task: "PipeCutting", "id":5, "starting_time": 600000, "ending_time": 7800000, delay: 0, cost: 121},
	{"label":"Buffer(R)(T01)", task: "Buffer(R)", "id":12, "starting_time": 7800000, "ending_time": 8400000, delay: 0, cost: 0},
	{"label":"Move(T01)", task: "Move", "id":27, "starting_time": 23400000, "ending_time": 24000000, delay: 15600000, cost: 0},
	{"label":"PipeCutting(T01)", task: "PipeCutting", "id":31, "starting_time": 24000000, "ending_time": 31200000, delay: 0, cost: 121},
	{"label":"Move(T01)", task: "Move", "id":44, "starting_time": 31200000, "ending_time": 31800000, delay: 0, cost: 0},
	{"label":"Milling(T01)", task: "Milling", "id":46, "starting_time": 31800000, "ending_time": 39000000, delay: 0, cost: 121},
	{"label":"Move(T01)", task: "Move", "id":54, "starting_time": 39000000, "ending_time": 39600000, delay: 0, cost: 0},
	{"label":"Washing(T01)", task: "Washing", "id":58, "starting_time": 39600000, "ending_time": 43200000, delay: 0, cost: 61},
	{"label":"Move(T01)", task: "Move", "id":60, "starting_time": 43200000, "ending_time": 43800000, delay: 0, cost: 0},
	{"label":"PrecisionTurning 01(T01)", task: "PrecisionTurning 01", "id":61, "starting_time": 43800000, "ending_time": 72600000, delay: 0, cost: 481},
	{"label":"Move(T01)", task: "Move", "id":91, "starting_time": 72600000, "ending_time": 73200000, delay: 0, cost: 0},
	{"label":"PrecisionTurning 02(T01)", task: "PrecisionTurning 02", "id":92, "starting_time": 73200000, "ending_time": 102000000, delay: 0, cost: 481},
	{"label":"Buffer(R)(T01)", task: "Buffer(R)", "id":116, "starting_time": 102000000, "ending_time": 102600000, delay: 0, cost: 0},
	{"label":"Move(T01)", task: "Move", "id":120, "starting_time": 103200000, "ending_time": 103800000, delay: 1200000, cost: 0},
	{"label":"Testing(T01)", task: "Testing", "id":121, "starting_time": 103800000, "ending_time": 107400000, delay: 0, cost: 61}
]},
{label: "T02", times: [
	{"label":"Move(T02)", task: "Move", "id":18, "starting_time": 15600000, "ending_time": 16200000, delay: 15600000, cost: 0},
	{"label":"PipeCutting(T02)", task: "PipeCutting", "id":23, "starting_time": 16200000, "ending_time": 23400000, delay: 0, cost: 121},
	{"label":"Buffer(R)(T02)", task: "Buffer(R)", "id":29, "starting_time": 23400000, "ending_time": 24000000, delay: 0, cost: 0},
	{"label":"Move(T02)", task: "Move", "id":53, "starting_time": 39000000, "ending_time": 39600000, delay: 15600000, cost: 0},
	{"label":"PipeCutting(T02)", task: "PipeCutting", "id":56, "starting_time": 39600000, "ending_time": 46800000, delay: 0, cost: 121},
	{"label":"Move(T02)", task: "Move", "id":65, "starting_time": 46800000, "ending_time": 47400000, delay: 0, cost: 0},
	{"label":"Milling(T02)", task: "Milling", "id":67, "starting_time": 47400000, "ending_time": 54600000, delay: 0, cost: 121},
	{"label":"Buffer(R)(T02)", task: "Buffer(R)", "id":71, "starting_time": 54600000, "ending_time": 55200000, delay: 0, cost: 0},
	{"label":"Move(T02)", task: "Move", "id":73, "starting_time": 57000000, "ending_time": 57600000, delay: 2400000, cost: 0},
	{"label":"Washing(T02)", task: "Washing", "id":77, "starting_time": 57600000, "ending_time": 61200000, delay: 0, cost: 61},
	{"label":"Buffer(R)(T02)", task: "Buffer(R)", "id":84, "starting_time": 61200000, "ending_time": 61800000, delay: 0, cost: 0},
	{"label":"Move(T02)", task: "Move", "id":115, "starting_time": 102000000, "ending_time": 102600000, delay: 40800000, cost: 0},
	{"label":"PrecisionTurning 01(T02)", task: "PrecisionTurning 01", "id":118, "starting_time": 102600000, "ending_time": 131400000, delay: 0, cost: 481},
	{"label":"Move(T02)", task: "Move", "id":138, "starting_time": 131400000, "ending_time": 132000000, delay: 0, cost: 0},
	{"label":"PrecisionTurning 02(T02)", task: "PrecisionTurning 02", "id":139, "starting_time": 132000000, "ending_time": 160800000, delay: 0, cost: 481},
	{"label":"Buffer(R)(T02)", task: "Buffer(R)", "id":146, "starting_time": 160800000, "ending_time": 161400000, delay: 0, cost: 0},
	{"label":"Move(T02)", task: "Move", "id":147, "starting_time": 162000000, "ending_time": 162600000, delay: 1200000, cost: 0},
	{"label":"Testing(T02)", task: "Testing", "id":148, "starting_time": 162600000, "ending_time": 166200000, delay: 0, cost: 61}
]},
{label: "T03", times: [
	{"label":"Move(T03)", task: "Move", "id":8, "starting_time": 7800000, "ending_time": 8400000, delay: 7800000, cost: 0},
	{"label":"PipeCutting(T03)", task: "PipeCutting", "id":13, "starting_time": 8400000, "ending_time": 15600000, delay: 0, cost: 121},
	{"label":"Buffer(R)(T03)", task: "Buffer(R)", "id":19, "starting_time": 15600000, "ending_time": 16200000, delay: 0, cost: 0},
	{"label":"Move(T03)", task: "Move", "id":42, "starting_time": 31200000, "ending_time": 31800000, delay: 15600000, cost: 0},
	{"label":"PipeCutting(T03)", task: "PipeCutting", "id":45, "starting_time": 31800000, "ending_time": 39000000, delay: 0, cost: 121},
	{"label":"Move(T03)", task: "Move", "id":55, "starting_time": 39000000, "ending_time": 39600000, delay: 0, cost: 0},
	{"label":"Milling(T03)", task: "Milling", "id":57, "starting_time": 39600000, "ending_time": 46800000, delay: 0, cost: 121},
	{"label":"Move(T03)", task: "Move", "id":64, "starting_time": 46800000, "ending_time": 47400000, delay: 0, cost: 0},
	{"label":"Washing(T03)", task: "Washing", "id":66, "starting_time": 47400000, "ending_time": 51000000, delay: 0, cost: 61},
	{"label":"Buffer(R)(T03)", task: "Buffer(R)", "id":68, "starting_time": 51000000, "ending_time": 51600000, delay: 0, cost: 0},
	{"label":"Move(T03)", task: "Move", "id":90, "starting_time": 72600000, "ending_time": 73200000, delay: 21600000, cost: 0},
	{"label":"PrecisionTurning 01(T03)", task: "PrecisionTurning 01", "id":93, "starting_time": 73200000, "ending_time": 102000000, delay: 0, cost: 481},
	{"label":"Move(T03)", task: "Move", "id":117, "starting_time": 102000000, "ending_time": 102600000, delay: 0, cost: 0},
	{"label":"PrecisionTurning 02(T03)", task: "PrecisionTurning 02", "id":119, "starting_time": 102600000, "ending_time": 131400000, delay: 0, cost: 481},
	{"label":"Buffer(R)(T03)", task: "Buffer(R)", "id":137, "starting_time": 131400000, "ending_time": 132000000, delay: 0, cost: 0},
	{"label":"Move(T03)", task: "Move", "id":140, "starting_time": 132600000, "ending_time": 133200000, delay: 1200000, cost: 0},
	{"label":"Testing(T03)", task: "Testing", "id":141, "starting_time": 133200000, "ending_time": 136800000, delay: 0, cost: 61}
]},
];
