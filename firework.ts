/*
Aufgabe: Endaufgabe WiSe22/23 Abschlussarbeit_Feuerwerk
Name: Kenan Coskun
Matrikel: 265335
Datum: 12.02.23
Quellen: Inspiration von Youtube Video (https://www.youtube.com/watch?v=TGPCukDRhBk)
*/

namespace Endaufgabe {

    // HTML Canvas Element selektieren / Höhe und Breite des Canvas einstellen

    export let canvas: HTMLCanvasElement = document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    let canvasWidth: number = window.innerWidth;
    let canvasHeight: number = window.innerHeight;

    // Event Listener installieren

    window.addEventListener("load", hndLoad);

    // Variablen deklarieren

    export let mouseIsClicked: boolean = false;
    export let mouseX: number = 0;
    export let mouseY: number = 0;
    export let rocketsArray: rocket [] = [];
    export let url: string = "http://s951480611.online.de/Database/";

        // Zufallszahl errechnen

        export function randomNumberGenerator(_min: number, _max: number): number {
            return Math.random() * (_max - _min) + _min;
        }

    // Handleload aufrufen

    async function hndLoad (_event:Event): Promise<void> {

        let response: Response = await fetch(url + "?command=find&collection=Configuration&data={}");
        let getData: string = await response.text();
        let data: any = JSON.parse(getData);
        let id: string = "63e80e976597d";
        console.log(id);
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Event Listener installieren

        canvas.addEventListener("mousedown", clickOnDisplay);
        canvas.addEventListener("mouseup", notClickOnDisplay);

    // Funktion beim Mausklick

    function clickOnDisplay (_event: MouseEvent): void {

        // Verhindet, dass Seite neu lädt (_event.preventDefault();)
        mouseIsClicked = true;
        mouseX = _event.pageX;
        mouseY = _event.pageY;
    }

    // Function bei Mausklick lösen

    function notClickOnDisplay (_event: MouseEvent): void {

        // Verhindert, das Seite neu lädt (_event.preventDefault();)
        mouseIsClicked = false;
    }
    
    // Funktion um Feuerwerk zu erstellen

    function createFirework(): void{

        // Hier kann man einstellen, wieviel Raketen erstellt werden
        let numberOfRockets: number = Number(data.data[id].numberRockets);

        // Hier kann man die Farbe von der Rakete einstellen

        // For schleife kreiert so viele Raketen, wieviel Raketen angegeben wurden!

        for (let i: number = 0; i < numberOfRockets; i++) {

            // Rakete wird erstellt und in Raketenarray gepusht
            let newRocket: rocket = new rocket (0.1, 1, 5, data.data[id].color, Number(data.data[id].gravity));
            rocketsArray.push(newRocket);
        }
    }

    // Bei Mausklick wird das Feuerwerk 

    function startFireWork(): void {
        // Durch den Alphawert der Hintergrundfarbe, wird der Feuerwerkseffekt erstellt

        // Hier kann man die Farbe vom Hintergrund ändern! Soll statisch bleiben!
        crc2.fillStyle = "rgba(0,0,0,0.1)";
        crc2.fillRect(0, 0, canvasWidth, canvasHeight);

        if (mouseIsClicked) {
            createFirework();
        }

        for (let i in rocketsArray) {
            // Hier werden die rockets aus dem rocketsArry genommen und gezeichnet
            rocketsArray[i].drawObject();
            rocketsArray[i].move();
        }
    }  

    // Feuerwerk wird animiert (Falls es nicht funktioniert, dann wieder Codeblock wieder über ClickOnDislay verschieben)

    window.requestAnimationFrame(function animation() {
        startFireWork();
        window.requestAnimationFrame(animation);
    },)
} 
} 
