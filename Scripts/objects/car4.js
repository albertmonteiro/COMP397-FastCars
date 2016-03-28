var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    var Car4 = (function (_super) {
        __extends(Car4, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Car4() {
            _super.call(this, "yellow_car");
            this._reset(this._rightBounds + 300);
            this.name = "yellow_car";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Car4.prototype._checkBounds = function (value) {
            // check to see if the top of the car 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        };
        // reset the car offscreen
        Car4.prototype._reset = function (value) {
            // Generate random speed for car
            this._speed.x = Math.floor((Math.random() * 12) + 6);
            // Generate X and Y coordinates for car
            this.x = value;
            var temp = Math.floor((Math.random() * 445) + 1);
            this.y = temp;
            // switch (temp) {
            //         case 1: this.y = 42;
            //             break;
            //         case 2: this.y = 165;
            //             break;
            //         case 3: this.y = 288;
            //             break;
            //         case 4: this.y = 405;
            //             break;
            // }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Car4.prototype.update = function () {
            // scroll the car down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Car4;
    }(objects.GameObject));
    objects.Car4 = Car4;
})(objects || (objects = {}));
//# sourceMappingURL=car4.js.map