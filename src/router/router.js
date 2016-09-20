(function () {
  'use sctrict';

  angular
    .module('myApp')
    .config(['$routeProvider', routeProvider]);

  function routeProvider($routeProvider) {

      $routeProvider
      .when('/', {
        templateUrl: 'src/ui/router-tmpl/state-main/main-template.html'
      })
      .when('/services', {
        templateUrl: 'src/ui/router-tmpl/state-services/services-template.html'
      })
      .when('/contacts', {
        templateUrl: 'src/ui/router-tmpl/state-contacts/contacts-template.html'
      })
      .when('/series/:name*', {
        templateUrl: 'src/ui/router-tmpl/state-series/series-template.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  }

})();
