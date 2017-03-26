function askquestions() {



		var firstName= prompt('what is your first name ?');
		var lastName= prompt('what is your last name ?');
		var fullName= firstName + ' '+ lastName;

		console.log(fullName);

		var age = prompt("how old are you");
		age= parseInt(age);
		if (age>= 18) {
			console.log('User is an adult');}
		else if (age>=14) {
			console.log('user is a teenager')}
			else if (age<= 14){
				console.log('user is a baby');
			}

		if(firstName.toLowerCase=='General' && lastName.toLowerCase!='Assembly'){
			console.log('hello general');}
		var faveColour= prompt ('what is your favourite colour?').toLowerCase().trim();

		if (faveColour==='red' ||
		faveColour==='blue' ||
		faveColour==='yellow' ||
		faveColour==='orange') {
		$('h1').css('color', faveColour);
	}
}

$(function() {
	$('img').on('click', askquestions);});










// // this is how you comment//
// $ (function () {

// 	// when the user clicks on h3
// 	$('h3').on ('click', function(){

// 			// togglw the next element 
// 			$(this).next().slideToggle();

// 	});

// });