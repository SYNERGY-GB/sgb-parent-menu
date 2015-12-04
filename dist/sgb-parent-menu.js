(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-parent-menu', ['megazord'])
    .controller('sgb-parent-menu-controller', ['$scope', '_screen','$rootScope', '$ionicLoading', '$translate', '_router', '_screenParams','$injector','$http',
        function ($scope, _screen ,$rootScope, $ionicLoading, $translate, _router, _screenParams, $injector, $http) {

        _screen.initialize($scope, _screenParams); 

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
},{}]},{},[1]);
