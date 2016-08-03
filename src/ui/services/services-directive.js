(function() {
  'use sctrict';

  angular
    .module('myApp')
    .directive('services', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/ui/services/services.html'
    };
  });

})();
