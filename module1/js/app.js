(function () {
'use strict;'

if (!String.prototype.trim) {				// create trim() if not natively available
	String.prototype.trim = function () {
    	return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}

angular.module('LCApp',[]).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){
	$scope.options = ''; 
	$scope.message = '';
	$scope.message1= '';
	$scope.focus = function(){					// Removes message if input is in focus
		$scope.showIt = false;
	}
	$scope.customStyle = {};					// Applies font color an box-border style to selection based on options
	$scope.turnGreen = function() {
		this.customStyle.clr = "green";
		this.customStyle.borderClr = "greenBorder";
	}
	$scope.turnRed = function() {
		this.customStyle.clr = "red";
		this.customStyle.borderClr = "redBorder";
	}
	$scope.verify = function(){					// To verify the options submitted
		this.options = this.options.trim();		// Trims leading and trailing whitespaces
		if (this.options == ""){
			this.message1 = 'empty.'
			this.message = 'Please enter data first.';
			this.turnRed();
			this.showIt = true;
			return;
		}

		var choices = this.options.split(',');	// Stores options as an array of choices
		for (var i=0; i< choices.length; i++){	// Deletes any empty options inbetween other options
			choices[i] = choices[i].trim();
			if (choices[i] == ''){
				choices.splice(i,1);
				i--;
			}
		}
		this.options = choices.join();

		if (choices.length<= 3){				// Displays message base on choices
			this.message = 'Enjoy!';
			this.message1 = 'perfect!';

		} else {

			this.message = 'Too much!';
			this.message1 = (choices.length - 3) + ' selection(s)';
		}

		this.turnGreen();
		this.showIt = true;


	}
	
}

})();