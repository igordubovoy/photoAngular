(function () {
  'use sctrict';

  angular
    .module('myApp')
    .factory('myResource', ['$resource', 'language', myResource]);

  function myResource($resource, language) {
    return $resource('data/'+ language +'/:resource.:format', { format: 'json' });
  }

})();
