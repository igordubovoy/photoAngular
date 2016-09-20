(function() {
  'use sctrict';

  angular
    .module('myApp')
    .controller('servicesCtrl', ['myResource', servicesCtrl]);
  function servicesCtrl(myResource) {
    var vm = this;
    myResource.query({ resource: 'services' }, function (data) {
      angular.forEach(data, function(elem) {
        switch (elem.id) {
          case 'wedding':
            vm.wedding = elem;
            break;
          case 'otherShoot':
            vm.otherShoot = elem;
            break;
        }
      });
    });

    function init () {
      setTimeout(function() {
        document.querySelector('.services').classList.add('show');
      }, 200);
    }
    init();
  }

})();
