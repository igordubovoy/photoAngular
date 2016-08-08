(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('contactsCtrl', ['myResource', contactsCtrl]);
  function contactsCtrl(myResource) {
    var vm = this;
    vm.resource = myResource;
    vm.resource.query({ resource: 'contacts' }, function (data) {
      vm.content = data[0];
    });
  }

})();
