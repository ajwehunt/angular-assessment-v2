angular.module('assessment')
.service('mainService', function($http) {

  this.getAllPets = function (){
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/pets'
    }).then(res => res.data)
  }

  this.getPet = function(id) {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/pets/' + id
    }).then(res => res.data)
  }

})
