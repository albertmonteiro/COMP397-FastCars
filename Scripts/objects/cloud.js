var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Cloud() {
            _super.call(this, "blue_car");
            this._reset(this._rightBounds + 300);
            this.name = "blue_car";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function (value) {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        };
        // reset the cloud offscreen
        Cloud.prototype._reset = function (value) {
            this._speed.x = Math.floor((Math.random() * 9) + 6);
            this.x = value;
            // this.y = 25;
            var temp = Math.floor((Math.random() * 4) + 1);
            switch (temp) {
                case 1:
                    this.y = 42;
                    break;
                case 2:
                    this.y = 165;
                    break;
                case 3:
                    this.y = 288;
                    break;
                case 4:
                    this.y = 405;
                    break;
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            // scroll the cloud down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map