import "https://cdn.jsdelivr.net/npm/apexcharts";
let chartSalesPerTime = document.getElementById('chartSalesPerTime')

var options = {
    chart: {
        type: 'line',
        toolbar: {
            show: false
        },
        height: '45%',
    },
    stroke: {
        curve: 'smooth',
    },
    series: [{
        name: 'sales',
        data: [30,40,35,54,49]
    },{
        name: 'tome',
        data: [32,45,45,53,60]
    },{
        name: 'tome',
        data: [35,44,25,52,30]
    },{
        name: 'tome',
        data: [31,51,15,51,80]
    },{
        name: 'tome',
        data: [27,25,25,90,70]
    }],
    xaxis: {
        categories: [1991,1992,1993,1994,1995]
    },
    // colors: ['#fff', '#000'],
    tooltip:{
        theme: 'dark'
    },
    theme: {
        mode: 'dark',
        palette: 'palette10'
    },
}
  
var chartSalesPerTimeFinal = new ApexCharts(chartSalesPerTime, options);

chartSalesPerTimeFinal.render();