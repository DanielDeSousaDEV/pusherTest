import "https://cdn.jsdelivr.net/npm/apexcharts";
let chartSalesPerTime = document.getElementById('chartSalesPerTime')
let chartSalesPerUser = document.getElementById('chartSalesPerUser')
let chartSalesPerProduct = document.getElementById('chartSalesPerProduct')

let optionsSalesPerTimeFinal = {
    chart: {
        type: 'line',
        height: '350rem',
        toolbar: {
            show: false
        },
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
let chartSalesPerTimeFinal = new ApexCharts(chartSalesPerTime, optionsSalesPerTimeFinal);

chartSalesPerTimeFinal.render();

let optionsSalesPerUser = {
    chart: {
        type: 'donut',
        height: '350rem',
        // width: '45%',
        toolbar: {
            show: false
        }, 
    },
    plotOptions: {
        pie: {
            customScale: 0.8,
            donut: {
                labels: {
                    show: true,
                    name: {
                        fontSize: '24px',
                        fontWeight: 'bold'
                    },
                    value: {
                        fontSize: '32px',
                        fontWeight: 'bold',
                        color: 'whitesmoke'
                    },
                    total: {
                        show: true,
                        fontSize: '24px',
                        fontWeight: 'bold'
                    }
                }
            }
        }
    },
    series: [2, 19, 28, 23],
    labels: ['daniel','daniel','daniel','daniel'],
    theme: {
        mode: 'dark',
        palette: 'palette10'
    },
    tooltip: {
        theme: 'light'
    }
}
let chartSalesPerUserFinal = new ApexCharts(chartSalesPerUser, optionsSalesPerUser)

chartSalesPerUserFinal.render()

let optionsSalesPerProduct = {
    chart: {
        type: 'bar',
        height: '350rem',
        // width: '45%',
        toolbar: {
            show: false
        },   
    },
    series: [{
        name: 'ad',
        data: [{
            x: 'daniel',
            y: 12,
            goals: [{
                name: 'media',
                value: 18,
                strokeColor: 'teal'
            }]
        },{
            x: 'daniel',
            y: 12
        },{
            x: 'daniel',
            y: 20
        },{
            x: 'daniel',
            y: 20
        }]
    }],
    plotOptions: {
        bar: {
            borderRadius: 8,
            distributed: true,
        }
    },
    theme: {
        mode: 'dark',
        palette: 'palette10'
    }
}
let chartSalesPerProductFinal = new ApexCharts(chartSalesPerProduct, optionsSalesPerProduct)

chartSalesPerProductFinal.render()