(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', DIController);

    DIController.$inject = ['$scope', '$filter'];
    function DIController($scope, $filter) {
        $scope.lunch_items = "";
        $scope.results = "";
        $scope.verify = function (){
            if($scope.lunch_items != ""){
                var amount = $scope.lunch_items.split(",");
                if(amount.length <= 3){
                    $scope.results = "Enjoy!"
                }
                else{
                    $scope.results = "Too Much!"
                };
            }
            else{
                $scope.results = "Please enter data first"
            }
        }
    }
})();