let width = window.innerWidth - 140;
let height = window.innerHeight - 100;

function run(){
	let top = Math.random() * height;
	let left = Math.random() * width;

	document.getElementById('theRunButton').style.top = top + 'px';
	document.getElementById('theRunButton').style.left = left + 'px';
}

function correctMessage(){
	alert('eto horoshi otvet ');
}

function badMassage(){
	alert('eto plohoy otvet');
}