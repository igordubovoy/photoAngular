(function() {
  'use sctrict';

  angular
    .module('myApp')
    .directive('social', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/ui/social/social.html'
    };
  });

})();
