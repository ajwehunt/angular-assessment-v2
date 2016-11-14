angular.module('assessment')
.directive('petsDirective', function() {

  return {
      restrict: 'E',
      scope: {
        pet: '='
      },
      templateUrl: 'views/pet-tmpl.html',
      controller: 'mainCtrl'
  };

});
