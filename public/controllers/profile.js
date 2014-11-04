(function() {
    angular.module('profile', [])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider    
                .when('/profile', {
                    templateUrl: '/views/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'profile'
                }) 
                .when('/connect/local', {
                    templateUrl: '/views/connect-local.html',
                    controller: 'SecondarySignupController',
                    controllerAs: 'profile'
                });

            $locationProvider.html5Mode(true);
        }])
        .controller('ProfileController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
            //Custom Profile functionality
            $http.get('/api/userData')
                .success(function(data) {
                    $scope.user = data; //Expose the user data to your angular scope
                });
        }])
        .controller('SecondarySignupController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
            //Custom Link Page functionality
            $http.get('/api/userData')
                .success(function(data) {
                    $scope.user = data; //Expose the user data to your angular scope
                });
        }]);
})();