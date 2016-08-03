(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('contactsCtrl', ['$route', contactsCtrl]);
  function contactsCtrl(photoDataService, $route) {
    this.name = 'valera';
  }

})();
