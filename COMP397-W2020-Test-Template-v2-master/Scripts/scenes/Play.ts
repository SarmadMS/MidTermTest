module scenes

{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton: objects.Button;
        private _rollLabel: objects.Label;
        private _rollLabel2: objects.Label;
        private _rollNumber1: number;
        private _rollText1: string;
        private _rollText2: string;
        private _rollNumber2:  number;
        
        

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            //instaniate a new text object
           this._rollLabel = new objects.Label("0",  "20px", "Consolas", "#000000", 160, 270, true);
           this._rollLabel2 = new objects.Label("0",  "20px", "Consolas", "#000000", 480, 270, true);
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            
            
            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this._rollLabel);
            this.addChild(this._rollLabel2);
            this.addChild(this._rollButton);

            this._rollButton.on("click", ()=>{

                //randomizing Dice number
                this._rollNumber1 = util.Mathf.RandomRange(1,6);
                this._rollNumber2 = util.Mathf.RandomRange(1,6);

                //Converting number to string
                this._rollText1 = this._rollNumber1.toString();
                this._rollText2 = this._rollNumber1.toString();
                
                
                //Replacing Label
                this._rollLabel = new objects.Label(this._rollText1,  "20px", "Consolas", "#000000", 320, 270, true);
                this._rollLabel2 = new objects.Label(this._rollText2,  "20px", "Consolas", "#000000", 320, 270, true);


            });


        }

        
        
    }
}