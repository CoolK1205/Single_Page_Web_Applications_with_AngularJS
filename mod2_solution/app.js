(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsToBuy();
  
    list.bought = function (index){
      ShoppingListCheckOffService.bought(index)
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsAlreadyBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [{name: "cookies", quantity: 10}, {name: "bags of chips", quantity: 2}, {name: "soda can", quantity: 1}, {name: "breadsticks", quantity: 3}, {name: "bananas", quantity: 7}, {name: "sticks of butter", quantity: 4}];
    var bought = [];

    service.bought = function (index) {
      var temp = toBuy[index];
      toBuy.splice(index, 1);
      bought.push(temp);
    };

    service.getItemsToBuy = function () {
      return toBuy;
    };
    service.getItemsAlreadyBought = function () {
      return bought;
    };
  }
})();
