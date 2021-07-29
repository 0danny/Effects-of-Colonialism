createVisualisation()

function createVisualisation() {
    var data;

    Papa.parse('data/broad_money_growth.csv', {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);
            data = results.data;


            var options = {
                chart: {
                    type: "area",
                    foreColor: "#999",
                    background: "#222",
                    height: '400',
                    width: '100%',
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
                colors: ['#00E396', '#0090FF'],
                stroke: {
                    curve: "smooth",
                    width: 3
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    name: 'Algeria',
                    data: getCountryData(0)
                }, {
                    name: 'Australia',
                    data: getCountryData(2)
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

                for (const [index, [key, value]] of Object.entries(Object.entries(data[where]))) {
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

function loadLocal() {

}