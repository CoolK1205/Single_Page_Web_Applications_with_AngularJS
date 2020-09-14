(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/menuList/templates/items.component.html',
      bindings: {
        items: '<'
      }
    });
    
    })();