
/* Variables-----------------------------------------------------------------------*/
var invalidPop = "#invalid";
var slide = { transition: "slideup" };
var answerOne = "#answerPop";

/*initialize function to calculate bmi---------------------------------------------*/
function bmiE(x,y){
	var x;
	var y;
	x = document.getElementById('height');
	y = document.getElementById('weight');
	var xSelect = selector.options[selector.options.selectedIndex].value;
	
	/*Form validation  **Checks to see if fields are empty, or if anything other than numbers is entered
	Returns a pop up if incorrect*/
	
	if(isNaN(x.value && y.value)){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "This entry is not a number!";*/
	}
	if(x.value === "" || x.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
		/*document.getElementById('warning').innerHTML = "Please enter a number!";*/
	}
	if(y.value === "" || y.value === null){
		$.mobile.changePage(invalidPop, slide);
		return false;
	}
	/*End Form validation---------------------------------------------------------*/
	
	/* This checks to see which selection is made and performs correct calculation */
	if(xSelect === "metric"){
		answer = y.value / Math.pow(x.value, 2);
		
	}
	if(xSelect === "metric2"){
		answer = y.value / Math.pow((x.value/100),2);
		
	}
	if(xSelect === "eng"){
		answer = [y.value / Math.pow(x.value, 2)]* 703;
		
	}
	/* End form selection--------------------------------------------------------- */
	
	/*Creates pop up answer window, and displays output */
	$.mobile.changePage(answerOne, slide);
	document.getElementById('answer').innerHTML = Math.round(answer*100)/100;
	/*End------------------------------------------------------------------------- */
	
	/*Checks the output and determines Level of BMI------------------------------  */
	if(answer <= 15.99){
		document.getElementById('answerOut').innerHTML = "Severe Thinness";
		
		return false;
	}
	if(answer >= 16.00 && answer <= 16.99){
		document.getElementById('answerOut').innerHTML = "Moderate Thinness";	
		
		
		return false;		
	}
	if(answer >= 17.00 && answer <= 18.49){
		document.getElementById('answerOut').innerHTML = "Mild Thinness";
		
		
		return false;
	}
	if(answer >= 18.50 && answer <= 24.99){
		document.getElementById('answerOut').innerHTML = "Normal Weight";
			
		return false;
	}
	if(answer >= 25.00 && answer <= 29.99){
		document.getElementById('answerOut').innerHTML = "Overweight";	
		return false;
	}
	if(answer >= 30.00 && answer <= 34.99){
		document.getElementById('answerOut').innerHTML = "Obese Class I";	
		return false;
	}
	if(answer >= 35.00 && answer <= 39.99){
		document.getElementById('answerOut').innerHTML = "Obese Class II";	
		return false;
	}	
	if(answer >= 40.0){
		document.getElementById('answerOut').innerHTML = "Obese Class III";	
		return false;
	}              
	/*End Check----------------------------------------------------------------  */
		
}
/*End bmiE function--------------------------------------------------------------*/
