(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('mainCtrl', ['$http', mainCtrl]);
  function mainCtrl($http) {
    var vm = this;
    vm.series = undefined;

    $http.get('data/photo-data.json')
      .success(function(data) { vm.series = data; })
      .error(function (error) { console.error('error'); });
  }

})();
