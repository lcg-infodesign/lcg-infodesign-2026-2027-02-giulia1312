function setup() { 
  createCanvas(windowWidth, windowHeight); 
  background(250, 248, 245); 
  
  let numeroGlifi = 80;
  
  let numeroColonne = ceil (sqrt(numeroGlifi));
  let numeroRighe = sqrt(numeroGlifi);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numeroGlifi; g++){
    // Grandezze diverse della stella (tra il 40% e il 90% della riga)
    let dimensioneCasuale = random(dimRiga * 0.4, dimRiga * 0.9);
    
    mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimensioneCasuale)
    
    xCorrente = xCorrente + dimColonna;

//Per disegnare cerchio subito sotto nella x iniziale appena supera windowWidth
    if(xCorrente >= windowWidth){ 
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

function draw() {
} 


function mioGlifo(_x, _y, _size) { 
  push();  

  // Colori casuali ad alto contrasto
  fill(random(50,255), random(50,255), random(50,255)); 
  noStroke(); 
  
  translate(_x, _y); 
  
  angleMode(DEGREES); 
  // Rotazione per inclinare l'intero glifo
  rotate(random(360)); 
  
  // Cerchio che unisce le basi dei triangoli
  circle(0, 0, _size * 0.3); 

  // Numero di punte (tra 6 e 9)
  let numeroPunte = floor(random(6, 10)); 
  // Calcolo per disporre le punte uniformemente
  let angoloPerPunta = 360 / numeroPunte;

  for(let i=0; i<numeroPunte; i++){ 
    // Calcolo dell'angolo progressivo
    const myRotation = i * angoloPerPunta; 
    
    // Ogni punta ha una lunghezza diversa
    const lunghezzaPunta = random(_size * 0.3, _size * 0.6);
    // Dimensione della base del triangolo, proporzionale al centro
    const metaBase = _size * 0.12; 

    push(); 

    rotate(myRotation); 
    
    // I vertici sono: (sinistra della base, centro), (destra della base, centro), (punta estesa)
    triangle(-metaBase, 0, metaBase, 0, 0, -lunghezzaPunta); 

    pop(); 
  }

  pop(); 
}