function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
window.onload = function(){
		$('#onload').modal('show');
	
    var min = 0;
    var sec = 0;
    setInterval(function(){
    var a = new Date();
    if(min<10 && sec<10)
        document.getElementById("timer").innerHTML ="0"+ min+" min" +" : 0" + sec+" sec" ;
        else if(min<10)
        document.getElementById("timer").innerHTML ="0"+ min+" min" +" : " + sec+" sec" ;
        else if(sec<10)
        document.getElementById("timer").innerHTML =min+" min" +" : 0" + sec+" sec" ;
        else
        document.getElementById("timer").innerHTML = min+" min" +" : " + sec+" sec" ;
        sec++;
        if(sec == 60)
        {
            min++;
            sec =0;
        }
        },1000);
}
var count=0;
var moves=0;
var c=0;
var store,storeid;
function flip(block)
{
	moves++;
	document.getElementById('moves').innerHTML=moves;
	document.getElementById('move').innerHTML=moves;
	if(document.getElementById(block).children[0].className==store)
	{
		console.log(block);
		console.log(storeid);
			document.getElementById(block).className = " card match";
			document.getElementById(storeid).className = " card match";
			c++;
			if(c==8)
				$('#outload').modal('show');
	}
	else{
		if(count ==1 ){
			document.getElementById(block).className ="card unmatch";
			document.getElementById(storeid).className="card unmatch"; 
			
		}
	}
	document.getElementById(block).className += " open show";
	store=document.getElementById(block).children[0].className;
	storeid=block;
	
	if(count==1){
		setTimeout(function(){
			reset(block);
		},1000)
		
	}
	else
	{	
	count++;
	}

	
}
function reset(block)
{
	
	for(var i=1;i<=16;i++)
	{
		console.log(block);
		if(document.getElementById("block"+i).className=="card unmatch open show" || document.getElementById("block"+i).className=="card unmatch")
		{
			document.getElementById("block"+i).className="card ";
		}
	}
	count=0;
	store='';storeid='';
}
function restart()
{
	window.location.reload();
}
