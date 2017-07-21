// Make it rain!

// var selectOne = document.getElementById("select-one");
// var selectTwo = document.getElementById("select-two");
// var selectThree = document.getElementById("select-three");

// $('img').click(function () {
// 		$(this).toggleClass('sampleClass');
// 		console.log('clicked!');
// 	})


$(document).ready(function () {

$('.select-button').on('click', function() {
	$('.dropdown-content').toggle()
} )

$('.options').on('click', function() {
	$(this).parents('.question').hide();

	$(this).parents('.question').next().show();
})

// var lastOption = ('#question-three')

// if (lastOption === ) {
// 	$('.bookstore-set').on('click', function () {
// 		$(this).parents('.question').hide();
// 	});
// }



















	
})

