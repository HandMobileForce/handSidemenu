/**
 * Created by hq on 2016年8月6日14:38:44
 */

mainModule.controller('mainCtrl', ['$scope', '$timeout', '$log', 'publicMethod',
  function ($scope, $timeout, $log, publicMethod) {

    $scope.$on('$ionicView.enter', function (e) {
      console.log('mainCtrl.$ionicView.enter');
    });

    $scope.$on("$destroy", function () {
      $log.debug("mainCtrl.destroy");
    });

  }])
  .controller('menuListCtrl', ['publicMethod', '$ionicSlideBoxDelegate', '$scope', '$log',
    function (publicMethod, $ionicSlideBoxDelegate, $scope, $log) {

      $scope.$on('$ionicView.enter', function (e) {
        console.log('menuListCtrl.$ionicView.enter');
      });

      $scope.$on("$destroy", function () {
        $log.debug("menuListCtrl.destroy");
      });

    }]);
