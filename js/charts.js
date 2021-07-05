//LINE GRAPH - 
//traffic data
let hourlyLabels = ['5:00','6:00','7:00','8:00','9:00','10:00','15:00',
'16:00','17:00','18:00','19:00'];
let hourlyData = [35, 600, 2000, 1780, 1550, 800, 400, 900, 1700, 1500, 100];

let dailyLabels = ['5','6','7','8','9','10','11',
'12','13','14','15']
let dailyData = [1950, 650, 1500, 1900, 1450, 750, 1050, 1300, 1000, 1650, 900];

let weeklyLabels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
let weeklyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

let monthlyLabels = ['Feb','Mar','Apr','May','Jun','Jul','Aug',
'Sep','Oct','Nov','Dec'];
let monthlyData = [900, 1600, 1200, 2000, 1460, 1850,1000, 1950, 1550, 1640, 1990];

//traffic chart
let trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: weeklyLabels,
    datasets: [{
        data: weeklyData,
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: 'rgba(112, 127, 194, .3)',
        borderWidth: 1,
        fill: {
            target: 'origin',
            below: 'rgba(112, 127, 194, .3)'
        },
        clip: 0
    }]
};

let trafficOptions = {
    aspectRatio: 2,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

//create first chart
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

    //change between trafficData
    function changeTrafficData(datatype) {
        if(datatype === "Hourly"){
            trafficData.datasets[0].data = hourlyData;
            trafficData.labels = hourlyLabels;
        }else if (datatype === "Daily"){
            trafficData.datasets[0].data = dailyData;
            trafficData.labels = dailyLabels;
        }else if (datatype === "Weekly"){
            trafficData.datasets[0].data = weeklyData;
            trafficData.labels = weeklyLabels;
        } else if (datatype === "Monthly"){
            trafficData.datasets[0].data = monthlyData;
            trafficData.labels = monthlyLabels;
        }
        updateChart(trafficChart, trafficData)
    } 

    function updateChart(chart, data) {
        chart.data.datasets[0].data = data.datasets[0].data;
        chart.data.labels = data.labels;
        chart.update({
            duration: 1000,
            easing: 'linear',
        })
    };

//BAR GRAPH - daily
const dailyCanvas = document.getElementById("daily-chart");
const dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
        }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
//create second chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyTrafficData,
    options: dailyOptions
});

//DONUT GRAPH - mobile
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: ['#7477BF', '#78CF82', '#51B6C8'],
    }]
};

//object literal for options
const mobileOptions = {
    aspectRatio: 2,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

//create third chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

