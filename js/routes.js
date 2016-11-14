angular.module('assessment')
.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: './views/about.html'
    })

    .state('blog', {
      url: '/blog',
      templateUrl: './views/blog.html'
    })

    .state('pets', {
      url: '/pets',
      templateUrl: './views/pets.html'
    })

    .state('bio', {
      url: '/bio/:id',
      templateUrl: './views/pet-bio.html',
      controller: function($scope, $stateParams, mainService) {
        mainService.getPet($stateParams.id).then(function(res) {
          $scope.pet = res;
        });
      }
    });

  $urlRouterProvider.otherwise('/');

});
