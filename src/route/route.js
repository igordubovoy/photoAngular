(function () {
  'use sctrict';

  angular
    .module('myApp')
    .config(['$routeProvider', routeProvider]);

  function routeProvider($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'src/ui/router/state-main/main-template.html'
      })
      .when('/services', {
        templateUrl: 'src/ui/router/state-services/services-template.html'
      })
      .when('/contacts', {
        templateUrl: 'src/ui/router/state-contacts/contacts-template.html'
      })
      .when('/series', {
        templateUrl: 'src/ui/router/state-series/series-template.html'
      })
      .otherwise({
        redirectTo: '/main'
      });
  }

})();
