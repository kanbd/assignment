var running_l=true;
var running_r=false;

function right_shift(){
	
	running_r=true;
	running_l=false;

	function do_right(){
		var left=document.getElementById('left_box').value;
		var right=document.getElementById('right_box').value;

		if(left.length!=0&&running_r){
			setTimeout(function shift(){
				document.getElementById('left_box').value=left.slice(1);
				document.getElementById('right_box').value=right+left.slice(0,1);
				do_right();
			},1000);
		}	
	}
	do_right();
}

function left_shift(){
	
	running_l=true;
	running_r=false;

	function do_left(){
		var left=document.getElementById('left_box').value;
		var right=document.getElementById('right_box').value;

		if(right.length!=0&&running_l){
			setTimeout(function shift(){
				document.getElementById('right_box').value=right.slice(0,right.length-1);
				document.getElementById('left_box').value=right.slice(right.length-1)+left;
				do_left();
			},1000);
		}
	}
	do_left();
}

function stop(){

	running_l=false;
	running_r=false;
	
}
