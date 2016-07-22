// JavaScript Document

var skill = document.getElementById('skill_input');

skill.onkeyup = function(){
	document.getElementById('skill_input').innerHTML = skill.value;
}