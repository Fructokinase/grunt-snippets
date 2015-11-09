'use strict';

/**
 * @ngdoc function
 * @name lifeAdmin.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the lifeAdmin
 */
angular.module('lifeAdmin')
  .controller('AppCtrl', ["$scope", "$rootScope", "authentication_service", "localStorageService", "$timeout",
  	function ($scope, $rootScope, authentication_service, localStorageService, $timeout) {

  	$scope.credentials = {};
  	$scope.error = {};

  	var setLogInStatus = function (token) {
  		$rootScope.isLoggedIn = true;
  		localStorageService.set("token", token);
      $timeout = (function () {
        localStorageService.remove("token");
        $rootScope.isLoggedIn = false;
        console.log("5 seconds")
      } ,5000, true)
  	}

  	$scope.login= function () {
  		authentication_service.Login($scope.credentials.email, $scope.credentials.password)
  		.then(function (data) {
  			if (data.code && data.code == 200) {
  				setLogInStatus(data.token);
  			} else if (data.code == 401) {
  				$scope.error.invalidCredentials = true;
  			} else {
  				$scope.error.internalServerError = true;
  			}
  		})
      .catch(function (err) {
        $scope.error.serverNotResponding = true;
      })
  	}

    $scope.logout = function () {
      $rootScope.isLoggedIn = false;
    }

  
  }]);
