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
            // var temp = Math.floor((Math.random() * 4) + 1);
            // switch (temp) {
            //         case 1: super("red_car");
            //             break;
            //         case 2: super("blue_car");
            //             break;
            //         case 3: super("green_car");
            //             break;
            //         case 4: super("yellow_car");
            //             break;
            // }
            this._reset(this._rightBounds + 300);
            this.name = "car4";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Car4.prototype._checkBounds = function (value) {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        };
        // reset the cloud offscreen
        Car4.prototype._reset = function (value) {
            this._speed.x = Math.floor((Math.random() * 9) + 6);
            this.x = value;
            this.y = 390;
            // var temp = Math.floor((Math.random() * 4) + 1);
            // switch (temp) {
            //         case 1: this.y = 25;
            //             break;
            //         case 2: this.y = 145;
            //             break;
            //         case 3: this.y = 270;
            //             break;
            //         case 4: this.y = 390;
            //             break;
            // }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Car4.prototype.update = function () {
            // scroll the cloud down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Car4;
    }(objects.GameObject));
    objects.Car4 = Car4;
})(objects || (objects = {}));
//# sourceMappingURL=car4.js.map