var array=[
	{
		question:"Inside which HTML element do we put the JavaScript?",
		optionOne:"<js>",
		optionTwo:"<link>",
		optionThree:"<script>",
		optionFour:"<javaScript>",
	},
	{
		question:"Where is the correct place to insert a JavaScript?",
		optionOne:"The <head> section",
		optionTwo:"Both the <head> section and the <body> section are correct",
		optionThree:"The <body> section",
		optionFour:"",
	},
	{
		question:"What is the correct syntax for referring to an external script called \"xxx.js\"?",
		optionOne:"<script src = \"xxx.js\">",
		optionTwo:"<script href = \"xxx.js\">",
		optionThree:"<script name = \"xxx.js\">",
		optionFour:"",
	},
	{
		question:"The external JavaScript file must contain the <script> tag.",
		optionOne:"False",
		optionTwo:"True",
		optionThree:"",
		optionFour:"",
	},
	{
		question:"How do you write \"Hello World\" in an alert box?",
		optionOne:"alert(\"Hello World\")",
		optionTwo:"console.log(\"Hello World\")",
		optionThree:"push(\"Hello World\")",
		optionFour:"display(\"Hello World\")",
	}
];

var content = document.querySelector("#content");
var questionNumber = document.querySelector("#question-number");
var h3 = document.querySelector("h3");
var one = document.querySelector("#q1");
var two = document.querySelector("#q2");
var three = document.querySelector("#q3");
var four = document.querySelector("#q4"); 
var inputs = document.querySelectorAll("#options input");
var number = 1;
var btn = document.querySelector("button");
var cond = true;
var count = 0;

	btn.addEventListener("click", function(){
	if(ifChecked()){
		scoreKeeper();		
		if(number < 5){
		nextQuestion();
		unCheck();
		}
		else if(number === 5){
		content.innerHTML = "<h1>And your score is :</h1><h2>" + count + "</h2>";
		}
	}else{
			alert("Select an option first!");
	}
	
});


function nextQuestion(){
		h3.textContent = array[number].question;
		one.textContent = array[number].optionOne;
		two.textContent = array[number].optionTwo;
		three.textContent = array[number].optionThree;
		if(three.textContent === "")three.parentElement.style.display="none";
		else{
			three.parentElement.style.display="block";
		}
		four.textContent = array[number].optionFour;
		if(four.textContent === "")four.parentElement.style.display="none";
		else{
			four.parentElement.style.display="block";
		}
		number++;
		questionNumber.textContent = number;
}

function unCheck(){
	for(var i = 0 ; i < 4 ; i++){
		inputs[i].checked = false;
		}
}

function ifChecked(){
	for(var i = 0 ; i < 4 ; i++)
	{
		if(inputs[i].checked) return true;
	}

	return false;
}

function scoreKeeper(){
	if(three.textContent == "<\"script>" && inputs[2].checked == true){
			count++;
			}
		if(three.textContent == "The <body> section" && inputs[1].checked == true){
			count++;
		}
		if(one.textContent == "<script src = \"xxx.js\">" && inputs[0].checked == true){
			count++;
		}
		if(one.textContent == "False" && inputs[0].checked == true){
			count++;
		}
		if(one.textContent == "alert(\"Hello World\")" && inputs[0].checked == true){
			count++;
		}
}