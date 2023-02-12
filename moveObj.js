var Endaufgabe;
(function (Endaufgabe) {
    class moveObj {
        constructor(_min, _max, _multiplicator, _objectColor, _gravity) {
            this.multiplicator = _multiplicator;
            this.min = _min;
            this.max = _max;
            this.gravity = _gravity;
            // Gewünschte Eigenschaften der Rakete werden übernommen
            this.objectColor = _objectColor;
            this.objectWidth = Endaufgabe.randomNumberGenerator(this.min, this.max) * this.multiplicator;
            this.objectHeight = Endaufgabe.randomNumberGenerator(this.min, this.max) * this.multiplicator;
            // Position und Richtung der Raketen werden gesetzt (Regelt die richtung in den die Kreise gehen)
            this.positionX = Endaufgabe.mouseX - this.objectWidth / 2;
            this.positionY = Endaufgabe.mouseY - this.objectHeight / 2;
            this.velocityX = (Math.random() - 0.5) * 10;
            this.velocityY = (Math.random() - 0.7) * 10;
        }
        move() {
            if (this.positionX >= Endaufgabe.canvas.width || this.positionY >= Endaufgabe.canvas.height) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    Endaufgabe.moveObj = moveObj;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=moveObj.js.map