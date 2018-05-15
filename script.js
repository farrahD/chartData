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
            $scope.myChartObject.type = "ColumnChart";
            $scope.myChartObject.displayed = false;
            $scope.myChartObject.data = {
            "cols": [
                { id: "month-year", label: "MonthYear", type: "string" },
                { id: "abq-id", label: "ABQ", type: "number" }, 
                { id: "chs-id", label: "CHS", type: "number" }
                ],
             "rows": [
                { c: [
                    { v: "Jan 2010" },
                    { v: 110.57, f: "Mean: $110.57 Std-dev: $129.41" },
                    { v: 7.19 , f: "Mean: $7.19 Std-dev: $7.19" }
                ]},
                { c: [
                    { v: "Feb 2010" },
                    { v: 10.18, f: "Mean: $10.18 Std-dev: $14.39" },
                    { v: null, }
                ]},
                { c: [
                    { v: "Mar 2010" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Apr 2010" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 50.22, f: "Mean: $50.22 Std-dev: $71.01" }
                ]},
                { c: [
                    { v: "May 2010" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Jun 2010" },
                    { v: 53.45, f: "Mean: $53.45 Std-dev: $92.58" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Jul 2010" },
                    { v: 6.57, f: "Mean: $6.57 Std-dev: $14.69" },
                    { v: null }
                ]},
                { c: [
                    { v: "Aug 2010" },
                    { v: 90.00, f: "Mean: $90.00 Std-dev: $127.28" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Sep 2010" },
                    { v: 188.75, f: "Mean: $188.75 Std-dev: $338.68" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Oct 2010" },
                    { v: 70.88, f: "Mean: $70.88 Std-dev: $96.00" },
                    { v: 5.30, f: "Mean: $5.30 Std-dev: $9.18" }
                ]},
                { c: [
                    { v: "Nov 2010" },
                    { v: 114.00, f: "Mean: $114.00 Std-dev: $114.00" },
                    { v: 8.29, f: "Mean: $8.29 Std-dev: $21.94" }
                ]},
                { c: [
                    { v: "Dec 2010" },
                    { v: 80.93, f: "Mean: $80.93 Std-dev: $110.00" },
                    { v: 263.25, f: "Mean: $263.25 Std-dev: $372.29" }
                ]},
                { c: [
                    { v: "Jan 2011" },
                    { v: 1.59, f: "Mean: $1.59 Std-dev: $3.19" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Feb 2011" },
                    { v: 10.95, f: "Mean: $10.95 Std-dev: 10.95" },
                    { v: null }
                ]},
                { c: [
                    { v: "Mar 2011" },
                    { v: 28.88, f: "Mean: $28.88 Std-dev: $57.75" },
                    { v: 6.75, f: "Mean: $6.75 Std-dev: $19.09" }
                ]},
                { c: [
                    { v: "Apr 2011" },
                    { v: 267.42, f: "Mean: $267.42 Std-dev: $328.92" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "May 2011" },
                    { v: 44.64, f: "Mean: $44.64 Std-dev: $67.19" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Jun 2011" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 22.67, f: "Mean: $22.67 Std-dev: $32.58" }
                ]},
                { c: [
                    { v: "Jul 2011" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 15.99, f: "Mean: $15.99 Std-dev: $31.98" }
                ]},
                { c: [
                    { v: "Aug 2011" },
                    { v: 30.00, f: "Mean: $30.00 Std-dev: $44.91" },
                    { v: 34.50, f: "Mean: $34.50 Std-dev: $48.79" }
                ]},
                { c: [
                    { v: "Sep 2011" },
                    { v: 62.90, f: "Mean: $62.90 Std-dev: $109.34" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Oct 2011" },
                    { v: 42.15, f: "Mean: $42.15 Std-dev: $63.99" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Nov 2011" },
                    { v: 42.40, f: "Mean: $42.40 Std-dev: $59.96" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Dec 2011" },
                    { v: 62.61, f: "Mean: $62.61 Std-dev: $128.82" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Jan 2012" },
                    { v: null },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Feb 2012" },
                    { v: 17.06, f: "Mean: $17.06 Std-dev: $22.59" },
                    { v: 95.00, f: "Mean: $95.00 Std-dev: $134.35" }
                ]},
                { c: [
                    { v: "Mar 2012" },
                    { v: 30.67, f: "Mean: $30.67 Std-dev: $39.32" },
                    { v: null }
                ]},
                { c: [
                    { v: "Apr 2012" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: null }
                ]},
                { c: [
                    { v: "May 2012" },
                    { v: 31.57, f: "Mean: $31.57 Std-dev: $44.64" },
                    { v: 250.00, f: "Mean: $250.00 Std-dev: $353.55" }
                ]},
                { c: [
                    { v: "Jun 2012" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: null }
                ]},
                { c: [
                    { v: "Jul 2012" },
                    { v: 3.33, f: "Mean: $3.33 Std-dev: $5.77" },
                    { v: 47.99, f: "Mean: $47.99 Std-dev: $67.86" }
                ]},
                { c: [
                    { v: "Aug 2012" },
                    { v: 1340.32, f: "Mean: $1,340.32 Std-dev: $1,340.32" },
                    { v: 4.16, f: "Mean: $4.16 Std-dev: $9.31" }
                ]},
                { c: [
                    { v: "Sep 2012" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 265.32, f: "Mean: $265.32 Std-dev: $313.76" }
                ]},
                { c: [
                    { v: "Oct 2012" },
                    { v: 62.86, f: "Mean: $62.86 Std-dev: $101.50" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Nov 2012" },
                    { v: 24.01, f: "Mean: $24.01 Std-dev: $48.01" },
                    { v: 150.00, f: "Mean: $150.00 Std-dev: $150.00" }
                ]},
                { c: [
                    { v: "Dec 2012" },
                    { v: 31.25, f: "Mean: $31.25 Std-dev: $62.50" },
                    { v: 250.00, f: "Mean: $250.00 Std-dev: $353.55" }
                ]},
                { c: [
                    { v: "Jan 2013" },
                    { v: 7.62, f: "Mean: $7.62 Std-dev: $6.91" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Feb 2013" },
                    { v: 62.50, f: "Mean: $62.50 Std-dev: $88.39" },
                    { v: null }
                ]},
                { c: [
                    { v: "Mar 2013" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Apr 2013" },
                    { v: 173.40, f: "Mean: $173.40 Std-dev: $254.04" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "May 2013" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" },
                    { v: 47.70, f: "Mean: $47.70 Std-dev: $67.45" }
                ]},
                { c: [
                    { v: "Jun 2013" },
                    { v: 30.00, f: "Mean: $30.00 Std-dev: $51.96" },
                    { v: null }
                ]},
                { c: [
                    { v: "Jul 2013" },
                    { v: 16.67, f: "Mean: $16.67 Std-dev: $20.87" },
                    { v: 3.33, f: "Mean: $3.33 Std-dev: $5.77" }
                ]},
                { c: [
                    { v: "Aug 2013" },
                    { v: 61.87, f: "Mean: $61.87 Std-dev: $123.74" },
                    { v: null }
                ]},
                { c: [
                    { v: "Sep 2013" },
                    { v: null },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Oct 2013" },
                    { v: 50.00, f: "Mean: $50.00 Std-dev: $50.00" },
                    { v: 0.00, f: "Mean: $0.00 Std-dev: $0.00" }
                ]},
                { c: [
                    { v: "Nov 2013" },
                    { v: null },
                    { v: null }
                ]},
                { c: [
                    { v: "Dec 2013" },
                    { v: null },
                    { v: null }
                ]
            }]
        };
        $scope.myChartObject.options = {
            "colors": ['#00e6e6', '#009999'],
            "defaultColors": ['#00e6e6', '#009999'],
            "displayExactValues": true,
                "vAxis": {  
                    "title": "Value",
                    "format": "$#,##0",
                    "gridlines": {
                        "count": 8
                    }
                },
                "hAxis": {
                    "title": "Incident Date"
                }   
            };
            $scope.myChartObject.formatters = {
                number: [{
                    columnNum: 1,
                    pattern: "$#,##0.00"
                }]
            };
            $scope.myChartObject.view = {
                columns: [0, 1, 2]
            };
        }
    }
})();