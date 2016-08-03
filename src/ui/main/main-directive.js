(function() {
  'use sctrict';

  angular
    .module('myApp')
    .directive('main', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/ui/main/main.html'
    };
  });

})();
