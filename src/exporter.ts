/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="pixi.js" />
/// <reference types="gsap" />

gsap.registerPlugin(PixiPlugin);

namespace pixitween {
    export const tween = {
        ...gsap,
        easeBackIn: Back.easeIn,
        easeBackOut: Back.easeOut,
        easeBackInOut: Back.easeInOut,
        easeBounceIn: Bounce.easeIn,
        easeBounceOut: Bounce.easeOut,
        easeBounceInOut: Bounce.easeInOut,
        easeCircIn: Circ.easeIn,
        easeCircOut: Circ.easeOut,
        easeCircInOut: Circ.easeInOut,
        easeCubicIn: Cubic.easeIn,
        easeCubicOut: Cubic.easeOut,
        easeCubicInOut: Cubic.easeInOut,
        easeElasticIn: Elastic.easeIn,
        easeElasticOut: Elastic.easeOut,
        easeElasticInOut: Elastic.easeInOut,
        easeExpoIn: Expo.easeIn,
        easeExpoOut: Expo.easeOut,
        easeExpoInOut: Expo.easeInOut,
        easeLinearIn: Linear.easeIn,
        easeLinearOut: Linear.easeOut,
        easeLinearInOut: Linear.easeInOut,
        easeLinearNone: Linear.easeNone,
        easePower0In: Power0.easeIn,
        easePower0Out: Power0.easeOut,
        easePower0InOut: Power0.easeInOut,
        easePower1In: Power1.easeIn,
        easePower1Out: Power1.easeOut,
        easePower1InOut: Power1.easeInOut,
        easePower2In: Power2.easeIn,
        easePower2Out: Power2.easeOut,
        easePower2InOut: Power2.easeInOut,
        easePower3In: Power3.easeIn,
        easePower3Out: Power3.easeOut,
        easePower3InOut: Power3.easeInOut,
        easePower4In: Power4.easeIn,
        easePower4Out: Power4.easeOut,
        easePower4InOut: Power4.easeInOut,
        easeQuadIn: Quad.easeIn,
        easeQuadOut: Quad.easeOut,
        easeQuadInOut: Quad.easeInOut,
        easeQuartIn: Quart.easeIn,
        easeQuartOut: Quart.easeOut,
        easeQuartInOut: Quart.easeInOut,
        easeQuintIn: Quint.easeIn,
        easeQuintOut: Quint.easeOut,
        easeQuintInOut: Quint.easeInOut,
        easeSineIn: Sine.easeIn,
        easeSineOut: Sine.easeOut,
        easeSineInOut: Sine.easeInOut,
        easeStepped: SteppedEase,
        easeStrongIn: Strong.easeIn,
        easeStrongOut: Strong.easeOut,
        easeStrongInOut: Strong.easeInOut,
    };
}

namespace pixitween {
    PIXI['tween'] = pixitween.tween;
}
