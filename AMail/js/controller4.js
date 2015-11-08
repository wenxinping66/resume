angular.module('myApp',[])
    .controller('FormController',function($scope) {
        $scope.fields = [
            {placeholder: 'Username', isRequired: true},
            {placeholder: 'Password', isRequired: true},
            {placeholder: 'Email (optional)', isRequired: false}
        ];
        $scope.submitForm = function() {
            alert("it works!");
        };
    }).controller('CounterController', function($scope) {
        $scope.decrement = function() {
            $scope.count = $scope.count - 1;
        };
    }).controller('CityController',function($scope) {
        $scope.cities = [
            {name: 'Seattle'},
            {name: 'San Francisco'},
            {name: 'Chicago'},
            {name: 'New York'},
            {name: 'Boston'}
        ];
    }).controller('FormController2',function($scope) {
        $scope.person = {
            name: null
        };
        $scope.people = [];
        $scope.submit = function() {
            if ($scope.person.name) {
                $scope.people.push({name: $scope.person.name});
                $scope.person.name = '';
            }
        };
    }).controller('LotteryController', function($scope) {
        $scope.generateNumber = function() {
            return Math.floor((Math.random()*10)+1);
        };
    });