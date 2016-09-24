(function() {
'use strict';

  angular
    .module('myBackTop', [])
    .directive('backTop', ['$window', backTop]);

  function backTop($window) {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      template: '<div id="backtop" class="toTop"></div>',
      scope: {
        speed: '@scrollSpeed'
      },
      link: function(scope, element) {

        scope.speed = parseInt(scope.speed, 10) || 300;

        var self = this;

        scope.currentYPosition = function() {
          if (self.pageYOffset) {
            return self.pageYOffset;
          }
          if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
          }
          if (document.body.scrollTop) {
            return document.body.scrollTop;
          }
          return 0;
        };

        scope.smoothScroll = function() {
          var startY = scope.currentYPosition();
          var stopY = 0;
          var distance = stopY > startY ? stopY - startY : startY - stopY;
          if (distance < 100) {
            $window.scrollTo(0, stopY);
            return;
          }
          var speed = Math.round(scope.speed / 100);
					var step;
					if (distance < 4000) {
						step = Math.round(distance / 80);
					} else if (distance > 4000 && distance < 8000) {
						step = Math.round(distance / 120);
					} else if (distance > 8000 && distance < 16000) {
						step = Math.round(distance / 160);
					} else if (distance > 16000 && distance < 24000) {
						step = Math.round(distance / 240);
					} else {
						step = Math.round(distance / 460);
					}
          var leapY = stopY > startY ? startY + step : startY - step;
          var timer = 0;
          if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
              setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
              leapY += step;
              if (leapY > stopY) {
                leapY = stopY;
              }
              timer++;
            }
            return;
          }
          for (var j = startY; j > stopY; j -= step) {
            setTimeout('window.scrollTo(0, '+ leapY + ')', timer * speed);
            leapY -= step;
            if (leapY < stopY) {
              leapY = stopY;
            }
            timer++;
          }
        };

        element.on('click', function() {
          scope.smoothScroll();
          element.removeClass('show');
        });

        window.addEventListener('scroll', function() {
          if (window.pageYOffset > 0) {
            element.addClass('show');
          } else {
            element.removeClass('show');
          }
        });
      }
    };
  }

})();
