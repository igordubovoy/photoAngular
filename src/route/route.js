(function () {
  'use sctrict';

  angular
    .module('myApp')
    .config(['$routeProvider', '$locationProvider', routeProvider]);

  function routeProvider($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'src/ui/router/state-main/main-template.html'
      })
      .when('/services', {
        templateUrl: 'src/ui/router/state-services/services-template.html'
      })
      .when('/contacts', {
        templateUrl: 'src/ui/router/state-contacts/contacts-template.html'
      })
      .when('/series/:title', {
        templateUrl: 'src/ui/router/state-series/series-template.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
