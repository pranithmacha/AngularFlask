(function(){

	var macsite = angular.module('macsite', ['ngRoute']);

    macsite.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('//');
        $interpolateProvider.endSymbol('//');
    });

    macsite.config(function($routeProvider){
        $routeProvider
        .when("/blog", {
        	templateUrl: "static/partials/blog.html"
        })
        .when("/", {
        	templateUrl: "static/partials/profile.html"
        })
        .otherwise("/profile", {


        });
    });

	macsite.controller('homeController', function($scope){
		$scope.urls = {
			home: 'home',
			contact: 'contact',
			blog: 'blog',
			techstack: 'techstack'
		};
	});

})();