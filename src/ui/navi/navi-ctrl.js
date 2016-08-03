(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('naviCtrl', ['$window', naviCtrl]);

  function naviCtrl($window) {
    function fixingNavi() {
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
    fixingNavi();
  }

})();
