'use strict';

angular.module('sgb-parent-menu', ['megazord'])
    .controller('sgb-parent-menu-controller', ['$scope', '$rootScope', '_router', '_screenParams', function ($scope, $rootScope, _router, _screenParams) {

        $rootScope.$on('_dataLoadStarted', function () {
            console.log('Should start spinner.');
        });

        $rootScope.$on('_dataLoadFinished', function () {
            console.log('Should stop spinner.');
        });

        $scope.menu = _screenParams.menu?_screenParams.menu:{};
        $scope.navBarTitle = _screenParams.title?_screenParams.title:'default_menu_title';
        $scope.navBarColor = _screenParams.barColor?_screenParams.barColor:'defaultBarColor';
        $scope.navBarSide = _screenParams.side?_screenParams.side:'right';
        $scope.navBarHeaderColor = _screenParams.headerColor?_screenParams.headerColor:'defaultHeaderColor';
        $scope.backViews = _screenParams.backview?_screenParams.backview:'true';
        $scope.gotoScreen = function(screen){
            _router.goToState(screen);
        };
    }]);