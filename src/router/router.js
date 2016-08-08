(function () {
  'use sctrict';

  angular
    .module('myApp')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', stateProvider]);

  function stateProvider($stateProvider, $locationProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'src/ui/router-tmpl/state-main/main-template.html'
    })
		.state('services', {
      url: '/services',
      templateUrl: 'src/ui/router-tmpl/state-services/services-template.html'
    })
		.state('contacts', {
      url: '/contacts',
      templateUrl: 'src/ui/router-tmpl/state-contacts/contacts-template.html'
    })
		.state('series', {
      url: '/series/:title',
      templateUrl: 'src/ui/router-tmpl/state-series/series-template.html'
    });

//		$locationProvider.html5Mode({
//			enabled: true,
//			requireBase: false
//		});
  }

})();
