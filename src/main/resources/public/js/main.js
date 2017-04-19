var ngApp = angular.module('angularDemo', ["ngAnimate"])
    .controller("AppCtrl", function ($scope, $log) {

        $scope.isHidden = false;

        $scope.fadeOut = function () {

            $scope.isHidden = !$scope.isHidden;

            $log.info($scope.isHidden);

        }

    })
    .directive("hideMe", function ($animate) {
        return function (scope, element, attrs) {
            scope.$watch(attrs.hideMe, function (value) {
                if(value)
                    $animate.addClass(element, "fade123");
                    // $(element).fadeOut();
                else
                    $animate.removeClass(element, "fade123");

                // $(element).fadeIn();

            })
        }
    })
    .animation(".fade123", function () {
        return {
            addClass: function (element, className) {
                $(element).fadeOut();
            },
            removeClass: function (element, className) {
                $(element).fadeIn();
            }
        }
    });

