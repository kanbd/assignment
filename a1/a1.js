var state=ture;

function do_shift(way){
	
	if(way=='right'&&state){
		state=way;
		var left=document.getElementById('left_box').value;
		var right=document.getElementById('right_box').value;

		if(left.length!=0){
				document.getElementById('left_box').value=left.slice(1);
				document.getElementById('right_box').value=right+left.slice(0,1);
		}	
	}else if(way=='left'&&state){
		state=way;
		var left=document.getElementById('left_box').value;
		var right=document.getElementById('right_box').value;
		if(right.length!=0{
			document.getElementById('right_box').value=right.slice(0,right.length-1);
			document.getElementById('left_box').value=right.slice(right.length-1)+left;
		}
	}
	setTimeout(do_shift(),1000);
}


function stop(){

	state=~state;
	
}
