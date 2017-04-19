var ngApp = angular.module('angularDemo', [])
    .controller("AppCtrl", function ($scope) {

        $scope.selectedUser = null;
        $scope.userCopy = null;

       $scope.users = [
           {firstName: 'Mark', lastName: 'Otto', username: '@mdo'},
           {firstName: 'Jacob', lastName: 'Thornton', username: '@fat'},
           {firstName: 'Larry', lastName: 'the Bird', username: '@twitter'}
       ];

       $scope.selectUser = function (user) {
           $scope.selectedUser = user;

           $scope.userCopy = angular.copy(user);
       };

       $scope.saveUser = function (user) {
           $scope.selectedUser.firstName = user.firstName;
           $scope.userCopy = null;
       }

    });


//test directive
ngApp.directive("whoyouare", function () {
    return {
        restrict: "M",
        link: function () {
            alert("Works");
        }
    }
});

