module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("island");
            
           this._speed.x = 5; //island speed
           this._reset(this._rightBounds + 100);
           this.name = "island";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // is outside the viewport
            if(this.x <= value) {
                this._reset(this._rightBounds + 100);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {          
            this.x = value;
            var temp = Math.floor((Math.random() * 4) + 1);
            switch (temp) {
                    case 1: this.y = 25;
                        break;
                    case 2: this.y = 145;
                        break;
                    case 3: this.y = 270;
                        break;
                    case 4: this.y = 390;
                        break;
            }
            // this.y = Math.floor(Math.random() * this._topBounds) + this._bottomBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the island 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        }
    }
}