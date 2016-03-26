var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // adding background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("road"));
            this.addChild(this._backgroundImage);
            // Play Background music
            var audioFile = document.createElement("audio");
            audioFile.src = "../../Assets/audio/background.mp3";
            audioFile.loop = true;
            audioFile.play();
            //Add Menu Label
            this._menuLabel = new objects.Label("ARE YOU READY?", "60px Consolas", "#ABABAB", config.Screen.CENTER_X, config.Screen.CENTER_Y - 75, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 155, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Start button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Play Car Start sound
            var audioFile = document.createElement("audio");
            audioFile.src = "../../Assets/audio/car_start.mp3";
            audioFile.play();
            // Play Background music 
            // var audioFile = document.createElement("audio");
            // audioFile.src = "../../Assets/audio/background.mp3";
            // audioFile.loop = true;
            // audioFile.play();
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map