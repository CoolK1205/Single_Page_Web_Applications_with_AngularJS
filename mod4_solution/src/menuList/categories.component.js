(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/menuList/templates/categories.component.html',
      bindings: {
        categories: '<'
      }
    });
    
    })();