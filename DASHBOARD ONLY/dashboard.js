var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'],
        datasets: [
            {
                label: 'User',
                data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
                backgroundColor: 'rgba(85, 85, 85, 1)',
                borderColor: 'rgb(41, 155, 99)',
                borderWidth: 1
            },
            {
                label: 'Module',
                data: [1500, 1700, 1600, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600],
               backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            },
            {
                label: 'Post',
                data: [1200, 1300, 1100, 1400, 1300, 1500, 1600, 1700, 1800, 1700, 1900, 2000],
                backgroundColor: 'rgba(255, 205, 86, 1)',
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 1
            },
            {
                label: 'Certificate',
                data: [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
                backgroundColor: 'rgba(85, 85, 85, 1)',
                borderColor: 'rgb(41, 155, 99)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true
    }
});