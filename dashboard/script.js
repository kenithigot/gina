
function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(',', '').replace(' ', '');

    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

async function fetchRespondentCount() {
    const url = 'https://script.google.com/macros/s/AKfycbwk0qIb9Xx8oOVWSBJyO1CxWZGfDWh0g4ZWQGjf8np_MchI3kZDMr_qJ73egbTM-miI/exec'; // Replace with your web app URL

    try {
        const response = await fetch(url);
        const data = await response.json(); // Parse JSON response

        // Update the HTML with the fetched data
        document.getElementById('respondentCount').textContent = data.count;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('respondentCount').textContent = 'Error loading data';
    }
}

fetchRespondentCount();

// First Chart
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Reliability", "Speed", "Consistency", "Stability", "Uptime Service"],
        datasets: [
            {
                label: "Very Satisfied",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [4215, 5312, 6251, 7841, 9821],
            },
            {
                label: "Satisfied",
                backgroundColor: "#1cc88a",
                hoverBackgroundColor: "#17a673",
                borderColor: "#1cc88a",
                data: [3215, 4312, 5251, 6841, 8821],
            },
            {
                label: "Neutral",
                backgroundColor: "#f6c23e",
                hoverBackgroundColor: "#f4b619",
                borderColor: "#f6c23e",
                data: [2215, 3312, 4251, 5841, 7821],
            },
            {
                label: "Dissatisfied",
                backgroundColor: "#e74a3b",
                hoverBackgroundColor: "#d92e1d",
                borderColor: "#e74a3b",
                data: [1215, 2312, 3251, 4841, 6821],
            },
            {
                label: "Very Dissatisfied",
                backgroundColor: "#858796",
                hoverBackgroundColor: "#6c757d",
                borderColor: "#858796",
                data: [715, 1312, 2251, 3841, 5821],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 6
                },
                barThickness: 15,
                maxBarThickness: 15,
                stacked: false
            },
            y: {
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function (value) {
                        return number_format(value);
                    }
                },
                grid: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }
        },
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                titleMarginBottom: 10,
                titleFont: {
                    size: 14
                },
                backgroundColor: "rgb(255,255,255)",
                bodyColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                displayColors: true,
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem) {
                        var datasetLabel = tooltipItem.dataset.label || '';
                        return datasetLabel + ': $' + number_format(tooltipItem.raw);
                    }
                }
            }
        }
    }
});

// Second Chart
var ctx2 = document.getElementById("mySecondBarChart");
var mySecondBarChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Variety Channels", "Availability (HD)", "Local Channel", "Channel Quality", "Favorite Channel"],
        datasets: [
            {
                label: "Very Satisfied",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [3215, 4512, 5751, 6741, 7821],
            },
            {
                label: "Satisfied",
                backgroundColor: "#1cc88a",
                hoverBackgroundColor: "#17a673",
                borderColor: "#1cc88a",
                data: [2215, 3512, 4751, 5741, 6821],
            },
            {
                label: "Neutral",
                backgroundColor: "#f6c23e",
                hoverBackgroundColor: "#f4b619",
                borderColor: "#f6c23e",
                data: [1215, 2512, 3751, 4741, 5821],
            },
            {
                label: "Dissatisfied",
                backgroundColor: "#e74a3b",
                hoverBackgroundColor: "#d92e1d",
                borderColor: "#e74a3b",
                data: [815, 1512, 2751, 3741, 4821],
            },
            {
                label: "Very Dissatisfied",
                backgroundColor: "#858796",
                hoverBackgroundColor: "#6c757d",
                borderColor: "#858796",
                data: [415, 812, 1751, 2741, 3821],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 6
                },
                barThickness: 15,
                maxBarThickness: 15,
                stacked: false
            },
            y: {
                ticks: {
                    min: 0,
                    max: 10000,
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function (value) {
                        return number_format(value);
                    }
                },
                grid: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }
        },
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                titleMarginBottom: 10,
                titleFont: {
                    size: 14
                },
                backgroundColor: "rgb(255,255,255)",
                bodyColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                displayColors: true,
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem) {
                        var datasetLabel = tooltipItem.dataset.label || '';
                        return datasetLabel + ': $' + number_format(tooltipItem.raw);
                    }
                }
            }
        }
    }
});

// Third Chart
var ctx3 = document.getElementById("myThirdBarChart");
var myThirdBarChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Friendliness", "Professionalism", "Response Time", "Resolution", "Overall communication"],
        datasets: [
            {
                label: "Very Satisfied",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [3215, 4512, 5751, 6741, 7821],
            },
            {
                label: "Satisfied",
                backgroundColor: "#1cc88a",
                hoverBackgroundColor: "#17a673",
                borderColor: "#1cc88a",
                data: [2215, 3512, 4751, 5741, 6821],
            },
            {
                label: "Neutral",
                backgroundColor: "#f6c23e",
                hoverBackgroundColor: "#f4b619",
                borderColor: "#f6c23e",
                data: [1215, 2512, 3751, 4741, 5821],
            },
            {
                label: "Dissatisfied",
                backgroundColor: "#e74a3b",
                hoverBackgroundColor: "#d92e1d",
                borderColor: "#e74a3b",
                data: [815, 1512, 2751, 3741, 4821],
            },
            {
                label: "Very Dissatisfied",
                backgroundColor: "#858796",
                hoverBackgroundColor: "#6c757d",
                borderColor: "#858796",
                data: [415, 812, 1751, 2741, 3821],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 6
                },
                barThickness: 15,
                maxBarThickness: 15,
                stacked: false
            },
            y: {
                ticks: {
                    min: 0,
                    max: 10000,
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function (value) {
                        return number_format(value);
                    }
                },
                grid: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }
        },
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                titleMarginBottom: 10,
                titleFont: {
                    size: 14
                },
                backgroundColor: "rgb(255,255,255)",
                bodyColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                displayColors: true,
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem) {
                        var datasetLabel = tooltipItem.dataset.label || '';
                        return datasetLabel + ': $' + number_format(tooltipItem.raw);
                    }
                }
            }
        }
    }
});

// Forth Chart
var ctx4 = document.getElementById("myForthBarChart");
var myForthBarChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["Accessibility", "Availability Service", "Customer Service", "Service Representative", "Overall Assistance"],
        datasets: [
            {
                label: "Very Satisfied",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [3215, 4512, 5751, 6741, 7821],
            },
            {
                label: "Satisfied",
                backgroundColor: "#1cc88a",
                hoverBackgroundColor: "#17a673",
                borderColor: "#1cc88a",
                data: [2215, 3512, 4751, 5741, 6821],
            },
            {
                label: "Neutral",
                backgroundColor: "#f6c23e",
                hoverBackgroundColor: "#f4b619",
                borderColor: "#f6c23e",
                data: [1215, 2512, 3751, 4741, 5821],
            },
            {
                label: "Dissatisfied",
                backgroundColor: "#e74a3b",
                hoverBackgroundColor: "#d92e1d",
                borderColor: "#e74a3b",
                data: [815, 1512, 2751, 3741, 4821],
            },
            {
                label: "Very Dissatisfied",
                backgroundColor: "#858796",
                hoverBackgroundColor: "#6c757d",
                borderColor: "#858796",
                data: [415, 812, 1751, 2241, 3821],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 6
                },
                barThickness: 15,
                maxBarThickness: 15,
                stacked: false
            },
            y: {
                ticks: {
                    min: 0,
                    max: 10000,
                    maxTicksLimit: 5,
                    padding: 10,
                    callback: function (value) {
                        return number_format(value);
                    }
                },
                grid: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }
        },
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                titleMarginBottom: 10,
                titleFont: {
                    size: 14
                },
                backgroundColor: "rgb(255,255,255)",
                bodyColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                displayColors: true,
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem) {
                        var datasetLabel = tooltipItem.dataset.label || '';
                        return datasetLabel + ': $' + number_format(tooltipItem.raw);
                    }
                }
            }
        }
    }
});

async function fetchChartData() {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwk0qIb9Xx8oOVWSBJyO1CxWZGfDWh0g4ZWQGjf8np_MchI3kZDMr_qJ73egbTM-miI/exec'); // Replace with your Web App URL
        const chartData = await response.json();
        
        var piechart1 = document.getElementById("firstPieChart");
        var firstPieChart = new Chart(piechart1, {
            type: 'doughnut',
            data: {
                labels: chartData.demographics.labels,
                datasets: [{
                    data: chartData.demographics.data,
                    backgroundColor: ['#919619', '#318389', '#981337', '#c78b05', '#005b5e'],
                    hoverBackgroundColor: ['#919619', '#318389', '#981337', '#c78b05', '#005b5e'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
        });
    } catch (error) {
        console.error("Error fetching chart data:", error);
    }
}

// Call the fetch function when the page loads
window.onload = fetchChartData;




document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwk0qIb9Xx8oOVWSBJyO1CxWZGfDWh0g4ZWQGjf8np_MchI3kZDMr_qJ73egbTM-miI/exec'); // Your Web App URL
        const chartData = await response.json();

        console.log('Fetched Chart Data:', chartData);

        // Ensure the expected data structure is available
        if (chartData.gender && chartData.gender.labels && chartData.gender.data) {
            const piechart2 = document.getElementById("secondPieChart");
            const secondPieChart = new Chart(piechart2, {
                type: 'doughnut',
                data: {
                    labels: chartData.gender.labels,
                    datasets: [{
                        data: chartData.gender.data,
                        backgroundColor: ['#31009a', '#f40500', "gray"],
                        hoverBackgroundColor: ['#31009a', '#ab201d', "gray"],
                        hoverBorderColor: "rgba(234, 236, 244, 1)",
                    }],
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        borderColor: '#dddfeb',
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        caretPadding: 10,
                    },
                    legend: {
                        display: true // Change to true if you want to show the legend
                    },
                    cutoutPercentage: 80,
                },
            });
        } else {
            console.error("Unexpected data structure:", chartData);
        }
    } catch (error) {
        console.error("Error fetching gender chart data:", error);
    }
});


//Location Pie Chart
fetch('https://script.googleusercontent.com/macros/echo?user_content_key=IX880K-F7UxFBbTtLtY0iFG33qgtiborSZUyAf7oRhBtXQ3n5k1A1_0BZp7qbowYzJrazYjTAqGhHa4iBm4XBLhZN7E03zz0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH7KzhLSV6ijW4NeMMZsg2b1ytDVAqOl7q1xKvzJMIDSTmBdr02HugF9T5bpzqm1MIw9fSfUIuXGOggfnbU6wdE8vj625p33AA&lib=MRQbmB_YerwlPKUQSdLgs4-hB-b9HCZhR') // Replace with your actual Apps Script URL
    .then(response => response.json())
    .then(data => {
        // Fetch the location data
        var locationLabels = data.locations.labels;
        var locationData = data.locations.data;

        // Location Pie Chart
        var piechart3 = document.getElementById("thirdPieChart");
        var thirdPieChart = new Chart(piechart3, {
            type: 'doughnut',
            data: {
                labels: locationLabels,
                datasets: [{
                    data: locationData,
                    backgroundColor: ['#919619', '#318389', '#981337', '#c78b05', '#005b5e', '#31009a', '#f40500', "gray"], // Add more colors if needed
                    hoverBackgroundColor: ['#919619', '#318389', '#981337', '#c78b05', '#005b5e', '#31009a', '#f40500', "gray"], // Add more hover colors
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
