var quill = new Quill('#editor', {
	theme: 'snow'
});
var FontAttributor = Quill.import('attributors/class/font');
FontAttributor.whitelist = [
	'open sans', 'montserrat'
];

const posturl = 'publish';

$('#editform').submit(function(){
	//var content = quill.getContents();
	//window.setTimeout(function(){quill.setContents(content.ops);}, 1000);
	//var postdata = {};
	//postdata.description = JSON.stringify(content.ops);
	//console.log(JSON.stringify(quill.getContents().ops));
	//return false;
	$('#dummydescription').val(JSON.stringify(quill.getContents().ops));
	quill.setContents([]);
	/*$.post(posturl, postdata, function(data, status){
		console.log(data);
		quill.setContents(JSON.parse(data.description));
	});*/
	return true;
});