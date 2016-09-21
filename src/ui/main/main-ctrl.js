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
    myResource.query({ resource: 'signature' }, function(data){
			vm.signature = data[0].signature;
    });

    function init () {
      setTimeout(function() {
        document.querySelector('.gallery').classList.add('show');
      }, 1);
    }
    init();
  }

})();
