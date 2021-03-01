function startScript(){
    ITSStatus();
    gForce();
    temperature();
    onBoardPassengers();
    
}

function ITSStatus() {
    var barChart = document.getElementById('status').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#FFF';

    var status = new Chart(barChart, {
        type:'horizontalBar',
        data: {
            labels:['Progressions', 'Fuel', 'Booster Throttle', 'Oxygen', 'Cabin Temperature'],
            datasets: [{
                data: [68, 23, 5, 75, 25, 100],
                backgroundColor: ['rgba(0,0,0,0.7)','rgba(161, 202, 241, 0.7)','rgba(221,15,33,0.7)','rgba(75,74,44,0.7)','rgba(57,255,20,0.7)'],

            }]
    },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'ITS to Mars status (%)',
                fontStyle: 'bold',
                fontFamily: 'Ubuntu'

            },
            legend:{
                fontColor: 'black',
                display:false
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function gForce() {
    var radarChart = document.getElementById('gForce').getContext('2d');

    Chart.defaults.global.defaultFontSize = 25;
    Chart.defaults.global.defaultFontColor = '#fff';

    var radar = new Chart(radarChart, {
        type:'radar',
        data:{
            labels:['', '', '', '', '', '', ''],
            datasets:[{

                label:'G-Force of ITS',
                data:[1,1,1,2,5,6,7],
                fill: true,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: '#ae331f',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: '#00',
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'G-Force',
                fontStyle: 'bold',
                fontFamily: 'Ubuntu'

            },
            scale: {
                angleLines: {
                    display: true,
                    color: '#FFF',
                },
                gridLines: {
                    display: true,
                    color: '#FFF',
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 18,
                }
            },
            legend:{
                fontColor: 'black',
                display:false
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function temperature() {

    var barChart = document.getElementById('temperature').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var temperature = new Chart(barChart, {
        type:'horizontalBar',
        data:{
            labels:['maandag', 'dinsdag', 'woensdag', 'donderdag'],
            datasets:[{

                label:'',
                data:[3,7,13,21],
                fill: true,
                backgroundColor: ['rgba(0,123,180,0.7)','rgba(174,51,31,0.7)','rgba(85,161,58,0.7)','rgba(161,23,147,0.7)'],
                borderColor: '#011126',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: '#00',
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'Temperature on Mars',
                fontStyle: 'bold',
                fontFamily: 'Ubuntu'

            },

            legend:{
                fontColor: 'black',
                display:true
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function onBoardPassengers() {

    var pieChart = document.getElementById('passengers').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var passengers = new Chart(pieChart, {
        type:'pie',
        data:{
            labels:['Men', 'Women', 'Cats', 'Dogs'],
            datasets:[{

                label:'On Board Passengers of the Rockets',
                data:[45,55,20,10],
                fill: true,
                backgroundColor: ['rgba(0,123,180,0.7)','rgba(174,51,31,0.7)','rgba(85,161,58,0.7)','rgba(161,23,147,0.7)'],
                borderColor: '#011126',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: '#00',
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'On Board Passengers ',
                fontStyle: 'bold',
                fontFamily: 'Ubuntu'

            },

            legend:{
                fontColor: 'black',
                display:true
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

window.onload = startScript();

