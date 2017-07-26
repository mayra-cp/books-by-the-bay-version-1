var answers = [];

$(document).ready(function() {

	$('.select-button').on('click', function() {
		$('.dropdown-content').toggle()
	});

	$('.arrow').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#question-one').offset().top
		}, 1000);
	})

	$('.options').on('click', function() {
		$(this).parents('.question').hide();

		answers.push($(this).text());

		if ( $(this).parents('.question').is('#question-three') === true) {

			if (answers[0] === "New" && answers[1] === "Modern" && answers[2] === "Leisure") {
				$('.bookstore-one').show()//show recommendation Chronicle Books//
			}

			else if (answers[0] === "Mix" && answers[1] === "Old" && answers[2] === "Learning") {
				$('.bookstore-two').show()//show recommendation City Lights//
			}

			else if (answers[0] === "Mix" && answers[1] === "Old" && answers[2] === "Leisure") {
				$('.bookstore-three').show()//show recommendation Russian Hill Bookstore//
			}

			else if (answers[0] === "New" && answers[1] === "Old" && answers[2] === "Leisure") {
				$('.bookstore-four').show()//show recommendation Books Inc.//
			}

			else if (answers[0] === "Mix" && answers[1] === "Modern" && answers[2] === "Learning") {
			$('.bookstore-five').show()//show recommendation Booksmith//
			}

			else if (answers[0] === "New" && answers[1] === "Old" && answers[2] === "Learning") {
				$('.bookstore-six').show()//show recommendation The Green Arcade//
			}

			else if (answers[0] === "Mix" && answers[1] === "Modern" && answers[2] === "Leisure") {
				$('.bookstore-seven').show()//show recommendation Dog Eared Books//
			}

			else if (answers[0] === "New" && answers[1] === "Modern" && answers[2] === "Learning") {
				$('.bookstore-eight').show()//show recommendation Owl Cave Books//
			}

			$('.question-set').css('display', 'none');
		}

		else {
			$(this).parents('.question').next().show();

		}	
	});
});
