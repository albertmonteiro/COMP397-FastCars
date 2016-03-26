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
            this._carHealth = 20;
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
                if (this._carHealth <= 0) {
                    // Switch to the END Scene
                    // scene = config.Scene.END;
                    // changeScene();
                    this.endOfGame();
                }
                else {
                    this._points++;
                    // Update Points label
                    this.removeChild(this._pointsLabel);
                    this._pointsLabel = new objects.Label(this._points.toString(), "14px Consolas", "#000000", 570, 70, false);
                    this._pointsLabel.textAlign = "right";
                    this.addChild(this._pointsLabel);
                }
            }
            // Check if the collision is with another car
            this._cars.forEach(function (car) {
                car.update();
                if (_this._collision.check(car)) {
                    if (_this._carHealth <= 0) {
                        // Switch to the END Scene
                        // scene = config.Scene.END;
                        // changeScene();
                        _this.endOfGame();
                    }
                    else {
                        _this._carHealth--;
                        // Update Car Health label
                        _this.removeChild(_this._carHealthLabel);
                        _this._carHealthLabel = new objects.Label(_this._carHealth.toString(), "14px Consolas", "#000000", 570, 390, false);
                        _this._carHealthLabel.textAlign = "right";
                        _this.addChild(_this._carHealthLabel);
                    }
                }
            });
            // console.log("Points: " + this._points + " ,Car Health: " + this._carHealth);
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++
        Play.prototype.endOfGame = function () {
            console.log("Game Over!");
            this.removeChild(this._pointsLabel);
            this.removeChild(this._carHealthLabel);
            // add the gameover image
            this._gameoverImage = new objects.Button("gameover", 0, 0, false);
            this.addChild(this._gameoverImage);
            // add the final score
            this.removeChild(this._pointsLabel);
            this._finalPointsLabel = new objects.Label(this._points.toString(), "40px Consolas", "#000000", 350, 285, false);
            this._finalPointsLabel.textAlign = "right";
            this.addChild(this._finalPointsLabel);
            // add the restart pedal image
            this._restartPedal = new objects.Button("restart", 500, 300, false);
            this.addChild(this._restartPedal);
            // restart button listner
            this._restartPedal.on("click", this._restartPedalClick, this);
        };
        Play.prototype._restartPedalClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map