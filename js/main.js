var answers = [];

$(document).ready(function() {
	

	$('.select-button').on('click', function() {
		$('.dropdown-content').toggle()
	});


	$('.options').on('click', function() {
		$(this).parents('.question').hide();

		answers.push($(this).text());

		if ( $(this).parents('.question').is('#question-three') === true) {

			if (answers[0] === "Old" && answers[1] === "Small" && answers[2] === "Yes") {
				$('.bookstore-seven').show()//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "Old" && answers[1] === "Small" && answers[2] === "No") {
			//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "Old" && answers[1] === "Large" && answers[2] === "No") {
				console.log('City Lights')//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "Old" && answers[1] === "Large" && answers[2] === "Yes") {
				console.log('Russian Hill Bookstore')//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "New" && answers[1] === "Small" && answers[2] === "Yes") {
				console.log('Alley Cat Books')//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "New" && answers[1] === "Small" && answers[2] === "No") {
				console.log('Green Apple Bookstore')//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "New" && answers[1] === "Large" && answers[2] === "No") {
				console.log('Owl Cave Books')//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "New" && answers[1] === "Large" && answers[2] === "Yes") {
				console.log('Borderlands Books')//show recommendation Dog Eared Books//
			}

		}

		else {
			$(this).parents('.question').next().show();

		}

		
	});

});
