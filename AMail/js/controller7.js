angular.module('myApp', ['myApp.services'])
    .controller('ServiceController', function($scope, $timeout, githubService){
       $scope.events = githubService.events('m172634791');
        var timeout;
        $scope.$watch('username', function(newUserName) {
            if (newUserName) {
// 如果在进度中有一个超时(timeout)
                if (timeout) $timeout.cancel(timeout);
                timeout = $timeout(function() {
                    githubService.events(newUserName)
                        .success(function(data, status) {
                            $scope.events = data.data;
                        });
                }, 350);
            }
        });
    }).controller('ServiceController', function($scope, githubService) {
        $scope.$watch('username', function(newUsername) {
             // 从使用JSONP调用Github API的$http服务中返回promise
            githubService.events(newUsername)
                .success(function(data, status, headers) {
                    // success函数在数据中封装响应
                    // 因此我们需要调用data.data来获取原始数据
                    $scope.events = data.data;
                })
        });
    });