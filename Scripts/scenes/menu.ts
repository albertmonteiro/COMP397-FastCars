// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _backgroundImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // adding background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("road"));
            this.addChild(this._backgroundImage);
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "ARE YOU READY?", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 75, true);
            this.addChild(this._menuLabel);
            
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X + 200,
                config.Screen.CENTER_Y + 155, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }

    }
}