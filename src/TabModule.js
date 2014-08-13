$('.selector').delegate('a', 'click', function(e){
	e.preventDefault();
	var $this = $(e.currentTarget);
	$('*[data-type]').addClass('hidden');
	$this.removeClass('hidden');
	var paymentType = $this.attr('data-type-for');
	$('*[data-type=' + paymentType + ']').removeClass('hidden');
	$('*[data-type-for]').removeClass('active')
	$this.addClass('active');
});