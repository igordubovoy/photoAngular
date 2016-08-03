(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('servicesCtrl', ['$route', servicesCtrl]);
  function servicesCtrl(photoDataService, $route) {
    this.name = 'valera';
  }

})();
