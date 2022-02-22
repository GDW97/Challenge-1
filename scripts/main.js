console.log('Hello World!');

let myChart = document.getElementById('mychart1').getContext('2d');

let hamstersAanwezig = new Chart(myChart. {
    type:'bar',
    data:{
        labels:['Jan', 'feb', 'mar', 'apr', 'may', 'june'],
        datasets:[{
            label:'Aanstal Hamsters',
            data:[
            20,
            18,
            24,
            12,
            15,
            12
            ]
        }]
    },

});