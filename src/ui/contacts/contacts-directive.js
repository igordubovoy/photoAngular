(function() {
  'use sctrict';

  angular
    .module('myApp')
    .directive('contacts', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/ui/contacts/contacts.html'
    };
  });

})();
