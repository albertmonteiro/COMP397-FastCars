module objects {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    export class Car3 extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("green_car")
            
           this._reset(this._rightBounds + 300);
           this.name = "green_car";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the car 
            // is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        }
        
        // reset the car offscreen
        protected _reset(value:number):void {
            // Generate random speed for car
            this._speed.x = Math.floor((Math.random() * 12) + 6);
            // Generate X and Y coordinates for car
            this.x = value;
            var temp = Math.floor((Math.random() * 445) + 1);
            this.y = temp;
            // switch (temp) {
            //         case 1: this.y = 42;
            //             break;
            //         case 2: this.y = 165;
            //             break;
            //         case 3: this.y = 288;
            //             break;
            //         case 4: this.y = 405;
            //             break;
            // }
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the car down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        }
    }
}