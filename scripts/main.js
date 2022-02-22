const labels = [
'2013',
'2014',
'2015',
'2016',
'2017',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'SpaceX'
        backgroundColor: 'rgb(155, 149, 32)',
        borderColor: 'rgb(155, 149, 31)',
        data: [39.24, 149.56, 219.31, 240.01, 213.69],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
    );
