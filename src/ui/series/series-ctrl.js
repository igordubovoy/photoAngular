(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('seriesCtrl', ['$routeParams', 'myResource', seriesCtrl]);
  function seriesCtrl($routeParams, myResource) {
    var vm = this;
    vm.resource = myResource;
    vm.seriaTitle = $routeParams.title.trim();
    vm.resource.query({}, function (data) {
      angular.forEach(data, function(elem) {
        if (vm.seriaTitle === elem.title) {
          vm.seria = elem;
        }
      });
    });
  }

})();
