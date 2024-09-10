document.getElementById('coordinates');
var map = new maplibregl.Map({
    container: 'map',
    style:
    'https://api.maptiler.com/maps/basic/style.json?key=vEKjKhtXsv7lTNHKwZro',
    center: [7.1138, 51.0837],
    zoom: 6
});
/*
map.setMinZoom(12);
*/



var markers=[];
const button = document.getElementsByClassName("btn-primary")[0];
const buttonSec = document.getElementsByClassName("btn-sec")[0];
buttonSec.setAttribute('disabled', 'disabled');
const intro = document.getElementById("intro");
const info = document.getElementsByClassName("infoContainer")[0];
const logo = document.getElementById("icon");
const analysis = document.getElementById("analysis");

function createMarkers(num, col){
    a=13.39060554069133;
    b=52.515834691380086;
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
    markers=[];
}

function getMarkerCoordinates(type){
    for (var i = markers.length - 1; i >= 0; i--){
        var lngLat=markers[i].getLngLat();
        console.log(type+" "+i+" Longitude: "+lngLat.lng+" Latitude: "+ lngLat.lat);
    }

}
function addLogo(string){
    const logo=document.getElementById("logo");
    logo.src=string;
}

function createOptions(array, id = "") {
    var selectElement = document.createElement("select");
    selectElement.id = "fruitSelect";
    selectElement.name = "fruits";

    // Create and append option elements based on the array
    for (var i = 0; i < array.length; i++) {
        var optionElement = document.createElement("option");
        optionElement.value = array[i].toLowerCase();
        optionElement.innerHTML = array[i];
        optionElement.id = id;
        selectElement.appendChild(optionElement);
    }
    return selectElement;
}


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let selectedCount = 0;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            selectedCount++;
        } else {
            selectedCount--;
        }

        if (selectedCount > 3) {
            checkbox.checked = false;
            selectedCount--;
        }

        if (selectedCount === 3) {
            buttonSec.removeAttribute('disabled');
        } else {
            buttonSec.setAttribute('disabled', 'disabled');
        }
    });
});



const divForm = document.getElementById('firstForm');
const form = document.getElementById('elementForm');
const selectedElements = [];

const functionsArray=[
    function(){
        intro.innerHTML = intro.textContent.trim()
        info.scrollTop=0;
        intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Trinkplätzen?<br><br><b>Verschieben Sie die 5 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("./icons/drinking.png");
        createMarkers(5, "#AED6F1");
    },
    function(){
       removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.scrollTop=0;
        intro.innerHTML = "<b>Fontänen können den Komfort im Freien durch Verdunstungskühlung verbessern.</b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Fontänen?<br><br><b>Verschieben Sie die 4 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("./icons/fountain.png");
        createMarkers(4,"#17A589");
    },
    function(){
       removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.scrollTop=0;
        intro.innerHTML = "<b>Vernebelungsanlagen sind eine Strategie zur Bekämpfung von Hitzestress, insbesondere dort, wo sich viele Menschen zusammenkommen oder vorbeigehen.</b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Vernebelungsanlagen?<br><b>Verschieben Sie die 4 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/misting.png");
        createMarkers(4, "#1A5276");
    },
    function(){
      removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.scrollTop=0;
        intro.innerHTML = "<b>Öffentliche Toiletten ermöglichen freie Bewegung in öffentlichen Räumen.</b><br>Wo gibt es Ihrer Meinung nach einen Bedarf an öffentlichen Toiletten?<br><br><b>Verschieben Sie die 4 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/restroom.png");
        createMarkers(4, "#212F3D");
    },
    function(){
       removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.scrollTop=0;
        intro.innerHTML = "<b>Sitzbänke unterstützten gesunde Alltagsroutinen.</b><br> Wo werden Ihrer Meinung nach Sitzbänke am meisten gebraucht?<br><br><b>Verschieben Sie die 10 Markierungen in der Karte an die gewünschten Stellen.Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/benches.png");
        createMarkers(10, "#F5CBA7");
    },
    function(){
        removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.scrollTop=0;
        intro.innerHTML = "<b>Das Straßennetz und die hügelige Landschaft erschweren das Gehen zu Fuß. Bei Hitzewellen erhöht sich dadurch das Auftreten von Hitzeanfällen. </b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Rampen?<br><br><b>Verschieben Sie die 5 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen. ";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/accessibility.png");
        createMarkers(5, "#EC7063");
    },
    function(){
        removeMarkers();
        info.scrollTop=0;
        intro.innerHTML = "<b>Die Anpflanzung von Bäumen sind die beste Beschattungsstrategie, die auch Verdunstungskälte bietet.</b><br>Wo werden Ihrer Meinung nach Bäume in der Stadt am meisten gebraucht? <br><br><b>Verschieben Sie die 15 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        addLogo("/icons/Trees.png");
        createMarkers(15, "#229954");
    },
    function(){
        removeMarkers();
        info.scrollTop=0;
        intro.innerHTML = "<b>Spielplätze sind ein wichtiges Umfeld für Kinder und junge Familien.</b><br> Wo werden Ihrer Meinung nach beschattete Spielplätze am meisten gebraucht? <br><br><b>Verschieben Sie die 5 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        addLogo("/icons/playground.png");
        createMarkers(5, "#F4D03F");
    }
]
function func2() { }
function func3() { }

function func4(){
    info.scrollTop=0;
    image = document.getElementById("logo");
    image.remove();
    getMarkerCoordinates(selectedElements[2]);
    removeMarkers();
    intro.innerHTML = "Danke für Ihre Teilnahme. Optional können Sie gerne einen Kommentar hinterlassen.";
    buttonSec.remove();

    input1=document.createElement("div");
    input1.id="inputs";
    info.appendChild(input1);

    var age = document.createElement("h");
    age.textContent="Alter";
    var ageInput= document.createElement("input");
    ageInput.type="text";
    ageInput.id="input";

    input2=document.createElement("div");
    input2.id="inputs";
    info.appendChild(input2);


    input3=document.createElement("div");
    input3.id="inputs";
    info.appendChild(input3);

    var comment = document.createElement("h");
    comment.textContent="Kommentar";
    var commentInput = document.createElement("input");
    commentInput.type = "text"; 
    commentInput.id="input";


    input1.appendChild(age);
    input1.appendChild(ageInput);
    input3.appendChild(comment);
    input3.appendChild(commentInput);

    
    var endButton = document.createElement("button");
    endButton.textContent = "Einreichen";
    endButton.id= "button";
    endButton.onclick = () =>{
        intro.innerHTML = "Danke für Ihre Teilnahme.";
        
        endButton.remove();
        input1.remove();
        input2.remove();
        input3.remove();
        console.log(ageInput.value);
        console.log(commentInput.value);
    };

    info.appendChild(endButton);
}
function func(){
    info.scrollTop=0;
    map = new maplibregl.Map({
        container: 'map',
        style:
        'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
        center: [13.39060554069133, 52.515834691380086],
        zoom: 14
    });

    const geojsonURL = './resources/testArea.geojson';

    // Fetch the MultiPolygon GeoJSON data from the file
    fetch(geojsonURL)
        .then((response) => response.json())
        .then((data) => {
            // Add a GeoJSON source to the map using the fetched data
            map.addSource('multipolygon-source', {
                type: 'geojson',
                data: data
            });

            // Add a layer to display the MultiPolygon data
            map.addLayer({
                id: 'multipolygon-layer',
                type: 'fill',
                source: 'multipolygon-source',
                paint: {
                    'fill-color': 'red',
                    'fill-opacity': 0.2   
                }
            });
        })
        .catch((error) => {
            console.error('Error loading MultiPolygon GeoJSON:', error);
        });

    analysis.innerHTML = "<b>Dieser Teil der Umfrage dient dazu, die allgemeine Meinung der Einwohner über den Standort und den Projektvorschlag je nach Projektthema zu ermitteln.<br>\
                            Der Standortbereich kann in der Karte dargestellt werden (in diesem Fall, rot markiert).\
                            <br>Nachfolgend finden Sie einige Beispielfragen aus einem früheren Projekt:<br><br></b>\
                            Wie oft halten Sie sich in der Innenstadt auf?<br>";
    Opt1 = createOptions(["täglich", "1- bis 2-mal wochentlich", "1- bis 2-mal im Monat", "seltener"]);
    analysis.appendChild(Opt1); 
    analysis.innerHTML+="<br>Wie empfinden Sie die Aufenthaltsqualität in der Innenstadt unter klimatischen Gesichtspunkten (z.B. Hitze und Wind) im Allgemeinen? Ich empfinde die Aufenthaltsqualität als:<br>"
    Opt2 = createOptions(["sehr unangenehm", "unangenehm", "ich weiß nicht", "gut", "sehr gut"]);
    analysis.appendChild(Opt2);
    analysis.innerHTML+="<br>Wenn Sie die Innenstadt in den Sommermonaten besuchen empfinden Sie dann sogenannten Hitzestress (z.B. Kreislaufprobleme, Kopfschmerzen, Erschöpfung)? Ich empfinde:<br>" 
    Opt3 = createOptions(["keinen Hitzestress", "wenig Hitzestress", "moderaten Hitzestress", "starken Hitzestress"]);
    analysis.appendChild(Opt3); 

    button.innerHTML="Zum nächsten Schritt"
    button.removeEventListener('click', func);
    button.addEventListener("click", e => {
        info.scrollTop=0;
        button.style.display="none";
        buttonSec.style.display="block";
        analysis.style.display="none";
        intro.style.display="block";
        divForm.style.display="block";
     });
     buttonSec.addEventListener('click', func1)
}

function funcO(){
    info.scrollTop=0;
    button.setAttribute('disabled', 'disabled');
    button.removeEventListener('click', func);
    button.addEventListener('click', func1);
    button.innerHTML="Zum nächsten Schritt"
}
function func1(){
    info.scrollTop=0;
    var image = document.createElement("img");
    image.id="logo";
    info.appendChild(image)
    buttonSec.innerHTML="Zur nächsten Maßnahme"
    
    const checkboxes = document.querySelectorAll('input[name="selectedElements"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedElements.push(parseInt(checkbox.value));
        }
    });
    console.log(selectedElements);
    intro.innerHTML=" "
    divForm.innerHTML=" ";
    
    function func2(){
        getMarkerCoordinates(selectedElements[0]);
        functionsArray[selectedElements[1]]();
    }
    function func3(){
        getMarkerCoordinates(selectedElements[1]);
        functionsArray[selectedElements[2]]();
    }
    functionsArray[selectedElements[0]]();
    buttonSec.removeEventListener('click', func1);

    const funcs = [func2, func3, func4];
    let i = 0;
    buttonSec.addEventListener("click", e => {
        funcs[i]();
        i++;
        if (i >= funcs.length) i = 0;
            
     });
}
button.addEventListener('click', func)