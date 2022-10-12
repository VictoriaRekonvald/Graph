// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['[565, 665]', '[665, 765]', '[765, 865]', '[965, 1065]', '[1065, 1165]', '[1165, 1265]', '[1265, 1365]', '[1365, 1465]', '[1465, 1565]', '[1565, 1665]', '[1665, 1765]'],
        datasets: [{
            label: 'Frequency',
            data: [1, 0, 0, 10, 21, 41, 39, 39, 28, 12, 1],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(156, 39, 176, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'The frequency distribution histogram (Metters)',
            position: 'top',
            fontSize: 30,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    }
});
// Vertical bar chart
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['[21, 22,9]', '[22,9, 24,8]', '[24,8, 26,7]', '[26,7, 28,6]', '[28,6, 30,5]', '[30,5, 32,4]', '[32,4, 34,3]', '[34,3, 36,2]', '[26,2, 38,1]'],
        datasets: [{
            label: 'Frequency',
            data: [4, 17, 29, 54, 38, 31, 14, 6, 2],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)',
                'rgba(225, 102, 0, 0.6)',
                'rgba(293, 233, 182, 0.6)',
                'rgba(26, 3, 96, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'The frequency distribution histogram (SPM)',
            position: 'top',
            fontSize: 30,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 60
                }
            }]
        }
    }
});
var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['[337, 436]', '[436, 535]', '[535, 634]', '[634, 733]', '[733, 832]', '[832, 931]', '[931, 1030]', '[1030, 1129]', '[1129, 1228]', '[1228, 1327]'],
        datasets: [{
            label: 'Frequency',
            data: [1, 27, 45, 45, 35, 23, 12, 5, 1, 1],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(219, 233, 182, 0.6)',
                'rgba(216, 127, 296, 0.6)',
                'rgba(43, 149, 20, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'The frequency distribution histogram (Cal/hr)',
            position: 'top',
            fontSize: 30,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 50
                }
            }]
        }
    }
});
var ctx = document.getElementById('myChart4').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['[11, 40]', '[40, 69]', '[69, 98]', '[98, 127]', '[127, 156]', '[156, 185]', '[185, 214]', '[214, 243]', '[243, 272]', '[272, 301]'],
        datasets: [{
            label: 'Frequency',
            data: [1, 27, 46, 45, 34, 23, 12, 5, 1, 1],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)',
                'rgba(25, 152, 0, 0.6)',
                'rgba(50, 1, 13, 0.6)',
                'rgba(216, 272, 96, 0.6)',
                'rgba(321, 169, 244, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'The frequency distribution histogram (Watt)',
            position: 'top',
            fontSize: 30,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 50
                }
            }]
        }
    }
});