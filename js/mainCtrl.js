angular.module('assessment')
.controller('mainCtrl', ($scope, mainService) => {

  $scope.getAllPets = () => {
    mainService.getAllPets().then(res => {
      $scope.pets = res;
    })
  };
  $scope.getAllPets();

})
