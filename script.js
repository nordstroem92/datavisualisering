DataSet.setAggregationType("WEEKENDS");
DataSet.setDateRange({"startDate": new Date("2018-01-30"), "endDate": new Date("2018-3-30")});
DataSet.setGeoAreaFilter({"geoArea": ["DEN", "MIA", "PHL", "LAX"], "checkOrigin": false, "checkDestination": true});

let dataset_1 = new DataSet("https://raw.githubusercontent.com/nordstroem92/datavisualisering/master/Data/flights_2018.csv");
let dataset_2 = new DataSet("https://raw.githubusercontent.com/nordstroem92/datavisualisering/master/Data/flights_2019.csv");
let dataset_3 = new DataSet("https://raw.githubusercontent.com/nordstroem92/datavisualisering/master/Data/flights_2020.csv");

dataset_1.refresh().then(data => visualization1 = new DaVi("#svg_flights_2018", data));
dataset_2.refresh().then(data => visualization2 = new DaVi("#svg_flights_2019", data));
dataset_3.refresh().then(data => visualization3 = new DaVi("#svg_flights_2020", data));