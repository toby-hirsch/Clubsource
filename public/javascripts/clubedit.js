//import imageCompressor from './quill-image-compress';

const toolbar = [
	[{'size': []}],
	['bold', 'italic', 'underline', 'strike'],
	[{'color': []}, {'background': []}],
	[{'list': 'ordered'}, {'list': 'bullet'}],
	[{'script': 'super'}, {'script': 'sub'}],
	['link', 'image', 'video', 'formula'],
	
	
];

const terms = {
	animals: 'Pets dogs cats veterinarian',
	art: 'Music film painting drawing creativity photography',
	business: 'Entrepreneurship marketing finance economics sales operations',
	'community/local': 'Town events greenwich connecticut',
	competition: '',
	culture: 'Awareness language religion food art',
	debate: 'Argument speaking articulate',
	'economics/finance': 'Business stocks money',
	entertainment: 'Film humor music',
	'government/politics': 'civics advocacy activism constitution law',
	health: 'Medicine diseases illnesses mental cure vaccine',
	history: 'World constitution',
	'honor society': '',
	language: 'Spanish german chinese french japanese italian korean',
	leadership: 'Entrepreneurship business groups teamwork',
	math: 'stem mathematics algebra calculus geometry',
	music: 'Instrument band orchestra jazz chorus singing',
	'public speaking': 'Speeches articulate',
	science: 'Biology chemistry physics stem',
	'social advocacy': 'Social justice issues change society community activism',
	sports: 'Athlete athletic exercise fitness outdoors',
	technology: 'Computers stem engineering',
	'volunteering/charity/community service': '',
	writing: 'Argument creativity',
}

$("#username").on({
	keydown: function(e) {
		if (e.which !== 8 && (e.which < 48 || e.which > 90))
		  return false;
	},
	change: function() {
		this.value = this.value.replace(/\s/g, "");
	}
});

$('input').each(function(){
	$(this)[0].oninvalid = function(event, message){
		console.log(event.target);
		if (event.target.validity.valueMissing)
			this.setCustomValidity('This field is required');
		else if (event.target.id = 'username' && event.target.validity.patternMismatch)
			this.setCustomValidity('Use only letters and numbers');
	};
});

//Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageCompress', imageCompressor);

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
		imageCompress: {
			quality: 0.7, // default
			maxWidth: 1000, // default
			imageType: 'image/jpeg', // default
			debug: true, // default
		}
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

let selectoptions = [];

for (let key in terms){
	selectoptions.push({value: key, name: key, searchterms: terms[key]});
}

var $select = $('#selectize').selectize({
	options: selectoptions,
	labelField: 'name',
	searchField: ['name', 'searchterms'],
	placeholder: 'tags',
	delimiter: ',',
	create: true,
	openOnFocus: true
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
