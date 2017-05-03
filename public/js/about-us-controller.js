(function(){

	angular
	.module('cwApp')
	.controller('aboutController',aboutController);
	aboutController.$inject = ['$scope', '$rootScope', '$anchorScroll', '$location'];

	function aboutController ($scope, $rootScope, $anchorScroll, $location){

    $scope.gotoBottom = gotoBottom;

    function gotoBottom () {
      $location.hash('aboutText');
      $anchorScroll();
    }

	}
})()
