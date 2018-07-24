var app = angular.module('myApp',['ngRoute']);

app.controller('MonitorCtrl', function($scope,$http,$window){
	$scope.ReportTableVisible = false;

	$scope.loadJobStatus=function(){
		var xurl="http://192.168.154.182:8080/dm-rest-services/api/userdefinedpages/acccrd";
		
		var xheaders = {};
		xheaders["ACCEPT"] = 'application/vnd.fico.dm.v1+json';
		xheaders["CONTENT_TYPE"] = 'application/vnd.fico.dm.v1+json';
		xheaders["Authorization"] = 'Basic cm9vdDpyb290MTIzNEA=';

		var configObj = { method: 'GET',
		                  url: xurl, 
		                  headers: xheaders
		                };
		$http(configObj)
		    .success(function(response) {
		        console.log(response.data);
		    }).error( function(errorResponse) {
		        console.log(errorResponse);
		    });
	};
});

app.config(
function($routeProvider) {
	$routeProvider
	.when('/', {
	      templateUrl: 'Monitoring_screen.jsp',
	      controller : 'MonitorCtrl'
	  })
	  .when('/test', {
	      templateUrl: 'demotry.html',
	      controller : 'MonitorCtrl'
	  });
});