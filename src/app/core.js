(function() {
  'use sctrict';

  angular
    .module('myApp', ['ngRoute']);

  angular
    .module('myApp')
    .controller('coreCtrl', ['$route', '$http', coreCtrl]);

  function coreCtrl($route, $http) {
    var vm = this;

    vm.headerNav = [
                      {
                        name: 'ГЛАВНАЯ',
                        type: '/main'
                      },
                      {
                        name: 'УСЛУГИ',
                        type: '/services'
                      },
                      {
                        name: 'КОНТАКТЫ',
                        type: '/contacts'
                      }
                   ];
  }

})();
