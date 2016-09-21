(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('footCtrl', ['myResource', footCtrl]);
  function footCtrl(myResource) {
    var vm = this;
    myResource.query({ resource: 'signature' }, function(data){
			vm.signature = data[0].signature;
    });
  }

})();
