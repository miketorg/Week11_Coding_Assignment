let X = "";
let O = "";
let i = '1';
let chooseX = [];
let chooseO = [];
let winner = '';

function startGame() {
	bnt1.style.backgroundColor = 'white';
	bnt1.style.color = '#0493ED';
	bnt2.style.backgroundColor = '#0493ED';
	bnt2.style.color = 'white';
	}

function xOrO(id) {
		document.getElementById(id).style.display = 'block';
   		document.getElementById(id).onclick = null;

		if( document.getElementById("header").innerHTML == "X Wins!" || 
			document.getElementById("header").innerHTML == "O Wins!" ||
			document.getElementById("header").innerHTML == "Its a Tie") {	
		}else {
		
			if ( i % 2 == 0 && i < 9  ) {
				document.getElementById(id).innerHTML = "O";
				document.getElementById("header").innerHTML = "X's Turn!";
				var newIdO = id.replace('c','');
				chooseO.push(newIdO);
				document.getElementById(id).disabled = true;
				checkWinner(chooseX, chooseO,i);
			} else if ( i < 9 ) {
				document.getElementById(id).innerHTML = "X";
				document.getElementById("header").innerHTML = "O's Turn!";
				var newIdX = id.replace('c','');
				chooseX.push(newIdX);
				checkWinner(chooseX, chooseO,i);
			} else {
				document.getElementById(id).innerHTML = "X";
				var newIdX = id.replace('c','');
				chooseX.push(newIdX);
				checkWinner(chooseX, chooseO,i);
			}			
			i++;
		}
	}else {
		alert("Hit Play to Start");
	}	
}

function checkWinner(chooseX, chooseO,x) {
	if (chooseX.includes('11') && chooseX.includes('12') && chooseX.includes('13') ||
		chooseX.includes('21') && chooseX.includes('22') && chooseX.includes('23') ||
		chooseX.includes('31') && chooseX.includes('32') && chooseX.includes('33') ||
		chooseX.includes('11') && chooseX.includes('22') && chooseX.includes('33') ||
		chooseX.includes('31') && chooseX.includes('22') && chooseX.includes('13') ||
		chooseX.includes('11') && chooseX.includes('21') && chooseX.includes('31') ||
		chooseX.includes('12') && chooseX.includes('22') && chooseX.includes('32') ||
		chooseX.includes('13') && chooseX.includes('23') && chooseX.includes('33')) {	
       	let winner = ('winnerX');
		document.getElementById("header").innerHTML = "X Wins!";			
			
	} else if (chooseO.includes('11') && chooseO.includes('12') && chooseO.includes('13') ||
		chooseO.includes('21') && chooseO.includes('22') && chooseO.includes('23') ||
		chooseO.includes('31') && chooseO.includes('32') && chooseO.includes('33') ||
		chooseO.includes('11') && chooseO.includes('22') && chooseO.includes('23') ||
		chooseO.includes('31') && chooseO.includes('22') && chooseO.includes('13') ||
		chooseO.includes('11') && chooseO.includes('21') && chooseO.includes('31') ||
		chooseO.includes('12') && chooseO.includes('22') && chooseO.includes('32') ||
		chooseO.includes('13') && chooseO.includes('23') && chooseO.includes('33')) {
		let winner = ('winnerO');
		document.getElementById("header").innerHTML = "O Wins!";
	} else {
		if ( x == 9 ) {
			document.getElementById("header").innerHTML = "Its a Tie!";
		}
	}	
}

function resetGame() {
	bnt2.style.backgroundColor = 'white';
	bnt2.style.color = '#0493ED';
	bnt1.style.backgroundColor = '#0493ED';
	bnt1.style.color = 'white';
	location.reload();
}

