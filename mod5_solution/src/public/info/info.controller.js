(function() {
    'use strict';

    var infoController = function(MenuService, ApiPath) {
        var info = this;
        info.apiPath = ApiPath;

        info.signedUp = false;

        info.user = MenuService.getUser();
        console.log('User is', info.user);
        if (angular.equals(info.user, {})) {
            info.signedUp = false;
        } else {
            info.signedUp = true;
        }
    };

    infoController.$inject = ['MenuService', 'ApiPath'];
    angular.module('public').controller('InfoController', infoController);
})();