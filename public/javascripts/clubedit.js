const toolbar = [
	[{'size': []}],
	['bold', 'italic', 'underline', 'strike'],
	[{'color': []}, {'background': []}],
	[{'list': 'ordered'}, {'list': 'bullet'}],
	[{'script': 'super'}, {'script': 'sub'}],
	['link', 'image', 'video', 'formula'],
	
	
];

$("#username").on({
	keydown: function(e) {
		if (e.which !== 8 && (e.which < 48 || e.which > 90))
		  return false;
	},
	change: function() {
		this.value = this.value.replace(/\s/g, "");
	}
});

//Quill.register('modules/imageResize', ImageResize);

var quill = new Quill('#editor', {
	theme: 'snow',
	placeholder: 'Describe your club...',
	modules: {
		imageResize: {},
		toolbar: toolbar,
		keyboard: {
			bindings: {
				tab: {
					key: 9,
					handler: function () {
						return false;
					}
				}
			}
		},
	}
});

var FontAttributor = Quill.import('attributors/class/font');
FontAttributor.whitelist = [
	'open sans', 'montserrat'
];

var $selectofficers = $('#officers').selectize({
	delimiter: ',',
	create: true,
	labelField: 'name'
});

var $select = $('#selectize').selectize({
	options: [
		{value: 'government/politics', name: 'Government/Politics'},
		{value: 'math', name: 'Math'},
		{value: 'economics', name: 'Economics'} //Add more tags here
	],
	labelField: 'name',
	searchField: ['name'], //Use this to customize searches so that synonyms also appear
	placeholder: 'tags',
	delimiter: ',',
	create: true,
	openOnFocus: false
});

var selectize = $select[0].selectize;
var selectizeofficers = $selectofficers[0].selectize;


const posturl = 'publish';

$('#editform').submit(function(event){
	/*console.log($(this).serialize());
	return false;*/
	$('#dummydescription').val(JSON.stringify(quill.getContents().ops));
	return true;
});


function restoreFormData(data){
	//console.log(data);
	$('#clubname').val(data.name);
	$('#username').val(data.username);
	$('#meetingdates').val(data.meetingdates);
	quill.setContents(JSON.parse(data.description)); //JSON.parse is probably unnecessary
	var tags = data.tags.split(',');
	for (key in tags){
		selectize.addOption({value: tags[key], name: tags[key]});
		selectize.addItem(tags[key]);
	}
	
	var officers = data.officers.split(',');
	//console.log(officers);
	for (key in officers){
		selectizeofficers.addOption({value: officers[key], name: officers[key]});
		selectizeofficers.addItem(officers[key]);
	}
}
