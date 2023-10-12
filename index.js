const coordinates = document.getElementById('coordinates');
const map = new maplibregl.Map({
    container: 'map',
    style:
    'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [7.1138, 51.0837],
    zoom: 14
});
map.setMinZoom(12)

var markers=[];
const button = document.getElementsByClassName("btn-primary")[0];
const intro = document.getElementById("intro");
const info = document.getElementsByClassName("infoContainer")[0];
const logo=document.getElementById("icon");

function createMarkers(num, col){
    a=7.101182888795705;
    b=51.09206993491347;
    for (let i = 0; i < num; i++) {
        const marker = new maplibregl.Marker({draggable: true, color:col})
        .setLngLat([a, b])
        .addTo(map);
        markers.push(marker);
        a+=0.0013;
      }
}
function removeMarkers(){
    for (var i = markers.length - 1; i >= 0; i--) {
        markers[i].remove();
      }
}

function getMarkerCoordinates(type){
    for (var i = markers.length - 1; i >= 0; i--){
        var lngLat=markers[i].getLngLat();
        console.log(type+" "+i+" Longitude: "+lngLat.lng+" Latitude: "+ lngLat.lat)
    }

}
function addLogo(string){
    const logo=document.getElementById("icon");
    logo.src=string
}


function func1(){
    intro.innerHTML = intro.textContent.trim();
    intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo würden Sie die Trinkplätze in Burscheid platzieren?<br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen ";
    button.innerHTML="Zum nächsten Schritt";
    addLogo("/icons/drinking.png");
    createMarkers(5, "#AED6F1");
}
function func2(){
    getMarkerCoordinates("drinking spot");
    removeMarkers();
    intro.innerHTML = intro.textContent.trim();
    intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo würden Sie die Trinkplätze in Burscheid platzieren?<br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen ";
    button.innerHTML="Zum nächsten Schritt";
    addLogo("/icons/fountain.png");
    createMarkers(3,"#17A589");
}
function func3(){
    getMarkerCoordinates("fountain");
    removeMarkers();
    intro.innerHTML = intro.textContent.trim();
    intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo würden Sie die Trinkplätze in Burscheid platzieren?<br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen ";
    button.innerHTML="Zum nächsten Schritt";
    addLogo("/icons/misting.png")
    createMarkers(4, "#1A5276");
}

function func4(){
    getMarkerCoordinates("misting");
    removeMarkers();
    intro.innerHTML = intro.textContent.trim();
    intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo würden Sie die Trinkplätze in Burscheid platzieren?<br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen ";
    button.innerHTML="Zum nächsten Schritt";
    addLogo("/icons/restroom.png")
    createMarkers(4, "#212F3D");
}

function func5(){
    getMarkerCoordinates("restroom");
    removeMarkers();
    intro.innerHTML = intro.textContent.trim();
    intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo würden Sie die Trinkplätze in Burscheid platzieren?<br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen ";
    button.innerHTML="Zum nächsten Schritt";
    addLogo("/icons/benches.png")
    createMarkers(10, "#F5CBA7");
}

function func6(){
    getMarkerCoordinates("benches");
    removeMarkers();
    intro.innerHTML = intro.textContent.trim();
    intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo würden Sie die Trinkplätze in Burscheid platzieren?<br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen ";
    button.innerHTML="Zum nächsten Schritt";
    addLogo("/icons/accessibility.png")
    createMarkers(10, "#EC7063");
}

function func7(){
    getMarkerCoordinates("accesibility spot");
    removeMarkers();
    intro.innerHTML = "<b>Bäume sind die beste Beschattungsstrategie, die auch Verdunstungskälte bietet.</b><br> Wo werden Ihrer Meinung nach Bäume in der Stadt am meisten gebraucht? <br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen";
    addLogo("/icons/Trees.png")
    createMarkers(15, "#229954");
}

function func8(){
    getMarkerCoordinates("tree");
    removeMarkers();
    intro.innerHTML = "<b>Bäume sind die beste Beschattungsstrategie, die auch Verdunstungskälte bietet.</b><br> Wo werden Ihrer Meinung nach Bäume in der Stadt am meisten gebraucht? <br><br><b>Verschieben Sie die Markierungen an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen";
    addLogo("/icons/playground.png")
    createMarkers(7, "#F4D03F");
}

function func9(){
    getMarkerCoordinates("playground");
    removeMarkers();
    intro.innerHTML = "Danke für Ihre Teilnahme. Falls Sie wünschen können sie auch einen Kommentar einreichen.";
    logo.src="";
    button.remove();

    var newInput = document.createElement("input");
    newInput.type = "text"; 
    newInput.id="input";

    var endButton = document.createElement("button");
    endButton.textContent = "Einreichen";
    endButton.id= "button";
    endButton.onclick = () =>{
        console.log(newInput.value)
        intro.innerHTML = "Danke für Ihre Teilnahme.";
        endButton.remove();
        newInput.remove();
    }

    info.appendChild(newInput);
    info.appendChild(endButton);

}

const funcs = [func1, func2, func3, func4, func5, func6, func7, func8, func9];
let i = 0;
button.addEventListener("click", e => {
    funcs[i]();
    i++;
    if (i >= funcs.length) i = 0;
        
 });
