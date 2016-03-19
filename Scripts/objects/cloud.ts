module objects {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("blue_car")
            
           this._reset(this._rightBounds + 300);
           this.name = "blue_car";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        }
        
        // reset the cloud offscreen
        protected _reset(value:number):void {
            
            this._speed.x = Math.floor((Math.random() * 9) + 6);
            this.x = value;
            // this.y = 25;
            var temp = Math.floor((Math.random() * 4) + 1);
            switch (temp) {
                    case 1: this.y = 42;
                        break;
                    case 2: this.y = 165;
                        break;
                    case 3: this.y = 288;
                        break;
                    case 4: this.y = 405;
                        break;
            }
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cloud down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        }
    }
}