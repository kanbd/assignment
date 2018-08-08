var status=false;
var way='lol';
function do_shift(){
	
	if(way=='right' && status){
		console.log(way=='right' && status);
		var left=document.getElementById('left_box').value;
		var right=document.getElementById('right_box').value;

		if(left.length!=0){
				document.getElementById('left_box').value=left.slice(1);
				document.getElementById('right_box').value=right+left.slice(0,1);

		}	
	}else if(way=='left'&&status){
		console.log(way=='left' && status);
		var left=document.getElementById('left_box').value;
		var right=document.getElementById('right_box').value;
		if(right.length!=0){
			document.getElementById('right_box').value=right.slice(0,right.length-1);
			document.getElementById('left_box').value=right.slice(right.length-1)+left;
		}
	}
	setTimeout(do_shift,1000);
}
function do_dir(ways){
	status=true;
	way=ways;
}

function stop(){

	status=(!status);
	console.log(status);
	
}
do_shift();
