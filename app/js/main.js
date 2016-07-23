var validation = (function () {

	var init = function () {
		 _setUpListners();
   	};

	var _setUpListners = function () {
		$('form').on('keydown', '.has-error', _removeError);
	};

	var _removeError = function () {
		$(this).removeClass('has-error');
	}; 

	var _createQtip = function (element, position, text) {

		element.qtip({
			content: {
				text: function () {
					return $(this).attr('qtip-content')
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: {
				my: 'left center',
				at: 'right center'
			},
			style: {
				classes: 'qtip-rounded qtip-mystyle',
				tip: {
					height: 10,
					width: 16
				}
			}
		}).trigger('show');
	};

	var _showQtip = function (id) {

		var element = $('#' + id),
			pos = element.attr('qtip-position'),
			text = element.attr('qtip-content');

		_createQtip(element, pos, text);

	};

	var validateForm = function (form) {
	
		var elements = form.find('input, textarea'),
			valid = true;

		$.each(elements, function (index, val){
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position');

			if (val.length === 0) {
				element.addClass('has-error');
				_createQtip(element, pos);
				valid = false;
			}
		});	

		return valid;
	};

	return {
		init: init,
		validateForm: validateForm 
	};	

})();

validation.init();