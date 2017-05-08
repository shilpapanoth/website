(function () {
  'use strict';

  angular
    .module('cwApp')
    .controller('appListControler', appListControler);

  appListControler.$inject = ['$scope', '$rootScope', '$anchorScroll', '$location','$http'];

  function appListControler ($scope, $rootScope, $anchorScroll, $location, $http) {

    getAppData();
    $rootScope.contactNav="";
    $scope.selectedCategoryIndex = 0;

    $scope.selectCategory = selectCategory;
    $scope.gotoBottom = gotoBottom;

    function gotoBottom () {
      $location.hash('appCategory');
      $anchorScroll();
    }

    function selectCategory (index) {
      $scope.selectedCategoryIndex = index;
      $scope.selectedCategoryData = $rootScope.appData[index];
      // console.log($scope.selectedCategoryData);
    }

    function getAppData(){
      $http({
        method: 'GET',
        url: '/json/app-data.json'
      }).then(function(data){
        $rootScope.appData = data.data.appData;
        $scope.selectedCategoryData = $rootScope.appData[0];
      },function(error) {

      });
    }
  }

}) ()
