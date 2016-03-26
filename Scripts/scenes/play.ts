// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _pointsBox: createjs.Bitmap;
        private _carHealthBox: createjs.Bitmap;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        // private _car1: objects.Car1;
        // private _car2: objects.Car2;
        // private _car3: objects.Car3;
        // private _car4: objects.Car4;
        private _cloudCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _pointsLabel: objects.Label;
        private _points:number;
        private _carHealthLabel: objects.Label;
        private _carHealth: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._cloudCount = 4;
            this._points = 0;
            this._carHealth = 100;
            
            // Instantiate Cloud array
            this._clouds = new Array<objects.Cloud>();
                
            // // added car1 to the scene
            // this._car1 = new objects.Car1();
            // this.addChild(this._car1);
            
            // // added car2 to the scene
            // this._car2 = new objects.Car2();
            // this.addChild(this._car2);
            
            // // added car3 to the scene
            // this._car3 = new objects.Car3();
            // this.addChild(this._car3);
            
            // // added car4 to the scene
            // this._car4 = new objects.Car4();
            // this.addChild(this._car4);
            
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // add the Points box the play scene
            console.log("Adding points box!");
            this._pointsBox = new objects.Button("points", 484, 5, false);
            this.addChild(this._pointsBox);
            
            // add the Car Health box the play scene
            console.log("Adding car health box!");
            this._pointsBox = new objects.Button("car_health", 483, 323, false);
            this.addChild(this._pointsBox);
            
            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added clouds to the scene
            for(var cloud:number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
               this.addChild(this._clouds[cloud]);
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
            this._ocean.update();
            this._island.update();
            
            this._player.update();
            
            // this._car1.update();
            // this._car2.update();
            // this._car3.update();
            // this._car4.update();
            
            // Check if the collision is with a Gas tank
            if (this._collision.check(this._island)) {
                this._points ++;
            }
            // Update Points label
            this.removeChild(this._pointsLabel);
            this._pointsLabel = new objects.Label(
                this._points.toString(),
                "14px Consolas",
                "#000000",
                570, 70, false);
            this._pointsLabel.textAlign = "right";
            this.addChild(this._pointsLabel);
            
            // Check if the collision is with another car
            this._clouds.forEach(cloud => {
                    cloud.update();
                    if (this._collision.check(cloud)) {
                        this._carHealth --;
                    }
                });
            // Update Car Health label
            this.removeChild(this._carHealthLabel);
            this._carHealthLabel = new objects.Label(
                this._carHealth.toString(),
                "14px Consolas",
                "#000000",
                570, 390, false);
            this._carHealthLabel.textAlign = "right";
            this.addChild(this._carHealthLabel);
            
            console.log("Points: " + this._points + " ,Car Health: " + this._carHealth);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}