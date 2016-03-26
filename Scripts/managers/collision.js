var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        // CONSTRUCTOR ++++++++++++++++
        function Collision(player) {
            this._points = 0;
            this._carHealth = 100;
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's another car
                if (object.name === "island") {
                    // this._points ++;
                    // console.log("Points: " + this._points);
                    // this._pointsLabel = new objects.Label(
                    //     this._points.toString(),
                    //     "14px Consolas",
                    //     "#ff0000", 
                    //     426, 100, false);
                    // this._pointsLabel.textAlign = "right";
                    // this.addChild(this._pointsLabel);
                    // return this._points;
                    return true;
                }
                // check if it's a gas tank
                if (object.name === "blue_car") {
                    // this._carHealth --;
                    // console.log("Car Health: " + this._carHealth);
                    // this._carHealthLabel = new objects.Label(
                    //     this._carHealth.toString(),
                    //     "14px Consolas",
                    //     "#ff0000", 
                    //     426, 100, false);
                    // this._carHealthLabel.textAlign = "right";
                    // this.addChild(this._carHealthLabel);
                    // return this._carHealth;
                    return true;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map