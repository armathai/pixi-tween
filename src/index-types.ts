/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="pixi.js" />
/// <reference types="gsap" />

type Tween = typeof gsap & {
    easeBackIn: typeof Back.easeIn;
    easeBackOut: typeof Back.easeOut;
    easeBackInOut: typeof Back.easeInOut;
    easeBounceIn: typeof Bounce.easeIn;
    easeBounceOut: typeof Bounce.easeOut;
    easeBounceInOut: typeof Bounce.easeInOut;
    easeCircIn: typeof Circ.easeIn;
    easeCircOut: typeof Circ.easeOut;
    easeCircInOut: typeof Circ.easeInOut;
    easeCubicIn: typeof Cubic.easeIn;
    easeCubicOut: typeof Cubic.easeOut;
    easeCubicInOut: typeof Cubic.easeInOut;
    easeElasticIn: typeof Elastic.easeIn;
    easeElasticOut: typeof Elastic.easeOut;
    easeElasticInOut: typeof Elastic.easeInOut;
    easeExpoIn: typeof Expo.easeIn;
    easeExpoOut: typeof Expo.easeOut;
    easeExpoInOut: typeof Expo.easeInOut;
    easeLinearIn: typeof Linear.easeIn;
    easeLinearOut: typeof Linear.easeOut;
    easeLinearInOut: typeof Linear.easeInOut;
    easeLinearNone: typeof Linear.easeNone;
    easePower0In: typeof Power0.easeIn;
    easePower0Out: typeof Power0.easeOut;
    easePower0InOut: typeof Power0.easeInOut;
    easePower1In: typeof Power1.easeIn;
    easePower1Out: typeof Power1.easeOut;
    easePower1InOut: typeof Power1.easeInOut;
    easePower2In: typeof Power2.easeIn;
    easePower2Out: typeof Power2.easeOut;
    easePower2InOut: typeof Power2.easeInOut;
    easePower3In: typeof Power3.easeIn;
    easePower3Out: typeof Power3.easeOut;
    easePower3InOut: typeof Power3.easeInOut;
    easePower4In: typeof Power4.easeIn;
    easePower4Out: typeof Power4.easeOut;
    easePower4InOut: typeof Power4.easeInOut;
    easeQuadIn: typeof Quad.easeIn;
    easeQuadOut: typeof Quad.easeOut;
    easeQuadInOut: typeof Quad.easeInOut;
    easeQuartIn: typeof Quart.easeIn;
    easeQuartOut: typeof Quart.easeOut;
    easeQuartInOut: typeof Quart.easeInOut;
    easeQuintIn: typeof Quint.easeIn;
    easeQuintOut: typeof Quint.easeOut;
    easeQuintInOut: typeof Quint.easeInOut;
    easeSineIn: typeof Sine.easeIn;
    easeSineOut: typeof Sine.easeOut;
    easeSineInOut: typeof Sine.easeInOut;
    easeStepped: typeof SteppedEase;
    easeStrongIn: typeof Strong.easeIn;
    easeStrongOut: typeof Strong.easeOut;
    easeStrongInOut: typeof Strong.easeInOut;
};

namespace pixitween {
    export const tween: Tween = null;
}
