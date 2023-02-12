var Endaufgabe;
(function (Endaufgabe) {
    class rocket extends Endaufgabe.moveObj {
        constructor(_min, _max, _multiplicator, _objectColor, _gravity) {
            super(_min, _max, _multiplicator, _objectColor, _gravity);
        }
        drawObject() {
            this.positionX += this.velocityX;
            this.positionY += this.velocityY;
            this.velocityY += this.gravity;
            Endaufgabe.crc2.save();
            Endaufgabe.crc2.beginPath();
            Endaufgabe.crc2.translate(this.positionX, this.positionY);
            Endaufgabe.crc2.arc(0, 0, this.objectWidth, 0, Math.PI * 2);
            Endaufgabe.crc2.fillStyle = this.objectColor;
            Endaufgabe.crc2.closePath();
            Endaufgabe.crc2.fill();
            Endaufgabe.crc2.restore();
        }
    }
    Endaufgabe.rocket = rocket;
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=rocket.js.map