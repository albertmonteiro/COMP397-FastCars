var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var Road = (function (_super) {
        __extends(Road, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Road() {
            _super.call(this, "road");
            this._speed.x = 5; //ocean speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Road.prototype._checkBounds = function (value) {
            // check to see if the top of the ocean 
            // is met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the ocean offscreen
        Road.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Road.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-640);
        };
        return Road;
    }(objects.GameObject));
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map