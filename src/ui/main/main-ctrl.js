(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('mainCtrl', ['myResource', mainCtrl]);
  function mainCtrl(myResource) {
    var vm = this;
    vm.series = myResource.query();
  }

})();
