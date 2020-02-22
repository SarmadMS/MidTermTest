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
            //this._rollButton = new objects.Button(config.Game.ASSETS.getResult("roll"), 320, 430, true);
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
                _this._rollLabel = new objects.Label("5", "20px", "Consolas", "#000000", 160, 270, true);
            });
        };
        Play.prototype.Randomizer = function () {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map