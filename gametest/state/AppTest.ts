class AppTest implements StateInterface {
    game: Phaser.Game;
    monsters: Phaser.Group;
    layer: Phaser.TilemapLayer;
    cursors: Phaser.CursorKeys;
    player: Phaser.Sprite;
    init: boolean;

    constructor()
    {
        this.init = false;
    }

    update() {
        if (this.init) {
            this.game.physics.arcade.collide(this.monsters, this.layer);
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.collide(this.player, this.monsters, this.onPlayerCollideWithMonster, undefined, this);

            this.monsters.setAll('body.velocity.x', 0);

            if (this.player.exists) {
                this.player.body.velocity.x = 0;

                if (this.cursors.up.isDown) {
                    if (this.player.body.onFloor()) {
                        this.player.body.velocity.y = -600;
                    }
                }

                if (this.cursors.left.isDown) {
                    this.player.body.velocity.x = -150;
                }
                else if (this.cursors.right.isDown) {
                    this.player.body.velocity.x = 150;
                }
            }

            if (!this.player.alive) {
                this.game.state.add("gameover", new GameOver(), true);
            }
        }
    }

    onPlayerCollideWithMonster(player: Number2D, monster: Number2D) {
        if (monster.body.touching.up) {
            monster.getNumeric().attack(player.getNumeric());
        }
        else {
            player.getNumeric().attack(monster.getNumeric());
        }
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.physics.arcade.gravity.y = 300;

        var map = this.game.add.tilemap('default');

        map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

        map.setCollisionBetween(15, 16);
        map.setCollisionBetween(20, 25);
        map.setCollisionBetween(27, 29);
        map.setCollision(40);

        var layer = map.createLayer('World1');

        this.layer = layer;

        layer.setScale(2);

        layer.smoothed = false;

        layer.resizeWorld();

        var groupTest = this.game.add.group();

       // groupTest.create(32, 32, "player");
       // groupTest.create(64, 64, "player");

        this.monsters = groupTest;

        this.addMonsters(map);

        this.addPlayer();

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.init = true;
    }

    addPlayer() {
        var player = new Number2D(this.game, new Numeric(9), 32, 32);

        this.game.add.existing(player);

        this.game.physics.enable(player);

        player.body.bounce.y = 0.2;
        player.body.gravity.y = 1000;
        player.body.maxVelocity.y = 500;
        player.body.linearDamping = 1;
        player.body.collideWorldBounds = true;

        this.player = player;

        this.game.camera.follow(player);
    }

    addMonsters(map: Phaser.Tilemap) {

        var monster;

        for (var i = 0, len = map.objects["objetsmap"].length; i < len; i++) {
            /**
            var other = this.monsters.create(map.objects["objetsmap"][i].x * 2, map.objects["objetsmap"][i].y * 2, "monster", 3, true);

            other.scale = new Phaser.Point(0.5, 0.5); 
            */

            monster = new Number2D(this.game, new Numeric(this.game.rnd.integerInRange(1, 9)), map.objects["objetsmap"][i].x * 2, map.objects["objetsmap"][i].y * 2);

            monster.anchor.setTo(0.5, 0.5);

            monster.exists = true;

            console.log("monster : " + map.objects["objetsmap"][i].x + ", " + map.objects["objetsmap"][i].y);

            this.game.physics.enable(monster);

            monster.y -= (monster.body.height / 2);
            //monster.body.bounce.y = 0.2;
            monster.body.linearDamping = 1;
            monster.body.collideWorldBounds = true;

            //sprite.body.collides([this.player]);

            this.monsters.add(monster);




        }
    }

    preload() {
        this.game.load.image('player', 'assets/sprites/phaser-dude.png');
        this.game.load.tilemap('default', 'assets/tilemaps/maps/default.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
        this.game.load.spritesheet('monster', 'assets/sprites/monster.png', 127, 127);
        this.game.load.image('particle', 'assets/sprites/particle.png');
    }
} 