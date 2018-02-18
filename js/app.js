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
var count=0;
var moves=0;
var store,storeid;
function flip(block)
{
	moves++;
	console.log(document.getElementById('moves'));
	document.getElementById('moves').innerHTML=moves;
	if(count==2)
	reset(block);
	else
	{
		if(document.getElementById(block).children[0].className==store)
		{
			document.getElementById(block).className = " card match";
			document.getElementById(storeid).className = " card match";
		}
		
		document.getElementById(block).className += " open show";
		store=document.getElementById(block).children[0].className;
		storeid=block;
	count++;
	}

	
}
function reset(block)
{
	
	for(var i=1;i<=16;i++)
	{
		if(document.getElementById("block"+i).className=="card open show")
		{
			document.getElementById("block"+i).className="card";
		}
	}
	count=0;
	moves=moves-1;
	flip(block);
}
function restart()
{
	window.location.reload();
}
