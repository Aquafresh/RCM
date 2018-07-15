$(document).ready(function(){


	$('.mainHeaderNavMobile').on('click', function(){
		$('.mainHeaderNav').toggleClass('mobileMenuShow')
	})




	$('.js-select').select2({
		placeholder: 'Select',
		minimumResultsForSearch: -1,
		allowClear: true
	});


})