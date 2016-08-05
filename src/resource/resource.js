(function () {
  'use sctrict';

  angular
    .module('myApp')
    .factory('myResource', ['$resource', myResource]);

  function myResource($resource) {
    return $resource('data/:resource.:format', {
      resource: 'series',
      format: 'json'
    });
  }

})();
