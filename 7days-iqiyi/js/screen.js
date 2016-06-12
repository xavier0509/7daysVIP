/*screen.js*/
function screen(){
	document.getElementById('button').focus();
	var wid=document.body.clientWidth;
	if (wid<1900) {
		// document.getElementById('button').style.width="313px";
		// document.getElementById('button').style.height="134px";
		// document.getElementById('border').style.width="313px";
		// document.getElementById('border').style.height="134px";
		// document.getElementById('border').style.left="37.5%";
		// document.getElementById('button').style.left="37.5%";
		// document.getElementById('border').style.top="62%";
		// document.getElementById('button').style.top="62%";
		document.getElementById('info').style.width="541px";
		document.getElementById('info').style.height="300px";
		document.getElementById('info').style.left="29%";
		document.getElementById('info').style.top="30%";
		// document.getElementById('bgButton').setAttribute('disabled','disabled'); ;
	}
}