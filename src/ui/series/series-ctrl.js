(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('seriesCtrl', ['$routeParams', 'myResource', seriesCtrl]);
  function seriesCtrl($routeParams, myResource) {
    var vm = this;
    vm.resource = myResource;
    vm.seriaTitle = $routeParams.name;
    vm.resource.query({ resource: 'series' }, function (data) {
      angular.forEach(data, function(elem) {
        if (vm.seriaTitle === elem.title) {
          vm.seria = elem;
        }
      });
    });
    vm.resource.query({ resource: 'signature' }, function(data){
			vm.signature = data[0].signature;
    });

    function init () {
      setTimeout(function() {
        document.querySelector('.session').classList.add('show');
      }, 200);
    }
    init();
  }


})();
