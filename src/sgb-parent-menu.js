'use strict';

angular.module('sgb-parent-menu', ['megazord'])
    .controller('sgb-parent-menu-controller', ['$scope', '$rootScope', '$ionicLoading', '$translate', '_router', '_screenParams','$injector','$http',
        function ($scope, $rootScope, $ionicLoading, $translate, _router, _screenParams, $injector, $http) {

        $rootScope.$on('_dataLoadStarted', function () {
            console.log('Should start spinner.');
            $ionicLoading.show({
                template: '<i class="icon ion-loading-b"></i><div>{{ "loading" | translate }}</div>'
            });
        });

        $rootScope.$on('_dataLoadFinished', function () {
            console.log('Should stop spinner.');
            $ionicLoading.hide();
        });

        $scope.menu = _screenParams.menu?_screenParams.menu:{};
        $scope.navBarTitle = _screenParams.title?_screenParams.title:'default_menu_title';
        $scope.navBarColor = _screenParams.barColor?_screenParams.barColor:'defaultBarColor';
        $scope.navBarSide = _screenParams.side?_screenParams.side:'right';
        $scope.navBarHeaderColor = _screenParams.headerColor?_screenParams.headerColor:'defaultHeaderColor';
        $scope.backViews = _screenParams.backview?_screenParams.backview:'true';
        $scope.gotoScreen = function(screen, url){
            if (url) {
                var loader; 
                if ($injector.has('$appLoader')) loader = $injector.get('$appLoader');
                if (loader) loader.show(); 
                $http.get(url)
                    .then(function(result) {
                        if (loader) loader.hide(); 
                        _router.goToState(screen, result.data);
                    }).catch(function(result) {
                        if (loader) loader.hide(); 
                    })
            } else {
                _router.goToState(screen);
            }
        };
    }]);