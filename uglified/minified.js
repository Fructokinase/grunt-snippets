"use strict";angular.module("lifeAdmin").controller("AppCtrl",["$scope","$rootScope","authentication_service","localStorageService","$timeout",function(a,b,c,d,e){a.credentials={},a.error={};var f=function(a){b.isLoggedIn=!0,d.set("token",a),e=!0};a.login=function(){c.Login(a.credentials.email,a.credentials.password).then(function(b){b.code&&200==b.code?f(b.token):401==b.code?a.error.invalidCredentials=!0:a.error.internalServerError=!0})["catch"](function(b){a.error.serverNotResponding=!0})},a.logout=function(){b.isLoggedIn=!1}}]);