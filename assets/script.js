const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//////////////////// Les flèches ///////////////////////


// Ajout des flèches
let banner =document.querySelector('#banner'); // ciblage de la banner

const arrowLeft = document.createElement('img'); // création de l'élément img
arrowLeft.setAttribute('src',"./assets/images/arrow_left.png"); 
arrowLeft.setAttribute('alt',"flèche gauche");
arrowLeft.setAttribute('class',"arrow_left");

banner.appendChild(arrowLeft); // implantation de la flèche gauche dans la banner

const arrowRight = document.createElement('img'); // création de l'élément img
arrowRight.setAttribute('src',"./assets/images/arrow_right.png"); 
arrowRight.setAttribute('alt',"flèche droite");
arrowRight.setAttribute('class',"arrow_right");

banner.appendChild(arrowRight);




// Ajout des event listeners pour capturer les clics
arrowLeft.addEventListener('click', function() {
    console.log("Flèche gauche cliquée");
});

arrowRight.addEventListener('click', () => {
    console.log("Flèche droite cliquée");
});


//////////////////// Les bullet points ///////////////////////

// Sélectionner le conteneur des bullet points 
const dotsContainer = document.querySelector('.dots');

// Nombre de bullet points à créer, basé sur la longueur du tableau slides
const totalSlides = slides.length; 

// Initialiser la diapositive active (par défaut la première diapositive)
let currentSlide = 0; 

// Boucle pour créer un bullet point pour chaque élément du tableau slides
for (let i = 0; i < totalSlides; i++) {

    // Créer un élément div pour chaque bullet point
    const dot = document.createElement('div');
    
    // Ajouter la classe CSS 'dot' à cet élément pour le styliser
    dot.classList.add('dot');

	// Ajouter la classe .dot_selected pour le point actif
	if (i === currentSlide) {
	dot.classList.add('dot_selected'); // Marque le bullet point actif
	}
	
    // Ajouter ce bullet point (div) dans le conteneur
    dotsContainer.appendChild(dot);
}

//////////////////// Modification du slide ///////////////////////

// Sélectionner l'élément image et le paragraphe pour le texte
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

function updateCarousel() {
    // Mettre à jour l'image
    bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;

    // Mettre à jour le texte
    bannerText.innerHTML = slides[currentSlide].tagLine;

    // Mettre à jour les bullet points
	const dots = document.querySelectorAll('.dot');

	// Parcourir chaque bullet point
	dots.forEach((dot, index) => {
		// Enlever la classe 'dot_selected' de tous les bullet points
		dot.classList.remove('dot_selected');  
		
		// Ajouter la classe 'dot_selected' au bullet point qui correspond à la diapositive active
		if (index === currentSlide) {
			dot.classList.add('dot_selected');
		}
	});
}

//////////////////// Changement de diapositive par les flèches ///////////////////////

// Initialiser le carrousel avec la première image
updateCarousel();

arrowRight.addEventListener('click', function() {
    // Passer à la diapositive suivante
    currentSlide++;

    // Si on dépasse le nombre de diapositives, revenir à la première diapositive
    if (currentSlide >= slides.length) {
        currentSlide = 0;  // Revenir à la première diapositive si on dépasse la dernière
    }

    // Mettre à jour le carrousel
    updateCarousel();
});

arrowLeft.addEventListener('click', function() {
    // Passer à la diapositive précédente
    currentSlide--;

    // Si on est en dessous de 0, revenir à la dernière diapositive
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;  // Aller à la dernière diapositive si on est en dessous de la première
    }

    // Mettre à jour le carrousel
    updateCarousel();
});
