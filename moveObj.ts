namespace Endaufgabe {
    export abstract class moveObj {
        public objectWidth: number;
        public objectHeight: number;
        public positionX: number;
        public positionY: number;
        public velocityX: number;
        public velocityY: number;
        public objectColor: string;
        public size: number;
        public min: number;
        public max: number;
        public multiplicator: number;
        public gravity: number;

        constructor (_min: number, _max: number, _multiplicator: number, _objectColor: string, _gravity: number) {
            this.multiplicator = _multiplicator;
            this.min = _min;
            this.max = _max;
            this.gravity = _gravity;
            // Gewünschte Eigenschaften der Rakete werden übernommen
            this.objectColor = _objectColor;
            this.objectWidth = randomNumberGenerator(this.min, this.max) * this.multiplicator; 
            this.objectHeight = randomNumberGenerator(this.min, this.max) * this.multiplicator;
            // Position und Richtung der Raketen werden gesetzt (Regelt die richtung in den die Kreise gehen)
            this.positionX = mouseX - this.objectWidth/ 2;
            this.positionY = mouseY - this.objectHeight / 2;
            this.velocityX = (Math.random() - 0.5) * 10;
            this.velocityY = (Math.random() - 0.7) * 10;
        }

        public move (): boolean {
            if (this.positionX >= canvas.width || this.positionY >= canvas.height) {
                return false;
            }
            else {
                return true;
            }
        }

        public abstract drawObject (): void;
    }
}