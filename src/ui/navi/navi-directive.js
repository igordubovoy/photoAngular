(function() {
  'use sctrict';

  angular
    .module('myApp')
    .directive('navi', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/ui/navi/navi.html'
    };
  });

})();
