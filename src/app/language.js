(function() {
  'use sctrict';
  angular
		.module('myApp')
		.factory('language', language);
	
	function language() {
		var defaultLanguage = 'en',
				currentLanguage = navigator.language.substring(0, 2),
				language = '';
		
		switch(currentLanguage) {
			case 'ru':
			case 'en':
			case 'uk':
				language = currentLanguage;
				break;
			default:
				language = defaultLanguage;
		}
		return language;
	}

})();
