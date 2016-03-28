// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _pointsBox: createjs.Bitmap;
        private _carHealthBox: createjs.Bitmap;
        private _gas: objects.Gas;
        private _carCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _pointsLabel: objects.Label;
        private _points:number;
        private _carHealthLabel: objects.Label;
        private _carHealth: number;
        private _gameoverImage: createjs.Bitmap;
        private _finalPointsLabel: objects.Label;
        private _restartPedal: createjs.Bitmap;
        private _cars: objects.Car[];
        private _cars2: objects.Car2[];
        private _cars3: objects.Car3[];
        private _cars4: objects.Car4[];
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set car Count, points, car health
            this._carCount = 2;
            this._points = 0;
            this._carHealth = 20;
            
            // added road to the scene
            this._road = new objects.Road();
            this.addChild(this._road);

            // add the Points box the play scene
            this._pointsBox = new objects.Button("points", 484, 5, false);
            this.addChild(this._pointsBox);
            
            // add the Car Health box the play scene
            this._carHealthBox = new objects.Button("car_health", 483, 323, false);
            this.addChild(this._carHealthBox);
            
            // added gas tank to the scene
            this._gas = new objects.Gas();
            this.addChild(this._gas);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // Add red cars
            this._cars = new Array<objects.Car>();
            for(var car:number = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
                this.addChild(this._cars[car]);
            }
            
            // Add blue cars
            this._cars2 = new Array<objects.Car2>();
            for(var car:number = 0; car < this._carCount; car++) {
                this._cars2[car] = new objects.Car2();
                this.addChild(this._cars2[car]);
            }
            
            // Add green cars
            this._cars3 = new Array<objects.Car3>();
            for(var car:number = 0; car < this._carCount; car++) {
                this._cars3[car] = new objects.Car3();
                this.addChild(this._cars3[car]);
            }
            
            // Add yellow cars
            this._cars4 = new Array<objects.Car4>();
            for(var car:number = 0; car < this._carCount; car++) {
                this._cars4[car] = new objects.Car4();
                this.addChild(this._cars4[car]);
            }
            
            // Add Points label
            this._pointsLabel = new objects.Label(
                this._points.toString(),
                "14px Consolas",
                "#000000",
                570, 70, false);
            this._pointsLabel.textAlign = "right";
            this.addChild(this._pointsLabel);
            
            // Add Car Health label
            this._carHealthLabel = new objects.Label(
                this._carHealth.toString(),
                "14px Consolas",
                "#000000",
                570, 390, false);
            this._carHealthLabel.textAlign = "right";
            this.addChild(this._carHealthLabel);
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
            this._gas.update();
            
            this._player.update();
            
            // Check if the collision is with a Gas tank
            if (this._collision.check(this._gas)) {
                if (this._carHealth <= 1 || this._points >= 1000) {
                    this.endOfGame();
                }
                else {
                    // Play Points sound
                    var audioFile = document.createElement("audio");
                    audioFile.src = "../../Assets/audio/gastank_point.mp3";
                    audioFile.play();
                    // Increment points variable
                    this._points++;
                    // Update Points label
                    this.removeChild(this._pointsLabel);
                    this._pointsLabel = new objects.Label(
                        this._points.toString(),
                        "14px Consolas",
                        "#000000",
                        570, 70, false);
                    this._pointsLabel.textAlign = "right";
                    this.addChild(this._pointsLabel);
                }
            }
            
            // Check if the collision is with a red car
            this._cars.forEach(car => {
                car.update();
                if (this._collision.check(car)) {
                    if (this._carHealth <= 1) {
                        this.endOfGame();
                    }
                    else {
                        // Play car crash sound
                        var audioFile = document.createElement("audio");
                        audioFile.src = "../../Assets/audio/car_crash.mp3";
                        audioFile.play();
                        // Decrement car health variable
                        this._carHealth--;
                        // Update Car Health label
                        this.removeChild(this._carHealthLabel);
                        this._carHealthLabel = new objects.Label(
                            this._carHealth.toString(),
                            "14px Consolas",
                            "#000000",
                            570, 390, false);
                        this._carHealthLabel.textAlign = "right";
                        this.addChild(this._carHealthLabel);
                    }
                }
            });
            
            // Check if the collision is with a blue car
            this._cars2.forEach(car => {
                car.update();
                if (this._collision.check(car)) {
                    if (this._carHealth <= 1) {
                        this.endOfGame();
                    }
                    else {
                        // Play car crash sound
                        var audioFile = document.createElement("audio");
                        audioFile.src = "../../Assets/audio/car_crash.mp3";
                        audioFile.play();
                        // Decrement car health variable
                        this._carHealth--;
                        // Update Car Health label
                        this.removeChild(this._carHealthLabel);
                        this._carHealthLabel = new objects.Label(
                            this._carHealth.toString(),
                            "14px Consolas",
                            "#000000",
                            570, 390, false);
                        this._carHealthLabel.textAlign = "right";
                        this.addChild(this._carHealthLabel);
                    }
                }
            });
            
            // Check if the collision is with a green car
            this._cars3.forEach(car => {
                car.update();
                if (this._collision.check(car)) {
                    if (this._carHealth <= 1) {
                        this.endOfGame();
                    }
                    else {
                        // Play car crash sound
                        var audioFile = document.createElement("audio");
                        audioFile.src = "../../Assets/audio/car_crash.mp3";
                        audioFile.play();
                        // Decrement car health variable
                        this._carHealth--;
                        // Update Car Health label
                        this.removeChild(this._carHealthLabel);
                        this._carHealthLabel = new objects.Label(
                            this._carHealth.toString(),
                            "14px Consolas",
                            "#000000",
                            570, 390, false);
                        this._carHealthLabel.textAlign = "right";
                        this.addChild(this._carHealthLabel);
                    }
                }
            });
            
            // Check if the collision is with a blue car
            this._cars4.forEach(car => {
                car.update();
                if (this._collision.check(car)) {
                    if (this._carHealth <= 1) {
                        this.endOfGame();
                    }
                    else {
                        // Play car crash sound
                        var audioFile = document.createElement("audio");
                        audioFile.src = "../../Assets/audio/car_crash.mp3";
                        audioFile.play();
                        // Decrement car health variable
                        this._carHealth--;
                        // Update Car Health label
                        this.removeChild(this._carHealthLabel);
                        this._carHealthLabel = new objects.Label(
                            this._carHealth.toString(),
                            "14px Consolas",
                            "#000000",
                            570, 390, false);
                        this._carHealthLabel.textAlign = "right";
                        this.addChild(this._carHealthLabel);
                    }
                }
            });
            
            // console.log("Points: " + this._points + " ,Car Health: " + this._carHealth);
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++++++
        
        private endOfGame(): void {
            // console.log("Game Over!");
            this.removeChild(this._pointsLabel);
            this.removeChild(this._carHealthLabel);
            
            // add the gameover image
            this._gameoverImage = new objects.Button("gameover", 0, 0, false);
            this.addChild(this._gameoverImage);
            
            // add the final score
            this.removeChild(this._pointsLabel);
            this._finalPointsLabel = new objects.Label(
                this._points.toString(),
                "40px Consolas",
                "#000000",
                350, 285, false);
            this._finalPointsLabel.textAlign = "right";
            this.addChild(this._finalPointsLabel);
            
            // add the restart pedal image
            this._restartPedal = new objects.Button("restart", 500, 300, false);
            this.addChild(this._restartPedal);
            // restart button listner
            this._restartPedal.on("click", this._restartPedalClick, this); 
        }
        
        private _restartPedalClick(event: createjs.MouseEvent): void {
            // Play Car Rev (restart) sound
            var audioFile = document.createElement("audio");
            audioFile.src = "../../Assets/audio/car_rev.mp3";
            audioFile.play();
            
            // Reset to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
    }
}