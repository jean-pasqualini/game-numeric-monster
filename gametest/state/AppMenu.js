/// <reference path="../dts/phaser.d.ts"/>
var AppMenu = (function () {
    function AppMenu() {
    }
    AppMenu.prototype.preload = function () {
        this.game.load.image("btn", "assets/sprites/btn.png");
    };
    AppMenu.prototype.create = function () {
        //this.game.add.button(0, 0, "btn");
        this.buttonMap = new LabelButton(this.game, 50, 50, "btn", "Map", this.onStartMap, this);
        this.button2dScrolling = new LabelButton(this.game, 50, 100, "btn", "2DScrolling", this.onStart2dScrolling, this);
    };
    AppMenu.prototype.onStartMap = function () {
        this.game.state.add('map', new GameMap(), true);
    };
    AppMenu.prototype.onStart2dScrolling = function () {
        this.game.state.add('2dScrolling', new Game2dScrolling(), true);
    };
    AppMenu.prototype.update = function () {
    };
    return AppMenu;
})();
//# sourceMappingURL=AppMenu.js.map