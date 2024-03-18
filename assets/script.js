// Initialisation du compteur imageEnCours
let imageEnCours = 0

// Exécution du code après chargement du document HTML
document.addEventListener("DOMContentLoaded", function() {

	/* * * * * * * TABLEAU contenant la LISTE des IMAGES du caroussel * * * * * * */
	const slides = [
	  {
	    "image": "slide1.jpg",
	    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	  },
	  {
	    "image": "slide2.jpg",
	    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	  },
	  {
	    "image": "slide3.jpg",
	    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	  },
	  {
	    "image": "slide4.png",
	    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	  }
	]

	/* * * * * * * * * * * * * * FLÈCHES DIRECTIONNELLES * * * * * * * * * * * * */ 
	const boutonPrecedent = document.querySelector(".arrow_left")
  	boutonPrecedent.style.background = "transparent"
  	boutonPrecedent.style.border = "none"
  	boutonPrecedent.style.cursor = "pointer"

  	const boutonSuivant = document.querySelector(".arrow_right")
  	boutonSuivant.style.background = "transparent"
  	boutonSuivant.style.border = "none"
  	boutonSuivant.style.cursor = "pointer"

	/* * * * * * * * * * * * * * * * * * PUCES * * * * * * * * * * * * * * * * * */
  	const dotsDiv = document.querySelector(".dots")
  	const boutonsPuce = []

  	slides.forEach((image, imageEnCours) => {
  	  const dot = document.createElement("button")
  	  dot.style.cursor = "pointer"
  	  dot.classList.add("dot")
  	  if (imageEnCours === 0) dot.classList.add("dot_selected")
  	  dot.dataset.imageEnCours = imageEnCours
  	  dotsDiv.appendChild(dot) 

  	  boutonsPuce.push(dot)
  	})

	/* * * * * * * * * * * * * * GESTION DES IMAGES * * * * * * * * * * * * * */
  	let imageBanniere = document.querySelector(".banner-img")
  	let tagLine = document.getElementById("tagline")

  	function afficherImageEnCours() {
		// Réinitialisation du contenu des balises 
		imageBanniere.innerHTML = ""
  	 	tagLine.innerHTML = ""

  	 	if (imageEnCours >= 0 && imageEnCours < slides.length) {
  	 	  	imageBanniere.setAttribute("src", `./assets/images/slideshow/${slides[imageEnCours].image}`)
  	 	  	tagLine.innerHTML = slides[imageEnCours].tagLine
  	 	  	afficherPuceEnCours(imageEnCours)
  	 	}
  	}

  	function afficherPuceEnCours(imageEnCours) {
  	  	const dot = dotsDiv.getElementsByClassName("dot")

  	  	for (let i = 0; i < dot.length; i++) {
  	  	  	dot[i].classList.remove("dot_selected")
  	  	}
  	  	dot[imageEnCours].classList.add("dot_selected")
  	}

	/* * * * * * * * * GESTIONNAIRE DES ÉCOUTEURS D'ÉVÈNEMENTS * * * * * * * */
  	boutonPrecedent.addEventListener("click", () => {
  	  	if (imageEnCours === 0) {
  	  	  imageEnCours = slides.length - 1
  	  	} else {
  	  	  	imageEnCours--
  	  	}
  	  	afficherImageEnCours()
  	  	console.log("Clic bouton gauche - Valeur tableau image en cours :", imageEnCours.valueOf(imageEnCours), "sur", slides.length)
  	})

  	boutonSuivant.addEventListener("click", function() {
  	  	if (imageEnCours === slides.length - 1) {
  	  	  imageEnCours = 0
  	  	} else {
  	  	  imageEnCours++
  	  	}
  	  	afficherImageEnCours()
  	  	console.log("Clic bouton droit - Valeur tableau image en cours:", imageEnCours.valueOf(imageEnCours), "sur", slides.length)
  	})

  	boutonsPuce.forEach((dot) => {
  	  	dot.addEventListener("click", function() {
  	  	  imageEnCours = parseInt(this.dataset.imageEnCours)
  	  	  afficherImageEnCours(imageEnCours)

  	  	  console.log("Image n°", imageEnCours.valueOf(imageEnCours) + 1)
  	  	})
  	})

  	afficherImageEnCours()
})