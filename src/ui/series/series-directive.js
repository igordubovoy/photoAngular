(function() {
  'use sctrict';

  angular
    .module('myApp')
    .directive('series', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/ui/series/series.html'
    };
  });

})();
