//shuffle deck of cards.
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
var myVal;

//Timer starts on window onload.
window.onload = function(){
		$('#onload').modal('show');
	
    var min = 0;
    var sec = 0;
    myVal=setInterval(function(){
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
// To stop a timer.
function myStopFunction() {

    clearInterval(myVal);
	
}
// star ratings.
function starz(mov)
{
	var list=document.getElementById("st");
	if(mov==24)
	{
		console.log(mov);
		list.removeChild(list.childNodes[1]);
	}
	else if(mov==30)
	{
		list.removeChild(list.childNodes[2]);
	}
}

var count=0;
var moves=0;
var c=0;
var store,storeid;
// fliping a card and checking if they match or not.
function flip(block)
{
	moves++;
	starz(moves);
	document.getElementById('moves').innerHTML=moves;
	document.getElementById('move').innerHTML=moves;
	if(document.getElementById(block).children[0].className==store)
	{
		console.log(block);
		console.log(storeid);
			document.getElementById(block).className = " card match animated pulse";
			document.getElementById(storeid).className = " card match animated pulse";
			c++;
			if(c==8){
				console.log(document.getElementById('st'));
				document.getElementById('st1').innerHTML = document.getElementById('st').innerHTML;
				 myStopFunction();
				 	document.getElementById('timer1').innerHTML=document.getElementById('timer').innerHTML;
									 console.log(document.getElementById('timer').innerHTML, document.getElementById('timer1').innerHTML);

				$('#outload').modal('show');
			}
	}
	else{
		if(count ==1 ){
			document.getElementById(block).className ="card animated unmatch";
			document.getElementById(storeid).className="card animated unmatch"; 
			
		}
	}
	document.getElementById(block).className += " open show flipInY";
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
// flip the opened card back if they do not match.
function reset(block)
{
	
	for(var i=1;i<=16;i++)
	{
		if(document.getElementById("block"+i).className=="card animated unmatch open show flipInY" || document.getElementById("block"+i).className=="card animated unmatch")
		{
			document.getElementById("block"+i).className="card animated";
		}
	}
	count=0;
	store='';storeid='';
}
// restart the game.
function restart()
{
	window.location.reload();
}
