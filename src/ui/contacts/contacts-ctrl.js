(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('contactsCtrl', ['$route', contactsCtrl]);
  function contactsCtrl(photoDataService, $route) {
    var vm = this;
    vm.name = 'valera';
  }

})();
