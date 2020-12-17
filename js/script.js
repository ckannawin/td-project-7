
// Line Chart

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };

var ctx = document.getElementById('line-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Data',
            backgroundColor: 'rgba(255, 99, 132, .5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: trafficOptions
});



// Bar Chart

var ctx = document.getElementById('bar-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: '#66b2b2',
            borderColor: '#66b2b2',
            data: [55, 155, 205, 125, 250, 225, 35]
        }]
    },

    // Configuration options go here
    options: {}
});

//Donut Chart

var ctx = document.getElementById('donut-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['iOS', 'Android', 'Desktop'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: ['teal', '#97CECC','rgb(255, 99, 132)'],
            borderColor: ['#006767','#97CECC','rgb(255, 99, 132)'],
            data: [55, 25, 20]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'right'
        }
    }
});