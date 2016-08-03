(function() {
  'use sctrict';

  angular
    .module('myApp')
    .directive('foot', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/ui/footer/foot.html'
    };
  });

})();
