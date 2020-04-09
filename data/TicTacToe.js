var SetupListeners = function() {
	creerTerrain();
	BoutonPlay();
	play = false;
	scoreJ1 = 0;
	scoreJ2 = 0;
	scoreJ3 = 0;
	scoreJ4 = 0;
	nbrTour = 0;
}

window.addEventListener("load",SetupListeners);

var BoutonPlay = function() {
	var bouton = document.createElement("button");
	bouton.id= "play";
	var texte = document.createTextNode("Play");
	bouton.appendChild(texte);
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(bouton);
	bouton.addEventListener("click",Play);
}

var enleverBoutonPlay = function() {
	var bouton = document.getElementById("play");
	bouton.removeEventListener("click",Play);
	bouton.parentNode.removeChild(bouton);
}

var creerTerrain = function() {
	var body = document.getElementsByTagName("body")[0]
	var game = document.createElement("table");
	game.id = "game";
	var tbody = document.createElement("tbody");
	for (ligne=0; ligne<6; ligne++) {
		var row = document.createElement("tr");
		for (colonne=0; colonne<6; colonne++) {
			var column = document.createElement("td");
			column.className = "free";
			column.style.width = "75px";
			column.style.height = "75px";
			column.id = ligne+"-"+colonne;
			column.style.backgroundColor = "black";
			row.appendChild(column);
		}
		tbody.appendChild(row);
	}
	game.appendChild(tbody);
	body.appendChild(game);
}

var enleverTerrain = function() {
	var game = document.getElementById("game");
	game.parentNode.removeChild(game);
}

var touche = function(e) {
	var touche = event.keyCode;
	var nom = String.fromCharCode(touche);
	var go = document.getElementById("play");
	if (nom == " ") {
		go.click();
	}
}

var Play = function() {
	if (play == false) {
		choix = window.prompt("2, 3 ou 4 joueurs ?");
		if (choix != "2" && choix != "3" && choix != "4") {
			while (choix != "2" && choix != "3" && choix != "4") {
				choix = window.prompt("Répondre 2 pour 2 joueurs, 3 pour 3 joueurs et 4 pour 4 joueurs.");
			}
		}
		var turn = Math.random();
		play = true;
		if (choix == "2") {
			nbrPerso = 2;
			lesFleches();
			lesFleches2();
			if ( turn > 0.5 ) {
				TourJ1();
			}
			else {
				TourJ2();
			}
		}
		if (choix == "3") {
			nbrPerso = 3;
			lesFleches();
			lesFleches2();
			lesFleches3();
			if (turn < 0.33) {
				TourJ1();
			}
			else if (turn > 0.66) {
				TourJ2();
			}
			else {
				TourJ3();
			}
		}
		if (choix == "4") {
			nbrPerso = 4;
			lesFleches();
			lesFleches2();
			lesFleches3();
			lesFleches4();
			if (turn < 0.25) {
				TourJ1();
			}
			else if (turn > 0.25 && turn < 0.5) {
				TourJ2();
			}
			else if (turn > 0.5 && turn <0.75) {
				TourJ3();
			}
			else {
				TourJ4();
			}
		}
	}
	else {
		var ask = window.prompt("Quitter la partie en cours ?");
		ask = ask.toLowerCase();
		if (ask == "yes" || ask == "oui" || ask == "si" || ask == "da") {
			play = false;
			enleverFleches();
			enleverBoutonPlay();
			enleverTerrain();
			creerTerrain();
			BoutonPlay();
			scoreJ1 = 0;
			scoreJ2 = 0;
			scoreJ3 = 0;
			scoreJ4 = 0;
			nbrTour = 0;
		}
	}
}

var lesFleches = function() {
	var ahahah = document.createTextNode("Joueur 1");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J1";
	blocDeFleche.appendChild(ahahah);
	blocDeFleche.style.backgroundColor = "black";
	blocDeFleche.style.color = "white";
	document.getElementsByTagName("body")[0].appendChild(blocDeFleche);
	afficherScore("J1");
}

var lesFleches2 = function() {
	var ahahah = document.createTextNode("Joueur 2");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J2";
	blocDeFleche.appendChild(ahahah);
	blocDeFleche.style.backgroundColor = "black";
	blocDeFleche.style.color = "white";
	document.getElementsByTagName("body")[0].appendChild(blocDeFleche);
	afficherScore("J2");
}

var lesFleches3 = function() {
	var ahahah = document.createTextNode("Joueur 3");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J3";
	blocDeFleche.appendChild(ahahah);
	blocDeFleche.style.backgroundColor = "black";
	blocDeFleche.style.color = "white";
	document.getElementsByTagName("body")[0].appendChild(blocDeFleche);
	afficherScore("J3");
}

var lesFleches4 = function() {
	var ahahah = document.createTextNode("Joueur 4");
	var blocDeFleche = document.createElement("div");
	blocDeFleche.id = "bloc_J4";
	blocDeFleche.appendChild(ahahah);
	blocDeFleche.style.backgroundColor = "black";
	blocDeFleche.style.color = "white";
	document.getElementsByTagName("body")[0].appendChild(blocDeFleche);
	afficherScore("J4");
}

var enleverFleches = function() {
	var bloc1 = document.getElementById("bloc_J1");
	var bloc2 = document.getElementById("bloc_J2");
	bloc1.parentNode.removeChild(bloc1);
	bloc2.parentNode.removeChild(bloc2);
	if (nbrPerso > 2) {
		var bloc3 = document.getElementById("bloc_J3");
		bloc3.parentNode.removeChild(bloc3);
		if (nbrPerso == 4) {
			var bloc4 = document.getElementById("bloc_J4");
			bloc4.parentNode.removeChild(bloc4);
		}
	}
}

var TourJ1 = function() {
	var bloc = document.getElementById("bloc_J1");
	bloc.style.color = "black";
	bloc.style.backgroundColor = "blue";
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].addEventListener("click",clickJ1);
	}
}

var clickJ1 = function() {
	var imageneutre = document.createElement("img");
	imageneutre.style.width = "70px";
	imageneutre.style.height = "70px";
	imageneutre.src = "./images/cercle.png";
	this.appendChild(imageneutre);
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].removeEventListener("click",clickJ1);
	}
	this.className = "J1";
	var bloc = document.getElementById("bloc_J1");
	bloc.style.color = "white";
	bloc.style.backgroundColor = "black";
	verification("J1",this);
	nbrTour++;
	if (nbrTour == document.getElementsByTagName("td").length) {
		FinDeLaPartie();
	}
	else {
		TourJ2();
	}
}

var TourJ2 = function() {
	var bloc = document.getElementById("bloc_J2");
	bloc.style.color = "black";
	bloc.style.backgroundColor = "red";
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].addEventListener("click",clickJ2);
	}
}

var clickJ2 = function() {
	var imageneutre = document.createElement("img");
	imageneutre.style.width = "70px";
	imageneutre.style.height = "70px";
	imageneutre.src = "./images/croix.png";
	this.appendChild(imageneutre);
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].removeEventListener("click",clickJ2);
	}
	this.className = "J2";
	var bloc = document.getElementById("bloc_J2");
	bloc.style.color = "white";
	bloc.style.backgroundColor = "black";
	verification("J2",this);
	nbrTour++;
	if (nbrTour == document.getElementsByTagName("td").length) {
		FinDeLaPartie();
	}
	else {
		if ( nbrPerso == 2) {
			TourJ1();
		}
		else {
			TourJ3();
		}
	}
}


var TourJ3 = function() {
	var bloc = document.getElementById("bloc_J3");
	bloc.style.color = "black";
	bloc.style.backgroundColor = "green";
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].addEventListener("click",clickJ3);
	}
}

var clickJ3 = function() {
	var imageneutre = document.createElement("img");
	imageneutre.style.width = "70px";
	imageneutre.style.height = "70px";
	imageneutre.src = "./images/cercle2.png";
	this.appendChild(imageneutre);
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].removeEventListener("click",clickJ3);
	}
	this.className = "J3";
	var bloc = document.getElementById("bloc_J3");
	bloc.style.color = "white";
	bloc.style.backgroundColor = "black";
	verification("J3",this);
	nbrTour++;
	if (nbrTour == document.getElementsByTagName("td").length) {
		FinDeLaPartie();
	}
	else {
		if ( nbrPerso == 3) {
			TourJ1();
		}
		else {
			TourJ4();
		}
	}
}

var TourJ4 = function() {
	var bloc = document.getElementById("bloc_J4");
	bloc.style.color = "black";
	bloc.style.backgroundColor = "pink";
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].addEventListener("click",clickJ4);
	}
}

var clickJ4 = function() {
	var imageneutre = document.createElement("img");
	imageneutre.style.width = "70px";
	imageneutre.style.height = "70px";
	imageneutre.src = "./images/croix2.png";
	this.appendChild(imageneutre);
	var lesCases = document.getElementsByClassName("free");
	for (i=0; i<lesCases.length; i++) {
		lesCases[i].removeEventListener("click",clickJ4);
	}
	this.className = "J4";
	var bloc = document.getElementById("bloc_J4");
	bloc.style.color = "white";
	bloc.style.backgroundColor = "black";
	verification("J4",this);
	nbrTour++;
	if (nbrTour == document.getElementsByTagName("td").length) {
		FinDeLaPartie();
	}
	else {
		TourJ1();
	}
}

var verification = function(joueur, lieu) {
	var ligne = parseInt(lieu.id.split("-")[0]);
	var colonne = parseInt(lieu.id.split("-")[1]);
	var lesLignes = document.getElementsByTagName("tr");
	var lesColonnes = lesLignes[ligne].getElementsByTagName("td");
	if ( ligne >= 2 ) {
		var case1dessus = document.getElementById((ligne-1)+"-"+colonne);
		var case2dessus = document.getElementById((ligne-2)+"-"+colonne);
		if (case1dessus.className == joueur && case2dessus.className == joueur) {
			if (joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				if ( case2dessus.childElementCount != 0) {
					case2dessus.removeChild(case2dessus.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1dessus.style.backgroundColor = "blue";
				case2dessus.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				if ( case2dessus.childElementCount != 0) {
					case2dessus.removeChild(case2dessus.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1dessus.style.backgroundColor = "red";
				case2dessus.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				if ( case2dessus.childElementCount != 0) {
					case2dessus.removeChild(case2dessus.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1dessus.style.backgroundColor = "green";
				case2dessus.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				lieu.removeChild(lieu.firstChild);
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				if ( case2dessus.childElementCount != 0) {
					case2dessus.removeChild(case2dessus.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1dessus.style.backgroundColor = "pink";
				case2dessus.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne <= lesLignes.length - 3) {
		var case1dessous = document.getElementById((ligne+1)+"-"+colonne);
		var case2dessous = document.getElementById((ligne+2)+"-"+colonne);
		if (case1dessous.className == joueur && case2dessous.className == joueur) {
			if (joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case2dessous.childElementCount != 0) {
					case2dessous.removeChild(case2dessous.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1dessous.style.backgroundColor = "blue";
				case2dessous.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case2dessous.childElementCount != 0) {
					case2dessous.removeChild(case2dessous.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1dessous.style.backgroundColor = "red";
				case2dessous.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case2dessous.childElementCount != 0) {
					case2dessous.removeChild(case2dessous.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1dessous.style.backgroundColor = "green";
				case2dessous.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case2dessous.childElementCount != 0) {
					case2dessous.removeChild(case2dessous.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1dessous.style.backgroundColor = "pink";
				case2dessous.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne >= 1 && ligne <= lesLignes.length - 2) {
		var case1dessus = document.getElementById((ligne-1)+"-"+colonne);
		var case1dessous = document.getElementById((ligne+1)+"-"+colonne);
		if ( case1dessus.className == joueur && case1dessous.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1dessous.style.backgroundColor = "blue";
				case1dessus.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1dessous.style.backgroundColor = "red";
				case1dessus.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1dessous.style.backgroundColor = "green";
				case1dessus.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1dessous.childElementCount != 0) {
					case1dessous.removeChild(case1dessous.firstChild);
				}
				if ( case1dessus.childElementCount != 0) {
					case1dessus.removeChild(case1dessus.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1dessous.style.backgroundColor = "pink";
				case1dessus.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if (colonne >= 1 && colonne <= lesColonnes.length - 2) {
		var case1droite = lesColonnes[colonne+1];
		var case1gauche = lesColonnes[colonne-1];
		if ( case1droite.className == joueur && case1gauche.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1droite.style.backgroundColor = "blue";
				case1gauche.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1droite.style.backgroundColor = "red";
				case1gauche.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1droite.style.backgroundColor = "green";
				case1gauche.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1droite.style.backgroundColor = "pink";
				case1gauche.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if (colonne <= lesColonnes.length - 3) {
		var case1droite = lesColonnes[colonne+1];
		var case2droite = lesColonnes[colonne+2];
		if ( case1droite.className == joueur && case2droite.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case2droite.childElementCount != 0) {
					case2droite.removeChild(case2droite.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1droite.style.backgroundColor = "blue";
				case2droite.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case2droite.childElementCount != 0) {
					case2droite.removeChild(case2droite.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1droite.style.backgroundColor = "red";
				case2droite.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case2droite.childElementCount != 0) {
					case2droite.removeChild(case2droite.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1droite.style.backgroundColor = "green";
				case2droite.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1droite.childElementCount != 0) {
					case1droite.removeChild(case1droite.firstChild);
				}
				if ( case2droite.childElementCount != 0) {
					case2droite.removeChild(case2droite.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1droite.style.backgroundColor = "pink";
				case2droite.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if (colonne >= 2) {
		var case2gauche = lesColonnes[colonne-2];
		var case1gauche = lesColonnes[colonne-1];
		if ( case2gauche.className == joueur && case1gauche.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case2gauche.childElementCount != 0) {
					case2gauche.removeChild(case2gauche.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case2gauche.style.backgroundColor = "blue";
				case1gauche.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case2gauche.childElementCount != 0) {
					case2gauche.removeChild(case2gauche.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case2gauche.style.backgroundColor = "red";
				case1gauche.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case2gauche.childElementCount != 0) {
					case2gauche.removeChild(case2gauche.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case2gauche.style.backgroundColor = "green";
				case1gauche.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case2gauche.childElementCount != 0) {
					case2gauche.removeChild(case2gauche.firstChild);
				}
				if ( case1gauche.childElementCount != 0) {
					case1gauche.removeChild(case1gauche.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case2gauche.style.backgroundColor = "pink";
				case1gauche.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne >= 2 && colonne >= 2) {
		var case1hautgauche = lesLignes[ligne-1].getElementsByTagName("td")[colonne - 1];
		var case2hautgauche = lesLignes[ligne-2].getElementsByTagName("td")[colonne - 2];
		if ( case1hautgauche.className == joueur && case2hautgauche.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1hautgauche.style.backgroundColor = "blue";
				case2hautgauche.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1hautgauche.style.backgroundColor = "red";
				case2hautgauche.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1hautgauche.style.backgroundColor = "green";
				case2hautgauche.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1hautgauche.style.backgroundColor = "pink";
				case2hautgauche.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne >= 1 && colonne >= 1 && ligne <= lesLignes.length - 2 && colonne <= lesColonnes.length - 2) {
		var case1hautgauche = lesLignes[ligne-1].getElementsByTagName("td")[colonne - 1];
		var case1basdroite = lesLignes[ligne+1].getElementsByTagName("td")[colonne + 1];
		if ( case1hautgauche.className == joueur && case1basdroite.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1hautgauche.style.backgroundColor = "blue";
				case1basdroite.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1hautgauche.style.backgroundColor = "red";
				case1basdroite.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1hautgauche.style.backgroundColor = "green";
				case1basdroite.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1hautgauche.style.backgroundColor = "pink";
				case1basdroite.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne <= lesLignes.length - 3 && colonne <= lesColonnes.length - 3) {
		var case1basdroite = lesLignes[ligne+1].getElementsByTagName("td")[colonne + 1];
		var case2basdroite = lesLignes[ligne+2].getElementsByTagName("td")[colonne + 2];
		if ( case1basdroite.className == joueur && case2basdroite.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1basdroite.style.backgroundColor = "blue";
				case2basdroite.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1basdroite.style.backgroundColor = "red";
				case2basdroite.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1basdroite.style.backgroundColor = "green";
				case2basdroite.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1basdroite.style.backgroundColor = "pink";
				case2basdroite.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne >= 1 && colonne >= 1 && ligne <= lesLignes.length - 2 && colonne <= lesColonnes.length - 2) {
		var case1hautgauche = lesLignes[ligne-1].getElementsByTagName("td")[colonne + 1];
		var case1basdroite = lesLignes[ligne+1].getElementsByTagName("td")[colonne - 1];
		if ( case1hautgauche.className == joueur && case1basdroite.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1hautgauche.style.backgroundColor = "blue";
				case1basdroite.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1hautgauche.style.backgroundColor = "red";
				case1basdroite.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1hautgauche.style.backgroundColor = "green";
				case1basdroite.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1hautgauche.style.backgroundColor = "pink";
				case1basdroite.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne <= lesLignes.length - 3 && colonne >= 2) {
		var case1basdroite = lesLignes[ligne+1].getElementsByTagName("td")[colonne - 1];
		var case2basdroite = lesLignes[ligne+2].getElementsByTagName("td")[colonne - 2];
		if ( case1basdroite.className == joueur && case2basdroite.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1basdroite.style.backgroundColor = "blue";
				case2basdroite.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1basdroite.style.backgroundColor = "red";
				case2basdroite.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1basdroite.style.backgroundColor = "green";
				case2basdroite.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1basdroite.childElementCount != 0) {
					case1basdroite.removeChild(case1basdroite.firstChild);
				}
				if ( case2basdroite.childElementCount != 0) {
					case2basdroite.removeChild(case2basdroite.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1basdroite.style.backgroundColor = "pink";
				case2basdroite.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
	if ( ligne >= 2 && colonne <= lesColonnes.length - 3) {
		var case1hautgauche = lesLignes[ligne-1].getElementsByTagName("td")[colonne + 1];
		var case2hautgauche = lesLignes[ligne-2].getElementsByTagName("td")[colonne + 2];
		if ( case1hautgauche.className == joueur && case2hautgauche.className == joueur) {
			if ( joueur == "J1") {
				scoreJ1++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "blue";
				case1hautgauche.style.backgroundColor = "blue";
				case2hautgauche.style.backgroundColor = "blue";
			}
			else if (joueur == "J2") {
				scoreJ2++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "red";
				case1hautgauche.style.backgroundColor = "red";
				case2hautgauche.style.backgroundColor = "red";
			}
			else if (joueur == "J3") {
				scoreJ3++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "green";
				case1hautgauche.style.backgroundColor = "green";
				case2hautgauche.style.backgroundColor = "green";
			}
			else {
				scoreJ4++;
				if ( lieu.childElementCount != 0) {
					lieu.removeChild(lieu.firstChild);
				}
				if ( case1hautgauche.childElementCount != 0) {
					case1hautgauche.removeChild(case1hautgauche.firstChild);
				}
				if ( case2hautgauche.childElementCount != 0) {
					case2hautgauche.removeChild(case2hautgauche.firstChild);
				}
				lieu.style.backgroundColor = "pink";
				case1hautgauche.style.backgroundColor = "pink";
				case2hautgauche.style.backgroundColor = "pink";
			}
			afficherScore(joueur);
		}
	}
}

var afficherScore = function(joueur) {
	var bloc = document.getElementById("bloc_"+joueur);
	if ( bloc.childElementCount == 0) {
		var nombre = document.createElement("div");
		nombre.id = "nombre_"+joueur;
		nombre.style.position = "relative";
		nombre.style.width = "60px";
		nombre.style.height = "25px";
		nombre.style.textAlign = "center";
		nombre.style.verticalAlign = "middle";
		nombre.style.left = "50%";
		nombre.style.top = "30%";
		nombre.style.transform = "translateX(-50%)";
		bloc.appendChild(nombre);
		nombre.appendChild(document.createTextNode("0"));
	}
	else {
		var nombre = document.getElementById("nombre_"+joueur);
		nombre.removeChild(nombre.firstChild);
		if (joueur == "J1") {
			nombre.appendChild(document.createTextNode(scoreJ1));
		}
		else if (joueur == "J2") {
			nombre.appendChild(document.createTextNode(scoreJ2));
		}
		else if (joueur == "J3") {
			nombre.appendChild(document.createTextNode(scoreJ3));
		}
		else {
			nombre.appendChild(document.createTextNode(scoreJ4));
		}
	}
}

var FinDeLaPartie = function() {
	document.getElementById("bloc_J1").style.backgroundColor = "";
	document.getElementById("bloc_J1").style.color = "black";
	document.getElementById("bloc_J2").style.backgroundColor = "";
	document.getElementById("bloc_J2").style.color = "black";
	if ( nbrPerso == 3 || nbrPerso == 4) {
		document.getElementById("bloc_J3").style.backgroundColor = "";
		document.getElementById("bloc_J3").style.color = "black";
		if ( nbrPerso == 4) {
			document.getElementById("bloc_J4").style.backgroundColor = "";
			document.getElementById("bloc_J4").style.color = "black";
		}
	}
	nbrTour = 0;
}
	