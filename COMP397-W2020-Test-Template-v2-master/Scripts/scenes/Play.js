"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            //instaniate a new text object
            this._rollLabel = new objects.Label("0", "20px", "Consolas", "#000000", 160, 270, true);
            this._rollLabel2 = new objects.Label("0", "20px", "Consolas", "#000000", 480, 270, true);
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._rollLabel);
            this.addChild(this._rollLabel2);
            this.addChild(this._rollButton);
            this._rollButton.on("click", function () {
                //randomizing Dice number
                _this._rollNumber1 = util.Mathf.RandomRange(1, 6);
                _this._rollNumber2 = util.Mathf.RandomRange(1, 6);
                //Converting number to string
                _this._rollText1 = _this._rollNumber1.toString();
                _this._rollText2 = _this._rollNumber1.toString();
                //Replacing Label
                _this._rollLabel = new objects.Label(_this._rollText1, "20px", "Consolas", "#000000", 320, 270, true);
                _this._rollLabel2 = new objects.Label(_this._rollText2, "20px", "Consolas", "#000000", 320, 270, true);
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map