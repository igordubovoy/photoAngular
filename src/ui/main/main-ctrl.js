(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('mainCtrl', ['myResource', mainCtrl]);
  function mainCtrl(myResource) {
    var vm = this;
    myResource.query({ resource: 'series' }, function(data){
			vm.series = data;
		});
  }

})();
