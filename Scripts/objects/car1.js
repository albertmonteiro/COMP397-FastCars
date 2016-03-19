var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    var Car1 = (function (_super) {
        __extends(Car1, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Car1() {
            _super.call(this, "red_car");
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
            this.name = "car1";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Car1.prototype._checkBounds = function (value) {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        };
        // reset the cloud offscreen
        Car1.prototype._reset = function (value) {
            this._speed.x = Math.floor((Math.random() * 9) + 6);
            this.x = value;
            this.y = 25;
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
        Car1.prototype.update = function () {
            // scroll the cloud down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Car1;
    }(objects.GameObject));
    objects.Car1 = Car1;
})(objects || (objects = {}));
//# sourceMappingURL=car1.js.map