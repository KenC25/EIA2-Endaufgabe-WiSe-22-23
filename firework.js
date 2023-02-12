/*
Aufgabe: Endaufgabe WiSe22/23 Abschlussarbeit_Feuerwerk
Name: Kenan Coskun
Matrikel: 265335
Datum: 12.02.23
Quellen: Inspiration von Youtube Video (https://www.youtube.com/watch?v=TGPCukDRhBk)
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Endaufgabe;
(function (Endaufgabe) {
    // HTML Canvas Element selektieren / Höhe und Breite des Canvas einstellen
    Endaufgabe.canvas = document.querySelector("canvas");
    Endaufgabe.crc2 = Endaufgabe.canvas.getContext("2d");
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    // Event Listener installieren
    window.addEventListener("load", hndLoad);
    // Variablen deklarieren
    Endaufgabe.mouseIsClicked = false;
    Endaufgabe.mouseX = 0;
    Endaufgabe.mouseY = 0;
    Endaufgabe.rocketsArray = [];
    Endaufgabe.url = "http://s951480611.online.de/Database/";
    // Zufallszahl errechnen
    function randomNumberGenerator(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Endaufgabe.randomNumberGenerator = randomNumberGenerator;
    // Handleload aufrufen
    function hndLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(Endaufgabe.url + "?command=find&collection=Configuration&data={}");
            let getData = yield response.text();
            let data = JSON.parse(getData);
            let id = "63e80e976597d";
            console.log(id);
            Endaufgabe.canvas.width = canvasWidth;
            Endaufgabe.canvas.height = canvasHeight;
            // Event Listener installieren
            Endaufgabe.canvas.addEventListener("mousedown", clickOnDisplay);
            Endaufgabe.canvas.addEventListener("mouseup", notClickOnDisplay);
            // Funktion beim Mausklick
            function clickOnDisplay(_event) {
                // Verhindet, dass Seite neu lädt (_event.preventDefault();)
                Endaufgabe.mouseIsClicked = true;
                Endaufgabe.mouseX = _event.pageX;
                Endaufgabe.mouseY = _event.pageY;
            }
            // Function bei Mausklick lösen
            function notClickOnDisplay(_event) {
                // Verhindert, das Seite neu lädt (_event.preventDefault();)
                Endaufgabe.mouseIsClicked = false;
            }
            // Funktion um Feuerwerk zu erstellen
            function createFirework() {
                // Hier kann man einstellen, wieviel Raketen erstellt werden
                let numberOfRockets = Number(data.data[id].numberRockets);
                // Hier kann man die Farbe von der Rakete einstellen
                // For schleife kreiert so viele Raketen, wieviel Raketen angegeben wurden!
                for (let i = 0; i < numberOfRockets; i++) {
                    // Rakete wird erstellt und in Raketenarray gepusht
                    let newRocket = new Endaufgabe.rocket(0.1, 1, 5, data.data[id].color, Number(data.data[id].gravity));
                    Endaufgabe.rocketsArray.push(newRocket);
                }
            }
            // Bei Mausklick wird das Feuerwerk 
            function startFireWork() {
                // Durch den Alphawert der Hintergrundfarbe, wird der Feuerwerkseffekt erstellt
                // Hier kann man die Farbe vom Hintergrund ändern! Soll statisch bleiben!
                Endaufgabe.crc2.fillStyle = "rgba(0,0,0,0.1)";
                Endaufgabe.crc2.fillRect(0, 0, canvasWidth, canvasHeight);
                if (Endaufgabe.mouseIsClicked) {
                    createFirework();
                }
                for (let i in Endaufgabe.rocketsArray) {
                    // Hier werden die rockets aus dem rocketsArry genommen und gezeichnet
                    Endaufgabe.rocketsArray[i].drawObject();
                    Endaufgabe.rocketsArray[i].move();
                }
            }
            // Feuerwerk wird animiert (Falls es nicht funktioniert, dann wieder Codeblock wieder über ClickOnDislay verschieben)
            window.requestAnimationFrame(function animation() {
                startFireWork();
                window.requestAnimationFrame(animation);
            });
        });
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=firework.js.map