angular.module('myApp.services', [])
    .factory('githubService', function($http) {
        var githubUrl = 'http://api.github.com';
        var runUserRequest = function(username, path) {
            return $http({
                method: 'JSONP',
                url: githubUrl + '/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
            });
        };
        return {
            events: function(username) {
                return runUserRequest(username, 'events');
            }
        }
    });