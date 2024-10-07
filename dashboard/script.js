
async function fetchRespondentCount() {
    const url = 'https://script.google.com/macros/s/AKfycbwI8Fj_YZxh1dqslrB38gEz3VpO_R0i_N8VdIeDRnW_sS2u8eXSAmTZGkht3yyARZt-dg/exec';

    try {
        const response = await fetch(url);
        const data = await response.json(); 

        // Update the HTML with the fetched data
        document.getElementById('respondentCount').textContent = data.count;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('respondentCount').textContent = 'Error loading data';
    }
}

fetchRespondentCount();

fetch('https://script.google.com/macros/s/AKfycbwI8Fj_YZxh1dqslrB38gEz3VpO_R0i_N8VdIeDRnW_sS2u8eXSAmTZGkht3yyARZt-dg/exec')
    .then(response => response.json())
    .then(data => {

        // Check and handle the data for the first chart
        if (data && data.satisfaction && Array.isArray(data.satisfaction)) {

            const satisfactionData = data.satisfaction; 
            const chartLabels1 = ["Reliability", "Speed", "Consistency", "Stability", "Uptime Internet Service"]; 
            
            const datasets1 = [
                {
                    label: "Very Satisfied",
                    backgroundColor: "#4e73df",
                    hoverBackgroundColor: "#2e59d9",
                    borderColor: "#4e73df",
                    data: satisfactionData.map(question => question.data[0])
                },
                {
                    label: "Satisfied",
                    backgroundColor: "#1cc88a",
                    hoverBackgroundColor: "#17a673",
                    borderColor: "#1cc88a",
                    data: satisfactionData.map(question => question.data[1]) 
                },
                {
                    label: "Neutral",
                    backgroundColor: "#f6c23e",
                    hoverBackgroundColor: "#f4b619",
                    borderColor: "#f6c23e",
                    data: satisfactionData.map(question => question.data[2]) 
                },
                {
                    label: "Dissatisfied",
                    backgroundColor: "#e74a3b",
                    hoverBackgroundColor: "#d92e1d",
                    borderColor: "#e74a3b",
                    data: satisfactionData.map(question => question.data[3]) 
                },
                {
                    label: "Very Dissatisfied",
                    backgroundColor: "#858796",
                    hoverBackgroundColor: "#6c757d",
                    borderColor: "#858796",
                    data: satisfactionData.map(question => question.data[4]) 
                }
            ];

            // Initialize the first chart
            var ctx1 = document.getElementById("myBarChart");
            var myBarChart = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: chartLabels1,
                    datasets: datasets1
                },
                options: {
                    maintainAspectRatio: false,
                    layout: {
                        padding: { left: 10, right: 25, top: 25, bottom: 0 }
                    },
                    scales: {
                        x: { grid: { display: false, drawBorder: false }, ticks: { maxTicksLimit: 6, padding: 10 }, barThickness: 15, maxBarThickness: 15 },
                        y: {
                            grid: { display: true, drawBorder: false },
                            ticks: {
                                stepSize: 1,
                                min: 0,
                                max: Math.max(...datasets1.map(d => Math.max(...d.data))),
                                maxTicksLimit: 5,
                                padding: 10,
                                callback: function (value) { return Number.isInteger(value) ? value : null; }
                            }
                        }
                    },
                    plugins: {
                        legend: { display: true },
                        tooltip: {
                            titleMarginBottom: 10,
                            titleFont: { size: 14 },
                            backgroundColor: "rgb(255,255,255)",
                            bodyColor: "#858796",
                            borderColor: '#dddfeb',
                            borderWidth: 1,
                            displayColors: true,
                            caretPadding: 10
                        }
                    }
                }
            });
        } else {
            console.error('Invalid data format for the first chart:', data);
        }

        // Check and handle the data for the second chart
        if (data && data.satisfaction && Array.isArray(data.satisfaction)) {

            const satisfactionData = data.satisfaction; 
            const chartLabels2 = ["Variety Channels", "Availability (HD)", "Local Channel", "Channel Quality", "Favorite Channel"]; 
            
            const datasets2 = [
                {
                    label: "Very Satisfied",
                    backgroundColor: "#4e73df",
                    hoverBackgroundColor: "#2e59d9",
                    borderColor: "#4e73df",
                    data: satisfactionData.slice(5, 10).map(question => question.data[0]) 
                },
                {
                    label: "Satisfied",
                    backgroundColor: "#1cc88a",
                    hoverBackgroundColor: "#17a673",
                    borderColor: "#1cc88a",
                    data: satisfactionData.slice(5, 10).map(question => question.data[1]) 
                },
                {
                    label: "Neutral",
                    backgroundColor: "#f6c23e",
                    hoverBackgroundColor: "#f4b619",
                    borderColor: "#f6c23e",
                    data: satisfactionData.slice(5, 10).map(question => question.data[2]) 
                },
                {
                    label: "Dissatisfied",
                    backgroundColor: "#e74a3b",
                    hoverBackgroundColor: "#d92e1d",
                    borderColor: "#e74a3b",
                    data: satisfactionData.slice(5, 10).map(question => question.data[3]) 
                },
                {
                    label: "Very Dissatisfied",
                    backgroundColor: "#858796",
                    hoverBackgroundColor: "#6c757d",
                    borderColor: "#858796",
                    data: satisfactionData.slice(5, 10).map(question => question.data[4]) 
                }
            ];

            // Initialize the second chart
            var ctx222 = document.getElementById("mySecondBarChart");
            var mySecondBarChart = new Chart(ctx222, {
                type: 'bar',
                data: {
                    labels: chartLabels2,
                    datasets: datasets2
                },
                options: {
                    maintainAspectRatio: false,
                    layout: {
                        padding: { left: 10, right: 25, top: 25, bottom: 0 }
                    },
                    scales: {
                        x: { grid: { display: false, drawBorder: false }, ticks: { maxTicksLimit: 6, padding: 10 }, barThickness: 15, maxBarThickness: 15 },
                        y: {
                            grid: { display: true, drawBorder: false },
                            ticks: {
                                stepSize: 1,
                                min: 0,
                                max: Math.max(...datasets2.map(d => Math.max(...d.data))),
                                maxTicksLimit: 5,
                                padding: 10,
                                callback: function (value) { return Number.isInteger(value) ? value : null; }
                            }
                        }
                    },
                    plugins: {
                        legend: { display: true },
                        tooltip: {
                            titleMarginBottom: 10,
                            titleFont: { size: 14 },
                            backgroundColor: "rgb(255,255,255)",
                            bodyColor: "#858796",
                            borderColor: '#dddfeb',
                            borderWidth: 1,
                            displayColors: true,
                            caretPadding: 10
                        }
                    }
                }
            });
        } else {
            console.error('Invalid data format for the second chart:', data);
        }


        // Check and handle the data for the third chart
        if (data && data.satisfaction && Array.isArray(data.satisfaction)) {
            const satisfactionData = data.satisfaction; 
            const chartLabels3 = ["Friendliness", "Professionalism", "Response Time", "Resolution", "Overall communication"]; 
            
            const datasets3 = [
                {
                    label: "Very Satisfied",
                    backgroundColor: "#4e73df",
                    hoverBackgroundColor: "#2e59d9",
                    borderColor: "#4e73df",
                    data: satisfactionData.slice(10, 15).map(question => question.data[0]) 
                },
                {
                    label: "Satisfied",
                    backgroundColor: "#1cc88a",
                    hoverBackgroundColor: "#17a673",
                    borderColor: "#1cc88a",
                    data: satisfactionData.slice(10, 15).map(question => question.data[1])
                },
                {
                    label: "Neutral",
                    backgroundColor: "#f6c23e",
                    hoverBackgroundColor: "#f4b619",
                    borderColor: "#f6c23e",
                    data: satisfactionData.slice(10, 15).map(question => question.data[2])
                },
                {
                    label: "Dissatisfied",
                    backgroundColor: "#e74a3b",
                    hoverBackgroundColor: "#d92e1d",
                    borderColor: "#e74a3b",
                    data: satisfactionData.slice(10, 15).map(question => question.data[3]) 
                },
                {
                    label: "Very Dissatisfied",
                    backgroundColor: "#858796",
                    hoverBackgroundColor: "#6c757d",
                    borderColor: "#858796",
                    data: satisfactionData.slice(10, 15).map(question => question.data[4]) 
                }
            ];

            // Initialize the third chart
            var ctx333 = document.getElementById("myThirdBarChart");
            var myThirdBarChart = new Chart(ctx333, {
                type: 'bar',
                data: {
                    labels: chartLabels3,
                    datasets: datasets3
                },
                options: {
                    maintainAspectRatio: false,
                    layout: {
                        padding: { left: 10, right: 25, top: 25, bottom: 0 }
                    },
                    scales: {
                        x: { grid: { display: false, drawBorder: false }, ticks: { maxTicksLimit: 6, padding: 10 }, barThickness: 15, maxBarThickness: 15 },
                        y: {
                            grid: { display: true, drawBorder: false },
                            ticks: {
                                stepSize: 1,
                                min: 0,
                                max: Math.max(...datasets3.map(d => Math.max(...d.data))),
                                maxTicksLimit: 5,
                                padding: 10,
                                callback: function (value) { return Number.isInteger(value) ? value : null; }
                            }
                        }
                    },
                    plugins: {
                        legend: { display: true },
                        tooltip: {
                            titleMarginBottom: 10,
                            titleFont: { size: 14 },
                            backgroundColor: "rgb(255,255,255)",
                            bodyColor: "#858796",
                            borderColor: '#dddfeb',
                            borderWidth: 1,
                            displayColors: true,
                            caretPadding: 10
                        }
                    }
                }
            });
        } else {
            console.error('Invalid data format for the second chart:', data);
        }

        // Check and handle the data for the forth chart
        if (data && data.satisfaction && Array.isArray(data.satisfaction)) {
            const satisfactionData = data.satisfaction; 
            const chartLabels4 = ["Friendliness", "Professionalism", "Response Time", "Resolution", "Overall communication"]; 
            
            const datasets4 = [
                {
                    label: "Very Satisfied",
                    backgroundColor: "#4e73df",
                    hoverBackgroundColor: "#2e59d9",
                    borderColor: "#4e73df",
                    data: satisfactionData.slice(15, 20).map(question => question.data[0]) 
                },
                {
                    label: "Satisfied",
                    backgroundColor: "#1cc88a",
                    hoverBackgroundColor: "#17a673",
                    borderColor: "#1cc88a",
                    data: satisfactionData.slice(15, 20).map(question => question.data[1]) 
                },
                {
                    label: "Neutral",
                    backgroundColor: "#f6c23e",
                    hoverBackgroundColor: "#f4b619",
                    borderColor: "#f6c23e",
                    data: satisfactionData.slice(15, 20).map(question => question.data[2]) 
                },
                {
                    label: "Dissatisfied",
                    backgroundColor: "#e74a3b",
                    hoverBackgroundColor: "#d92e1d",
                    borderColor: "#e74a3b",
                    data: satisfactionData.slice(15, 20).map(question => question.data[3]) 
                },
                {
                    label: "Very Dissatisfied",
                    backgroundColor: "#858796",
                    hoverBackgroundColor: "#6c757d",
                    borderColor: "#858796",
                    data: satisfactionData.slice(10, 15).map(question => question.data[4])
                }
            ];

            // Initialize the forth chart
            var ctx444 = document.getElementById("myForthBarChart");
            var myForthBarChart = new Chart(ctx444, {
                type: 'bar',
                data: {
                    labels: chartLabels4,
                    datasets: datasets4
                },
                options: {
                    maintainAspectRatio: false,
                    layout: {
                        padding: { left: 10, right: 25, top: 25, bottom: 0 }
                    },
                    scales: {
                        x: { grid: { display: false, drawBorder: false }, ticks: { maxTicksLimit: 6, padding: 10 }, barThickness: 15, maxBarThickness: 15 },
                        y: {
                            grid: { display: true, drawBorder: false },
                            ticks: {
                                stepSize: 1,
                                min: 0,
                                max: Math.max(...datasets4.map(d => Math.max(...d.data))),
                                maxTicksLimit: 5,
                                padding: 10,
                                callback: function (value) { return Number.isInteger(value) ? value : null; }
                            }
                        }
                    },
                    plugins: {
                        legend: { display: true },
                        tooltip: {
                            titleMarginBottom: 10,
                            titleFont: { size: 14 },
                            backgroundColor: "rgb(255,255,255)",
                            bodyColor: "#858796",
                            borderColor: '#dddfeb',
                            borderWidth: 1,
                            displayColors: true,
                            caretPadding: 10
                        }
                    }
                }
            });
        } else {
            console.error('Invalid data format for the second chart:', data);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

async function fetchChartData() {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwI8Fj_YZxh1dqslrB38gEz3VpO_R0i_N8VdIeDRnW_sS2u8eXSAmTZGkht3yyARZt-dg/exec');
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
        const response = await fetch('https://script.google.com/macros/s/AKfycbwI8Fj_YZxh1dqslrB38gEz3VpO_R0i_N8VdIeDRnW_sS2u8eXSAmTZGkht3yyARZt-dg/exec');
        const chartData = await response.json();

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
                        display: true
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
fetch('https://script.google.com/macros/s/AKfycbwI8Fj_YZxh1dqslrB38gEz3VpO_R0i_N8VdIeDRnW_sS2u8eXSAmTZGkht3yyARZt-dg/exec') 
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
                    backgroundColor: ['#919619', '#318389', '#981337', '#c78b05', '#005b5e', '#31009a', '#f40500', "gray"], 
                    hoverBackgroundColor: ['#919619', '#318389', '#981337', '#c78b05', '#005b5e', '#31009a', '#f40500', "gray"],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
