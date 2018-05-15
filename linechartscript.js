'use strict';

angular.module('mainApp', ['ui.bootstrap', 'googlechart'])
    .controller('CollapseDemoCtrl', function ($scope) {
    $scope.isNavCollapsed = true;
});

(function() {
    angular.module('mainApp', ['googlechart', 'ui.bootstrap'])

    .controller('HideSeriesController', HideSeriesController);

    HideSeriesController.$inject = ['$scope'];

    function HideSeriesController($scope) {
        $scope.myChartObject = {};

        $scope.hideSeries = hideSeries;
        
        init();

        function hideSeries(selectedItem) {
            var col = selectedItem.column;
            if (selectedItem.row === null) {
                if ($scope.myChartObject.view.columns[col] == col) {
                    $scope.myChartObject.view.columns[col] = {
                        label: $scope.myChartObject.data.cols[col].label,
                        type: $scope.myChartObject.data.cols[col].type,
                        calc: function() {
                            return null;
                        }
                    };
                    $scope.myChartObject.options.colors[col - 1] = '#CCCCCC';
                }
                else {
                    $scope.myChartObject.view.columns[col] = col;
                    $scope.myChartObject.options.colors[col - 1] = $scope.myChartObject.options.defaultColors[col - 1];
                }
            }
        }

        function init() {
            $scope.myChartObject.type = "LineChart";
            $scope.myChartObject.displayed = false;
            $scope.myChartObject.data = {
            "cols": [
                { id: "month-year", label: "MonthYear", type: "string" }, 
                { id: "air-france-id", label: "Air France", type: "number" }, 
                { id: "hawaiian-id", label: "Hawaiian Airlines", type: "number" }, 
                { id: "quantus-id", label: "Quantus Airways", type: "number" }, 
                { id: "swiss-id", label: "Swiss Air", type: "number" }
                ],
            "rows": [
                { c: [
                    { v: "Jan 2010" },
                    { v: 0.00 }, 
                    { v: 0.00 }, 
                    { v: 0.00 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Feb 2010" },
                    { v: 56.99 },
                    { v: 72.00 },
                    { v: 20.31 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Mar 2010" },
                    { v: null },
                    { v: 510.52 },
                    { v: 25.38 },
                    { v: null }
                ]},
                { c: [
                    { v: "Apr 2010" },
                    { v: 616.61 },
                    { v: 300.30 },
                    { v: 0.00 },
                    { v: 24.99 }
                ]},
                { c: [
                    { v: "May 2010" },
                    { v: 87.09 },
                    { v: 106.50 },
                    { v: 0.00 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Jun 2010" },
                    { v: 0.00 },
                    { v: 1385.78 },
                    { v: 664.06 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Jul 2010" },
                    { v: null },
                    { v: 42.50 },
                    { v: 0.00 },
                    { v: null }
                ]},
                { c: [
                    { v: "Aug 2010" },
                    { v: 45.39 },
                    { v: 437.00 },
                    { v: 0.00 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Sep 2010" },
                    { v: 0.00 },
                    { v: 814.86 },
                    { v: 15.50 },
                    { v: 230.61 }
                ]},
                { c: [
                    { v: "Oct 2010" },
                    { v: 0.00 },
                    { v: 236.46 },
                    { v: null },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Nov 2010" },
                    { v: 58.70 },
                    { v: 941.48 },
                    { v: 0.00 },
                    { v: null }
                ]},
                { c: [
                    { v: "Dec 2010" },
                    { v: 0.00 },
                    { v: 31.75 },
                    { v: 885.62 },
                    { v: 12.00 }
                ]},
                { c: [
                    { v: "Jan 2011" },
                    { v: 23.84 },
                    { v: 126.00 },
                    { v: null },
                    { v: 194.60 }
                ]},
                { c: [
                    { v: "Feb 2011" },
                    { v: 70.00 },
                    { v: 189.05 },
                    { v: 0.00 },
                    { v: 130.00 }
                ]},
                { c: [
                    { v: "Mar 2011" },
                    { v: 155.60 },
                    { v: 1177.37 },
                    { v: 850.00 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Apr 2011" },
                    { v: 0.00 },
                    { v: 1068.43 },
                    { v: 0.00 },
                    { v: 199.99 }
                ]},
                { c: [
                    { v: "May 2011" },
                    { v: 94.84 },
                    { v: 1674.31 },
                    { v: 27.50 },
                    { v: 24.99 }
                ]},
                { c: [
                    { v: "Jun 2011" },
                    { v: 0.00 },
                    { v: 222.16 },
                    { v: 259.50 },
                    { v: null }
                ]},
                { c: [
                    { v: "Jul 2011" },
                    { v: 440.00 },
                    { v: 676.64 },
                    { v: 0.00 },
                    { v: 131.74 }
                ]},
                { c: [
                    { v: "Aug 2011" },
                    { v: 0.00 },
                    { v: 299.32 },
                    { v: null },
                    { v: 21.00 }
                ]},
                { c: [
                    { v: "Sep 2011" },
                    { v: 68.81 },
                    { v: 866.03 },
                    { v: 0.00 },
                    { v: null }
                ]},
                { c: [
                    { v: "Oct 2011" },
                    { v: 0.00 },
                    { v: 810.12 },
                    { v: 0.00 },
                    { v: null }
                ]},
                { c: [
                    { v: "Nov 2011" },
                    { v: 0.00 },
                    { v: 713.71 },
                    { v: 130.01 },
                    { v: null }
                ]},
                { c: [
                    { v: "Dec 2011" },
                    { v: 0.00 },
                    { v: 895.18 },
                    { v: 0.00 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Jan 2012" },
                    { v: 194.00 },
                    { v: 184.66 },
                    { v: 1250.54 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Feb 2012" },
                    { v: 265.55 },
                    { v: 411.57 },
                    { v: 0.00 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Mar 2012" },
                    { v: 0.00 },
                    { v: 302.43 },
                    { v: 5.86 },
                    { v: null }
                ]},
                { c: [
                    { v: "Apr 2012" },
                    { v: 0.00 },
                    { v: 187.57 },
                    { v: 174.50 },
                    { v: 500.00 }
                ]},
                { c: [
                    { v: "May 2012" },
                    { v: 205.25 },
                    { v: 182.17 },
                    { v: 0.00 },
                    { v: null }
                ]},
                { c: [
                    { v: "Jun 2012" },
                    { v: 0.00 },
                    { v: 14.87 },
                    { v: 92.86 },
                    { v: 229.86 }
                ]},
                { c: [
                    { v: "Jul 2012" },
                    { v: 10.95 },
                    { v: 534.11 },
                    { v: null },
                    { v: null }
                ]},
                { c: [
                    { v: "Aug 2012" },
                    { v: 0.00 },
                    { v: 366.83 },
                    { v: null },
                    { v: null }
                ]},
                { c: [
                    { v: "Sep 2012" },
                    { v: 0.00 },
                    { v: 54.14 },
                    { v: 0.00 },
                    { v: 201.00 }
                ]},
                { c: [
                    { v: "Oct 2012" },
                    { v: 224.58 },
                    { v: 2254.58 },
                    { v: 0.00 },
                    { v: null }
                ]},
                { c: [
                    { v: "Nov 2012" },
                    { v: 305.00 },
                    { v: 2130.00 },
                    { v: 2155.90 },
                    { v: 298.38 }
                ]},
                { c: [
                    { v: "Dec 2012" },
                    { v: 748.50 },
                    { v: 12.99 },
                    { v: 137.35 },
                    { v: 402.30 }
                ]},
                { c: [
                    { v: "Jan 2013" },
                    { v: 0.00 },
                    { v: 414.34 },
                    { v: 328.00 },
                    { v: 195.44 }
                ]},
                { c: [
                    { v: "Feb 2013" },
                    { v: 33.14 },
                    { v: 157.99 },
                    { v: 0.00 },
                    { v: 195.44 }
                ]},
                { c: [
                    { v: "Mar 2013" },
                    { v: 454.19 },
                    { v: 1240.74 },
                    { v: 86.40 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "Apr 2013" },
                    { v: 0.00 },
                    { v: 64.95 },
                    { v: 302.00 },
                    { v: 0.00 }
                ]},
                { c: [
                    { v: "May 2013" },
                    { v: 0.00 },
                    { v: 619.83 },
                    { v: 699.00 },
                    { v: null }
                ]},
                { c: [
                    { v: "Jun 2013" },
                    { v: 50.00 },
                    { v: 760.67 },
                    { v: null },
                    { v: 231.50 }
                ]},
                { c: [
                    { v: "Jul 2013" },
                    { v: 173.39 },
                    { v: 422.38 },
                    { v: 0.00 },
                    { v: 150.00 }
                ]},
                { c: [
                    { v: "Aug 2013" },
                    { v: 120.98 },
                    { v: 974.42 },
                    { v: 0.00 },
                    { v: 66.30 }
                ]},
                { c: [
                    { v: "Sep 2013" },
                    { v: 20.99 },
                    { v: 3.85 },
                    { v: null },
                    { v: null }
                ]},
                { c: [
                    { v: "Oct 2013" },
                    { v: null },
                    { v: 20.00 },
                    { v: 92.15 },
                    { v: null }
                ]},
                { c: [
                    { v: "Nov 2013" },
                    { v: 14.89 },
                    { v: 935.36 },
                    { v: null },
                    { v: null }
                ]},
                { c: [
                    { v: "Dec 2013" },
                    { v: 0.00 },
                    { v: null },
                    { v: null },
                    { v: null }
                ]
            }]
        };
        $scope.myChartObject.options = {
            "colors": ['#00e6e6', '#00b3b3', '#009999', '#006666'],
            "defaultColors": ['#00e6e6', '#00b3b3', '#009999', '#006666'],
            "isStacked": "true",
            "displayExactValues": true,
                "vAxis": {
                    "title": "Value",
                    "format": "$#,##0",
                    "gridlines": {
                        "count": 8
                    }
                },
                "hAxis": {
                    "title": "Date Received"
                }
            };
            $scope.myChartObject.formatters = {
                number: [{
                    columnNum: 1,
                    pattern: "$#,##0.00"
                }]
            };
            $scope.myChartObject.view = {
                columns: [0, 1, 2, 3, 4]
            };
        }
    }
})();