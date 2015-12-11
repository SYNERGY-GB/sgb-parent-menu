'use strict';

angular.module('sgb-parent-menu', ['megazord'])
    .controller('sgb-parent-menu-controller', ['$scope', '$rootScope', '$ionicLoading', '$translate', '_router', '_screenParams', '_screen', function ($scope, $rootScope, $ionicLoading, $translate, _router, _screenParams, _screen) {

        _screen.initialize($scope, _screenParams);
        $scope.params =_screenParams;

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
    
        $scope.gotoScreen = function(screen){
            _router.goToState(screen);
        };
        
        
        if(_screenParams.selItem === true) {
                  
           $scope.menu[0].selection=true;
          $scope.selMenuItem = function(opcion) {
            var i;
            for(i=0;i<$scope.menu.length;i++) {
            if ($scope.menu[i].screen==opcion) {
              $scope.menu[i].selection = true;
            break;
          } 
        }
      };
  
        $scope.unselMenuItem = function(opcion) {
            var i;
            for(i=0;i<$scope.menu.length;i++) {
            if ($scope.menu[i].screen==opcion) {
                $scope.menu[i].selection = false;
            break;
          }
        }
      };
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    $scope.unselMenuItem(fromState.name);
    $scope.selMenuItem(toState.name);
  }); 


};
}]);