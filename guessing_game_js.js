$(document).ready(function() {
	var target = Math.ceil(Math.random()*100);
	var isWon = false;
	var past_guesses = [];
	var counter = 5;
	var guess_func = function() {
		var entry = +$('input').val();
		if (isWon == false) {
			if (!(entry<=100) || !(entry>=1)) {
				alert("That is not a valid entry. Please enter a number between 1 and 100.")
				counter += 1
			}
			for (i=0; i<past_guesses.length; i++) {
				if (entry == past_guesses[i]) {
					alert("You've already made that guess! Please enter a different number.")
					counter += 1
					$('ul li:last-child').remove();
				}
				past_guesses.pop()
			}
			if (entry == target) {
				$('#status').css({'color':'white'})
				$('#status').text("Congratulations!")
				$('body').removeClass('body-class');
				$('body').addClass('winning');
				isWon = true;
			}
			else {
				var distance = Math.abs(entry-target);
				var direction = "";
				if (entry > target) {
					direction = "Guess lower!"
				}
				else if (entry < target) {
					direction = "Guess higher!"
				}
				var temp = "";
				if (distance < 5) {
					temp = "You're on fire!"
					$('#status').css({'color':'red'})
				}
				else if (distance < 10) {
					temp = "You're hot."
					$('#status').css({'color':'orange'})
				}
				else if (distance < 15) {
					temp = "You're warm."
					$('#status').css({'color':'yellow'})
				}
				else if (distance < 20) {
					temp = "You're cool."
					$('#status').css({'color':'#0000FF'})
				}
				else if (distance < 25) {
					temp = "You're cold."
					$('#status').css({'color':'#0066FF'})
				}
				else if (25 <= distance) {
					temp = "You're ice cold! Brr!"
					$('#status').css({'color':'#00FFFF'})
				}
				$('#status').text(temp + " " + direction)
				counter -= 1;
				$('#number-guesses').text(counter + " guesses remaining")
				past_guesses.push(entry);
				$('input').val("")
				$('ul').append($('<li>').text(entry + ": " + temp + " " + direction))
			}
			if (counter == 0) {
				$('#status').css({'color':'black'})
				$('#status').text("Game over! The number was " + target + ".")
				isWon = true;
			}
			if (!(entry<=100) || !(entry>=1)) {
				past_guesses.pop();
				$('ul li:last-child').remove();
				$('#status').text("");
			}
		}
	}
	$('#make-guess').click(guess_func);
	$(document).keyup(function(e) {
		if (e.which == 13) {
			guess_func();
		}
	}) 
	$('#play-again').click(function() {
		isWon = false;
		target = Math.ceil(Math.random()*100);
		past_guesses = [];
		counter = 5;
		$('#status').css({'color':'black'})
		$('#status').text("You have started a new game.")
		$('#number-guesses').text("5 guesses remaining")
		$('input').val("")
		$('ul').empty();
		if ($('body').hasClass('winning')) {
			$('body').removeClass('winning')
			$('body').addClass('body-class')
		}
	})
	$('#give-up').click(function() {
		if (isWon == false) {
			$('#status').css({'color':'black'})
			$('#status').text("The number was " + target + ".");
			isWon = true;
		}
	})
})