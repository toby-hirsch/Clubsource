$('#withdraw').on('click', function(){
	$.post('/myclub/dashboard/withdraw', { email: $('#withdrawinput').val() }, (res) => {
		console.log(res.payout);
	}, 'json');
});