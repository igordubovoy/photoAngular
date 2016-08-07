(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('seriesCtrl', ['$stateParams', 'myResource', seriesCtrl]);
  function seriesCtrl($routeParams, myResource) {
    var vm = this;
    vm.resource = myResource;
    vm.seriaTitle = $routeParams.title;
    vm.resource.query({ resource: 'series' }, function (data) {
      angular.forEach(data, function(elem) {
        if (vm.seriaTitle === elem.title) {
          vm.seria = elem;
        }
      });
    });
  }

})();
