namespace Endaufgabe {
    export class rocket extends moveObj{

        constructor (_min: number, _max: number, _multiplicator: number, _objectColor: string, _gravity: number){
            super (_min, _max, _multiplicator, _objectColor, _gravity)
        }

        public drawObject (): void {
            this.positionX += this.velocityX;
            this.positionY += this.velocityY;
            this.velocityY += this.gravity;
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);
            crc2.arc(0, 0, this.objectWidth, 0, Math.PI * 2);
            crc2.fillStyle = this.objectColor;
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }
    }
}
