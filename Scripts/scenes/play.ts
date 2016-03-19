// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        // private _car1: objects.Car1;
        // private _car2: objects.Car2;
        // private _car3: objects.Car3;
        // private _car4: objects.Car4;
        private _cloudCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._cloudCount = 4;
            
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
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            this._collision.check(this._island);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}