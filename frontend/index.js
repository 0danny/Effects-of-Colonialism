createVisualisations()

function createVisualisations() {

    Papa.parse('data/gdp_growth.csv', {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);

            var options = {
                chart: {
                    type: "line",
                    foreColor: "#999",
                    background: "#222",
                    height: '400',
                    width: '800',
                    stacked: false,
                    dropShadow: {
                        enabled: true,
                        enabledSeries: [0],
                        top: -2,
                        left: 2,
                        blur: 5,
                        opacity: 0.06
                    }
                },
                colors: ['#00E396', '#0090FF', '#8000FF'],
                stroke: {
                    curve: "smooth",
                    width: 3
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    name: 'Australia',
                    data: getCountryData(2)
                }, {
                    name: 'Iraq',
                    data: getCountryData(21)
                }, {
                    name: 'Madagascar',
                    data: getCountryData(26)
                }],
                markers: {
                    size: 0,
                    strokeColor: "#fff",
                    strokeWidth: 3,
                    strokeOpacity: 1,
                    fillOpacity: 1,
                    hover: {
                        size: 6
                    }
                },
                xaxis: {
                    categories: getCountryNames()
                },
                yaxis: {
                    labels: {
                        offsetX: -12,
                        offsetY: 0
                    },
                    tooltip: {
                        enabled: true
                    },
                    decimalsInFloat: 2
                },
                grid: {
                    padding: {
                        left: -5,
                        right: 5
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                fill: {
                    type: "solid",
                    opacity: 0.8
                }
            };

            var chart = new ApexCharts(document.querySelector("#gdp_growth_chart"), options);

            chart.render();

            function getCountryData(where) {

                var returner = []

                for (const [index, [key, value]] of Object.entries(Object.entries(results.data[where]))) {
                    if (key.includes("Sum")) {
                        returner.push(value)
                    }
                }

                console.log("Return", returner)

                return returner
            }

            function getCountryNames() {
                return ['1975', '1976', '1977', '1978', '1979', '1980', '2015', '2016', '2017', '2018'];
            }
        }
    });

    Papa.parse('data/cause_of_death.csv', {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);


            var options = {
                chart: {
                    type: "pie",
                    foreColor: "#999",
                    background: "#222",
                    height: '400',
                    width: '800',
                    dropShadow: {
                        enabled: true,
                        enabledSeries: [0],
                        top: -2,
                        left: 2,
                        blur: 5,
                        opacity: 0.06
                    }
                },
                colors: ['#00E396', '#0090FF', '#8000FF'],
                series: [getCountryData(2), getCountryData(10), getCountryData(17)],
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                fill: {
                    type: "solid",
                    opacity: 0.8
                },
                labels: ['Australia', 'Congo, Rep.', 'Ghana'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };

            var chart = new ApexCharts(document.querySelector("#cause_of_death_chart"), options);

            chart.render();

            function getCountryData(where) {
                for (const [index, [key, value]] of Object.entries(Object.entries(results.data[where]))) {
                    if (key.includes("Sum of 2015")) {
                        return value
                    }
                }
            }
        }
    });

    Papa.parse('data/broad_money_growth.csv', {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);


            var options = {
                chart: {
                    type: "bar",
                    foreColor: "#999",
                    background: "#222",
                    height: '400',
                    width: '800',
                    stacked: false,
                    dropShadow: {
                        enabled: true,
                        enabledSeries: [0],
                        top: -2,
                        left: 2,
                        blur: 5,
                        opacity: 0.06
                    }
                },
                colors: ['#00E396', '#0090FF', '#8000FF'],
                stroke: {
                    curve: "smooth",
                    width: 3
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    name: 'Australia',
                    data: getCountryData(2)
                }, {
                    name: 'Libya',
                    data: getCountryData(7)
                }, {
                    name: 'Madagascar',
                    data: getCountryData(8)
                }],
                markers: {
                    size: 0,
                    strokeColor: "#fff",
                    strokeWidth: 3,
                    strokeOpacity: 1,
                    fillOpacity: 1,
                    hover: {
                        size: 6
                    }
                },
                xaxis: {
                    categories: getCountryNames()
                },
                yaxis: {
                    labels: {
                        offsetX: -12,
                        offsetY: 0
                    },
                    tooltip: {
                        enabled: true
                    },
                    decimalsInFloat: 2
                },
                grid: {
                    padding: {
                        left: -5,
                        right: 5
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                fill: {
                    type: "solid",
                    opacity: 0.8
                }
            };

            var chart = new ApexCharts(document.querySelector("#broad_money_growth_chart"), options);

            chart.render();

            function getCountryData(where) {

                var returner = []

                for (const [index, [key, value]] of Object.entries(Object.entries(results.data[where]))) {
                    if (key.includes("Sum")) {
                        returner.push(value)
                    }
                }

                console.log("Return", returner)

                return returner
            }

            function getCountryNames() {
                return ['1975', '1976', '1977', '1978', '1979', '1980', '2015', '2016', '2017', '2018'];
            }
        }
    });
}