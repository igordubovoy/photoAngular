(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('seriesCtrl', ['$routeParams', 'myResource', seriesCtrl]);
  function seriesCtrl($routeParams, myResource) {
    var vm = this;
    vm.seriaTitle = $routeParams.title.trim();
    myResource.query({}, function (data) {
      angular.forEach(data, function(elem) {
        if (vm.seriaTitle === elem.title) {
          vm.seria = elem;
          console.log(vm.seria);
        }
      });
    });
  }

})();
