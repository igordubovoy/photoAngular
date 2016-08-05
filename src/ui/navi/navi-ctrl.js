(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('naviCtrl', ['$window', 'myResource', naviCtrl]);

  function naviCtrl($window, myResource) {
    var vm = this;
    myResource.query({resource: 'navigation'}, function (data) {
      vm.headerNav = data;
    });
    function init() {
      var
        headerH = document.querySelector('header').clientHeight,
        menu = document.querySelector('#navigation');
      menu.style.cssText += ' position: fixed; top: ' + headerH + 'px';
      $window.addEventListener('scroll', scrollNav, false);

      function scrollNav() {
        var top = $window.scrollY;
        menu.style.cssText += top <= headerH ? 'top: ' + (headerH - top) + 'px; background-color: transparent' : 'top:0; background-color: white';
      }
    }
    init();
  }

})();
