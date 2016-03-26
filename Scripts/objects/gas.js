var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var Gas = (function (_super) {
        __extends(Gas, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Gas() {
            _super.call(this, "gas");
            this._speed.x = 5; //island speed
            this._reset(this._rightBounds + 100);
            this.name = "gas";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Gas.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // is outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        };
        // reset the ocean offscreen
        Gas.prototype._reset = function (value) {
            this.x = value;
            var temp = Math.floor((Math.random() * 4) + 1);
            switch (temp) {
                case 1:
                    this.y = 25;
                    break;
                case 2:
                    this.y = 145;
                    break;
                case 3:
                    this.y = 270;
                    break;
                case 4:
                    this.y = 390;
                    break;
            }
            // this.y = Math.floor(Math.random() * this._topBounds) + this._bottomBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Gas.prototype.update = function () {
            // scroll the island 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Gas;
    }(objects.GameObject));
    objects.Gas = Gas;
})(objects || (objects = {}));
//# sourceMappingURL=gas.js.map