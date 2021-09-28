function getHistory(){
    return document.getElementById("history value").innerText;
}
/*alert(getHistory());*/

function printHistory(num){
    document.getElementById("history value").innerText=num;
}
/*printHistory("9*9");*/

function getOutput(){
    return document.getElementById("output value").innerText;
}

function printOutput(num){
/*This if else condn is for the use if the value is empty then the screen should not show any number before user typing any  no. */
/*(else condn):- As user types number it would add commas depending on how large the number is*/
    if(num==""){
        document.getElementById("output value").innerText=num;
    }
    else{
        document.getElementById("output value").innerText=getFormattedNumber(num);
    }
}
/*getFormattedNumber(num) function is used to get commas in numbers as it increases for ex 7,876,765 */
function getFormattedNumber(num){
    var n = Number(num);
	var value = n.toLocaleString("en");/*this method returns the language sensitive representation of the number or date and "en" stands for english */
	return value;
}
//printOutput("763544977"); //Just to Check
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}  
//alert(reverseNumberFormat(getOutput())); //Just to Check

//NOW WORKING WITH OPERATORS :- 

var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="All Clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="Delete"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}

//NOW WORKING WITH NUMBERS :- 

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
//bxhagsdvhksdb