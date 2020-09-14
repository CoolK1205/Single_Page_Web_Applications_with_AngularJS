(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuList/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuList/templates/categories.template.html',
    controller: 'categoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/categories/{categoryShortName}',
    templateUrl: 'src/shoppinglist/templates/items.template.html',
    controller: 'itemsController as itemsCtrl',
    params: {
      categoryShortName: null,
      categoryName: null
    },
    resolve: {
      item: ['$stateParams', 'ShoppingListService',
            function ($stateParams, ShoppingListService) {
              return ShoppingListService.getItems()
                .then(function (items) {
                  return items[$stateParams.itemId];
                });
            }]
    }
  });
}

})();
