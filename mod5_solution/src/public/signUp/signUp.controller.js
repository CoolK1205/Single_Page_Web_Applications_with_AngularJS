(function() {
    'use strict';
    var signupController = function(MenuService) {
        var reg = this;

        reg.user = {};
        reg.favoriteDish = {};

        reg.showError = false; 
        reg.showMessage = false;

        reg.signup = function(form) {
            reg.showError = false;
            reg.showMessage = false;
            // If the form is not valid don't submit
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish(reg.user.favoriteDish).then(function(response) {
                reg.user.favoriteDishDetails = response.data;
                console.log(reg.favoriteDish);
                MenuService.saveUser(reg.user);
                reg.showMessage = true;
            }, function(error) {
                console.log(error);
                reg.showError = true;
            });

        }
    };
    
    signupController.$inject = ['MenuService'];
    angular.module('public').controller('signupController', signupController);
})();