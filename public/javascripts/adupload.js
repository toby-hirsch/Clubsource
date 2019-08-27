let preview = $('#preview');

let currimg;

const imgchange = (e) => {
	
	const img = e.target.files[0];
	const options = {
		maxSizeMB: 0.1,
		maxWidthOrHeight: 1000
	}
	console.log(`originalFile size ${img.size / 1024 / 1024} MB`);
	imageCompression(img, options)
		.then(compressed => {
			let reader = new FileReader();
			reader.onload = function (e) {
				console.log(e.target.result);
				$('#preview')
					.attr('src', e.target.result)
					.width(300)
			};
			reader.readAsDataURL(compressed);
			console.log(`compressed size ${compressed.size / 1024 / 1024} MB`);
			currimg = compressed;
			console.log(currimg.size / 1024 / 1024 + ' MB');
		}).catch(err => console.error(err));
}

const linkchange = (url) => {
	$('#previewcontainer').attr('href', url);
}

$('#adform').submit(e => {
	e.preventDefault();
	console.log(currimg.size / 1024 / 1024 + ' MB');
	imageCompression.getDataUrlFromFile(currimg)
		.then(imgdata => {
			console.log(imgdata);
			const data = {
				img: imgdata,
				url: $('#urlinput').val(),
				name: $('#nameinput').val()
			}
			$.ajax({
				url: '/myclub/ads/upload',
				type: 'POST',
				data: JSON.stringify(data),
				success: res => {
					console.log(res.img);
					$('body').empty();
					$('body').append($('<img>').attr('src', res.prefix + ',' + res.img));
				},
				dataType: 'json',
				contentType: 'application/json; charset=utf-8',
				error: err => console.error(err)
				
			});
			/*$.post('/myclub/adupload', JSON.stringify(data), function(res){
				console.log(res);
			}, 'json');*/
		});
	
});