// Pegar posição do mouse em x e y
function getMousePosition() {
    var x = window.event.pageX;     // Get the horizontal coordinate
    var y = window.event.pageY;     // Get the vertical coordinate
    var coor = { "x": x, "y": y };
    return coor;
}

// Atribuir posição do mouse no container
function setContainerPosition(coor) {
    const container = document.getElementById("container");
    container.style.left = coor.x + "px";
    container.style.top = coor.y + "px";
}

// Mostrar o container na tela
function showContainer() {
    setContainerPosition(getMousePosition());
    const container = document.getElementById("container");
    container.style.visibility = "visible";
}

// Esconder o container na tela
function hiddenContainer() {
    const container = document.getElementById("container");
    container.style.visibility = "hidden";
}

// Atribuir o texto de acordo com o local clicado
function setText(local) {
    const text = document.getElementById("text");
    let textos = {
        "reinoFall": "Conhecido pela sua grande biblioteca que abriga os maiores conhecimentos do mundo, também é o lar de Magnus Nightshade, tendo como rei Zoelse II",
        "reinoAvislak": "O reino que mais possui terras é governado pela rainha De La Morgause V, valorizado pelo seu comércio, a beleza de suas mulheres e grande frota de navegação. O Reino é aberto para aprender sobre magias.",
        "vila": "Um lugar pouco conhecido, longe de todos os outros reinos, abriga Hiroki Chamberlain, Rinorí Mendell, Scarlett Romaniel e Elinthy Whiter, a vila é bastante calma onde todos os moradores se conhecem.",
        "valeMiratry": "Conhecido como \"Vale das Almas\", cercado por árvores altas; um lugar de grandes desafios.",
        "ruina": "Abriga um labirinto por dentro, com criaturas desconhecidas.",
        "vilarejoAbandonado": "Massacrado por um exército várias pessoas morreram cruelmente incluindo crianças, atearam fogo e tudo virou cinzas. Dizem que algumas almas ainda vagam por este local.",
        "casteloAbandonado": "Onde Magnus Nightshade espera, com seu lobo, os quatro escolhidos. É um lugar cercado por árvores mortas e montanhas.",
        "reinoDarcton": "Abriga um grande exército. Darcton é regido pelo rei Theodore II e tem pouco conhecimento sobre magia, os poucos magos que lá residem, dominas a magia elemental da água."     
     };
    switch (local){
        case 'reinoFall': 
            text.innerHTML = textos.reinoFall;
            break;
        case 'reinoAvislak': 
            text.innerHTML = textos.reinoAvislak;  
            break;
        case 'vila': 
            text.innerHTML = textos.vila; 
            break;
        case 'valeMiratry': 
            text.innerHTML = textos.valeMiratry;  
            break;
        case 'ruina': 
            text.innerHTML = textos.ruina;  
            break;
        case 'vilarejoAbandonado': 
            text.innerHTML = textos.vilarejoAbandonado;  
            break; 
        case 'casteloAbandonado': 
            text.innerHTML = textos.casteloAbandonado;  
            break;      
        case 'reinoDarcton': 
            text.innerHTML = textos.reinoDarcton;  
            break;               
    }
}

// Regra para saber se está clicando em um local válido ou não
function getClick(local) {
    setText(local);
    showContainer();
}