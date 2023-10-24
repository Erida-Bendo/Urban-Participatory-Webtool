document.getElementById('coordinates');
const map = new maplibregl.Map({
    container: 'map',
    style:
    'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [7.1138, 51.0837],
    zoom: 14
});

map.on('load', function () {
    // URL to your GeoJSON file
    const geojsonURL = 'test2.geojson';
    const geojson2 = 'holeyBurscheid.geojson';

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

    fetch(geojson2)
        .then((response) => response.json())
        .then((data) => {
            // Add a GeoJSON source to the map using the fetched data
            map.addSource('2', {
                type: 'geojson',
                data: data
            });

            // Add a layer to display the MultiPolygon data
            map.addLayer({
                id: '2',
                type: 'fill',
                source: '2',
                paint: {
                    'fill-color': 'lightgrey',
                    'fill-opacity': 0.4   
                }
            });
        })
        .catch((error) => {
            console.error('Error loading MultiPolygon GeoJSON:', error);
        });

});


map.setMinZoom(12);

var markers=[];
const button = document.getElementsByClassName("btn-primary")[0];

const intro = document.getElementById("intro");
const info = document.getElementsByClassName("infoContainer")[0];
const logo=document.getElementById("icon");
const analysis = document.getElementById("analysis");

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
    markers=[];
}

function getMarkerCoordinates(type){
    for (var i = markers.length - 1; i >= 0; i--){
        var lngLat=markers[i].getLngLat();
        console.log(type+" "+i+" Longitude: "+lngLat.lng+" Latitude: "+ lngLat.lat);
    }

}
function addLogo(string){
    const logo=document.getElementById("icon");
    logo.src=string;
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
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    });
});



const divForm = document.getElementById('firstForm');
const form = document.getElementById('elementForm');
const selectedElements = [];

const functionsArray=[
    function(){
        intro.innerHTML = intro.textContent.trim();
        info.style.height="20%";
        intro.innerHTML = "<b>Bei Hitzewellen ist es wichtig, Trinkplätze anzubieten.</b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Trinkplätzen in Burscheid?<br><br><b>Verschieben Sie die 5 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/drinking.png");
        createMarkers(5, "#AED6F1");
    },
    function(){
       removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.style.height="20%";
        intro.innerHTML = "<b>Fontänen können den Komfort im Freien durch Verdunstungskühlung verbessern.</b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Fontänen in Burscheid?<br><br><b>Verschieben Sie die 4 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/fountain.png");
        createMarkers(4,"#17A589");
    },
    function(){
       removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.style.height="20%";
        intro.innerHTML = "<b>Vernebelungsanlagen sind eine Strategie zur Bekämpfung von Hitzestress, insbesondere dort, wo sich viele Menschen zusammenkommen oder vorbeigehen.</b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Vernebelungsanlagen in Burscheid ?<br><b>Verschieben Sie die 4 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/misting.png");
        createMarkers(4, "#1A5276");
    },
    function(){
      removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.style.height="20%";
        intro.innerHTML = "<b>Öffentliche Toiletten ermöglichen freie Bewegung in öffentlichen Räumen.</b><br>Wo gibt es Ihrer Meinung nach einen Bedarf an öffentlichen Toiletten in Burscheid?<br><br><b>Verschieben Sie die 4 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/restroom.png");
        createMarkers(4, "#212F3D");
    },
    function(){
       removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.style.height="20%";
        intro.innerHTML = "<b>Sitzbänke unterstützten gesunde Alltagsroutinen.</b><br> Wo werden Ihrer Meinung nach Sitzbänke am meisten gebraucht?<br><br><b>Verschieben Sie die 10 Markierungen in der Karte an die gewünschten Stellen.. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/benches.png");
        createMarkers(10, "#F5CBA7");
    },
    function(){
        removeMarkers();
        intro.innerHTML = intro.textContent.trim();
        info.style.height="20%";
        intro.innerHTML = "<b>Das Straßennetz und die hügelige Landschaft erschweren das Gehen zu Fuß. Bei Hitzewellen erhöht sich dadurch das Auftreten von Hitzeanfällen. </b><br> Wo gibt es Ihrer Meinung nach einen Bedarf an Rampen in Burscheid?<br><br><b>Verschieben Sie die 5 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen. ";
        button.innerHTML="Zum nächsten Schritt";
        addLogo("/icons/accessibility.png");
        createMarkers(5, "#EC7063");
    },
    function(){
        removeMarkers();
        info.style.height="20%";
        intro.innerHTML = "<b>Die Anpflanzung von Bäumen sind die beste Beschattungsstrategie, die auch Verdunstungskälte bietet.</b><br>Wo werden Ihrer Meinung nach Bäume in der Stadt am meisten gebraucht? <br><br><b>Verschieben Sie die 15 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        addLogo("/icons/Trees.png");
        createMarkers(15, "#229954");
    },
    function(){
        removeMarkers();
        info.style.height="20%";
        intro.innerHTML = "<b>Spielplätze sind ein wichtiges Umfeld für Kinder und junge Familien.</b><br> Wo werden Ihrer Meinung nach beschattete Spielplätze am meisten gebraucht? <br><br><b>Verschieben Sie die 5 Markierungen in der Karte an die gewünschten Stellen. Danach klicken Sie auf die Schaltfläche unten, um zum nächsten Schritt zu gelangen.";
        addLogo("/icons/playground.png");
        createMarkers(5, "#F4D03F");
    }
]
function func2() { }
function func3() { }

function func4(){
    
    logo.remove();
    getMarkerCoordinates(selectedElements[2]);
    removeMarkers();
    intro.innerHTML = "Danke für Ihre Teilnahme. Optional können Sie gerne einen Kommentar hinterlassen.";
    button.remove();

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
        intro.innerHTML = "Danke für Ihre Teilnahme. <br> <br><b>Ihre Daten wurden gesammelt.<b/> <br><br><br><br><i>Unter den folgenden Link können Sie mehr über Hitzeschutz und Hitzevorsorge in Deutschland lesen.<i/><br/>";
        
        var link = document.createElement("a");

        // Set the href attribute to specify the URL
        link.href = "https://www.staedtetag.de/themen/klimaschutz-und-energie/hitzeschutz-hitzevorsorge-staedte";

        // Set the text content for the link
        link.textContent = "Hitzeschutz und Hitzevorsorge in den Städten";
        intro.appendChild(link);


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
    
    analysis.style.display="none";
    intro.style.display="block";
    divForm.style.display="block";
    button.setAttribute('disabled', 'disabled');
    button.removeEventListener('click', func);
    button.addEventListener('click', func1);
    button.innerHTML="Zum nächsten Schritt"
}
function func1(){
   
    
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
    button.removeEventListener('click', func1);

    const funcs = [func2, func3, func4];
    let i = 0;
    button.addEventListener("click", e => {
        funcs[i]();
        i++;
        if (i >= funcs.length) i = 0;
            
     });
}
button.addEventListener('click', func)