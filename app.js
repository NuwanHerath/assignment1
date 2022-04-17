(function () {
    'use strict';

    angular.module('lunchApp', [])
    .controller('msgController', msgController);

    msgController.$inject = ['$scope'];
    function msgController($scope) {

        $scope.checkIfTooMuch = function () {
            var lunchMenuItems = $scope.lunchMenu;
            var splittedLunchMenu = lunchMenuItems.split(',');
            console.log(splittedLunchMenu);
            console.log(splittedLunchMenu.length);
            var removeEmptyString = splittedLunchMenu.filter(function (splittedLunchMenu) {
                return splittedLunchMenu != '';
            });
            console.log('empty', removeEmptyString);
            var MenuLength = ''; 
            if (removeEmptyString.length <= 3) {
                console.log('Enjoy!');
                MenuLength = 'Enjoy!';
            } else if (removeEmptyString.length >= 4) {
                console.log('Too much!');
                MenuLength = 'Too much!';
            }
            $scope.sayMassage = MenuLength;
        } 
    }
})();