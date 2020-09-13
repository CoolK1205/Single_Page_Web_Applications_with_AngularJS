(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'menu.html',
            scope: {
                foundItems: '<',
                onEmpty: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };
        
          return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var menu = this;
        
        menu.query = '';

        menu.matchedMenuItems = function(searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

            promise.then(function(items) {
                if (items && items.length > 0) {
                    menu.message = '';
                    menu.found = items;
                } else {
                    menu.message = 'Nothing found!';
                    menu.found = [];
                }
            });
        };

        menu.removeMenuItem = function(itemIndex) {
            menu.found.splice(itemIndex, 1);
        }

    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http){
        var service = this;

        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                method: "GET",
                url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
            }).then(function(result){
                var foundItems = [];
                for (var i = 0; i < result.data['menu_items'].length; i++) {
                    if (searchTerm.length > 0 && result.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
                        foundItems.push(result.data['menu_items'][i]);
                    }
                }
                return foundItems;
            });
        };
    }
}())