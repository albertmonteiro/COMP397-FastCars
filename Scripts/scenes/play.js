var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set Cloud Count
            this._carCount = 4;
            this._points = 0;
            this._carHealth = 100;
            // Instantiate Cloud array
            this._cars = new Array();
            // added ocean to the scene
            this._road = new objects.Road();
            this.addChild(this._road);
            // add the Points box the play scene
            console.log("Adding points box!");
            this._pointsBox = new objects.Button("points", 484, 5, false);
            this.addChild(this._pointsBox);
            // add the Car Health box the play scene
            console.log("Adding car health box!");
            this._pointsBox = new objects.Button("car_health", 483, 323, false);
            this.addChild(this._pointsBox);
            // added island to the scene
            this._gas = new objects.Gas();
            this.addChild(this._gas);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added cars to the scene
            for (var car = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
                this.addChild(this._cars[car]);
            }
            // Add Points label
            this._pointsLabel = new objects.Label(this._points.toString(), "14px Consolas", "#000000", 570, 70, false);
            this._pointsLabel.textAlign = "right";
            this.addChild(this._pointsLabel);
            // Add Car Health label
            this._carHealthLabel = new objects.Label(this._carHealth.toString(), "14px Consolas", "#000000", 570, 390, false);
            this._carHealthLabel.textAlign = "right";
            this.addChild(this._carHealthLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._road.update();
            this._gas.update();
            this._player.update();
            // Check if the collision is with a Gas tank
            if (this._collision.check(this._gas)) {
                this._points++;
            }
            // Update Points label
            this.removeChild(this._pointsLabel);
            this._pointsLabel = new objects.Label(this._points.toString(), "14px Consolas", "#000000", 570, 70, false);
            this._pointsLabel.textAlign = "right";
            this.addChild(this._pointsLabel);
            // Check if the collision is with another car
            this._cars.forEach(function (car) {
                car.update();
                if (_this._collision.check(car)) {
                    _this._carHealth--;
                }
            });
            // Update Car Health label
            this.removeChild(this._carHealthLabel);
            this._carHealthLabel = new objects.Label(this._carHealth.toString(), "14px Consolas", "#000000", 570, 390, false);
            this._carHealthLabel.textAlign = "right";
            this.addChild(this._carHealthLabel);
            // console.log("Points: " + this._points + " ,Car Health: " + this._carHealth);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map