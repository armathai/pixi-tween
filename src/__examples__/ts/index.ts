/// <reference types="../../../bin/pixi-tween.js" />
/// <reference types="pixi.js" />
import '../../../bin/pixi-tween';

class Game extends PIXI.Application {
    public constructor() {
        super({ resizeTo: window, backgroundColor: 0x000000 });
        document.getElementById('gameContainer').appendChild(this.view);
    }

    public async init(): Promise<void> {
        const graphics = new PIXI.Graphics();
        graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.beginFill(0xde3249, 1);
        graphics.drawCircle(0, -50, 50);
        graphics.endFill();
        graphics.y = this.renderer.height * 0.2;
        graphics.x = this.renderer.width * 0.5;
        this.stage.addChild(graphics);
        const dur = 4;
        PIXI.tween.to(graphics, { y: this.renderer.height, duration: dur, ease: PIXI.tween.easeBounceOut });
        PIXI.tween.to(graphics, {
            pixi: { scaleY: 0.95 },
            duration: dur * 0.003,
            delay: dur * 0.37,
            ease: PIXI.tween.easeBackOut,
            yoyo: true,
            repeat: 1,
        });
        PIXI.tween.to(graphics, {
            pixi: { scaleX: 0.95 },
            duration: dur * 0.003,
            delay: dur * 0.37 + 2 * dur * 0.003,
            ease: PIXI.tween.easeBackOut,
            yoyo: true,
            repeat: 1,
        });

        // PIXI.tween.to(graphics, { pixi: { scaleY: 0.8 }, duration: dur * 0.001, delay: dur * 0.37 });
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const game = new Game();
        game.init();
    }
};
