createVisualisations() //Calling the main function.

function createVisualisations() { //Defining the function that creates the website layout.

    try { //Beginning of a try/catch
        Papa.parse('data/gdp_growth.csv', { //Using the papa libary to parse the 'gdp_growth' csv to JSON object
            header: true,
            download: true, //Options for downloading file from server
            dynamicTyping: true,
            complete: function(results) { //If the CSV validation was a success it calls a callback function
                console.log(results) //Printing results object to console

                var options = { //Defining the options object for the external libary ApexCharts, which will create the first graph
                    chart: { //Chart options e.g. type, color etc
                        type: "line",
                        foreColor: "#999",
                        background: "#222",
                        height: '400',
                        width: '800',
                        stacked: false,
                        dropShadow: { //Creating a drop shadow
                            enabled: true,
                            enabledSeries: [0],
                            top: -2,
                            left: 2,
                            blur: 5,
                            opacity: 0.06
                        }
                    },
                    colors: ['#00E396', '#0090FF', '#8000FF'], //Colors for each line on graph
                    stroke: { //The stroke options for the line
                        curve: "smooth",
                        width: 3
                    },
                    dataLabels: { //Removing the data labels
                        enabled: false
                    },
                    series: [{
                        name: 'Australia',
                        data: getCountryData(2) //Retrieving the data for Australia at the specific index in the data
                    }, {
                        name: 'Iraq',
                        data: getCountryData(21) //Retrieving the data for Iraq at the specific index in the data
                    }, {
                        name: 'Madagascar',
                        data: getCountryData(26) //Retrieving the data for Madagascar at the specific index in the data
                    }],
                    markers: { //Modifying the markers for asthetics
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
                        categories: getCountryNames() //Retrieving the country names for the x-axis
                    },
                    yaxis: { //Y Axis options
                        labels: {
                            offsetX: -12,
                            offsetY: 0
                        },
                        tooltip: {
                            enabled: true
                        },
                        decimalsInFloat: 2
                    },
                    grid: { //Grid options
                        padding: {
                            left: -5,
                            right: 5
                        }
                    },
                    legend: { //Positioning the legend
                        position: 'top',
                        horizontalAlign: 'left'
                    },
                    fill: { //Filling the background of the graph
                        type: "solid",
                        opacity: 0.8
                    }
                };

                var chart = new ApexCharts(document.querySelector("#gdp_growth_chart"), options); //Creating a new instance of apex charts with the options.

                chart.render(); //Rendering the chart.

                function getCountryData(where) { //Getting an array of country data at the specific index

                    var returner = [] //Defining final array

                    for (const [index, [key, value]] of Object.entries(Object.entries(results.data[where]))) { //For loop which goes through each array of values in the JSON Object
                        if (key.includes("Sum")) { //Push the value to the final array if it contains a 'Sum' in the title
                            returner.push(value) //Push the value
                        }
                    }

                    console.log("Return", returner) //Printing the results

                    return returner //Returning the array
                }
            }
        });

        Papa.parse('data/cause_of_death.csv', { //Using the papa libary to parse the 'cause_of_death' csv to JSON object
            header: true,
            download: true, //Options for downloading file from server
            dynamicTyping: true,
            complete: function(results) { //If the CSV validation was a success it calls a callback function
                console.log(results) //Printing results object to console


                var options = { //Defining the options object for the external libary ApexCharts, which will create the first graph
                    chart: { //Chart options e.g. type, color etc
                        type: "pie",
                        foreColor: "#999",
                        background: "#222",
                        height: '400',
                        width: '800',
                        dropShadow: { //Creating a drop shadow
                            enabled: true,
                            enabledSeries: [0],
                            top: -2,
                            left: 2,
                            blur: 5,
                            opacity: 0.06
                        }
                    },
                    colors: ['#00E396', '#0090FF', '#8000FF'], //Colors for each pie piece on graph
                    series: [getCountryData(2), getCountryData(10), getCountryData(17)], //Recieiving the country data by index for Australia, Congo, Rep. and Ghana
                    legend: { //Positioning the legend
                        position: 'top',
                        horizontalAlign: 'left'
                    },
                    fill: { //Filling the background of the graph
                        type: "solid",
                        opacity: 0.8
                    },
                    labels: ['Australia', 'Congo, Rep.', 'Ghana'], //Retrieving the country names for the pie portions
                    responsive: [{ //Making the dimensions of the graph responsive to the websites relative size
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

                var chart = new ApexCharts(document.querySelector("#cause_of_death_chart"), options); //Creating a new instance of apex charts with the options.

                chart.render(); //Rendering the chart.

                function getCountryData(where) { //Getting a data of a country at the specific index
                    for (const [index, [key, value]] of Object.entries(Object.entries(results.data[where]))) { //For loop which goes through each array of values in the JSON Object
                        if (key.includes("Sum of 2015")) { //Check if the key contains a 'Sum of 2015' in the title
                            return value //Return the value
                        }
                    }
                }
            }
        });

        Papa.parse('data/broad_money_growth.csv', { //Using the papa libary to parse the 'broad_money_growth' csv to JSON object
            header: true,
            download: true, //Options for downloading file from server
            dynamicTyping: true,
            complete: function(results) { //If the CSV validation was a success it calls a callback function
                console.log(results); //Printing results object to console


                var options = { //Defining the options object for the external libary ApexCharts, which will create the first graph
                    chart: { //Chart options e.g. type, color etc
                        type: "bar",
                        foreColor: "#999",
                        background: "#222",
                        height: '400',
                        width: '800',
                        stacked: false,
                        dropShadow: { //Creating a drop shadow
                            enabled: true,
                            enabledSeries: [0],
                            top: -2,
                            left: 2,
                            blur: 5,
                            opacity: 0.06
                        }
                    },
                    colors: ['#00E396', '#0090FF', '#8000FF'], //Colors for each line on graph
                    stroke: { //The stroke options for the line
                        curve: "smooth",
                        width: 3
                    },
                    dataLabels: { //Removing the data labels
                        enabled: false
                    },
                    series: [{
                        name: 'Australia',
                        data: getCountryData(2) //Retrieving the data for Australia at the specific index in the data
                    }, {
                        name: 'Libya',
                        data: getCountryData(7) //Retrieving the data for Libya at the specific index in the data
                    }, {
                        name: 'Madagascar',
                        data: getCountryData(8) //Retrieving the data for Madagascar at the specific index in the data
                    }],
                    markers: { //Modifying the markers for asthetics
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
                        categories: getCountryNames() //Retrieving the country names for the x-axis
                    },
                    yaxis: { //Y Axis options
                        labels: {
                            offsetX: -12,
                            offsetY: 0
                        },
                        tooltip: {
                            enabled: true
                        },
                        decimalsInFloat: 2
                    },
                    grid: { //Grid options
                        padding: {
                            left: -5,
                            right: 5
                        }
                    },
                    legend: { //Positioning the legend
                        position: 'top',
                        horizontalAlign: 'left'
                    },
                    fill: { //Filling the background of the graph
                        type: "solid",
                        opacity: 0.8
                    }
                };

                var chart = new ApexCharts(document.querySelector("#broad_money_growth_chart"), options); //Creating a new instance of apex charts with the options.

                chart.render(); //Rendering the chart.

                function getCountryData(where) { //Getting an array of country data at the specific index

                    var returner = [] //Defining final array

                    for (const [index, [key, value]] of Object.entries(Object.entries(results.data[where]))) { //For loop which goes through each array of values in the JSON Object
                        if (key.includes("Sum")) { //Push the value to the final array if it contains a 'Sum' in the title
                            returner.push(value) //Push the value
                        }
                    }

                    console.log("Return", returner) //Printing the results

                    return returner //Returning the array
                }
            }
        });
    } catch (error) { //Catching any exceptions created during the initilization of the graphs
        console.log("There was an error creating the visualisations: ", error) //Printing the error caught, if there was one
        return //Leaving the function.
    }
}

function getCountryNames() {
    return ['1975', '1976', '1977', '1978', '1979', '1980', '2015', '2016', '2017', '2018']; //Returning a array of country names
}