
if (window.innerWidth > 992) {
    var controller = new ScrollMagic.Controller();

    var setMultipleClasses = TweenMax.set('.products__block', {
        className: "products__block active"
    });
    var tween = TweenMax.to(".products__title", 0.5, { css: 'transform:translate(0,0);', ease: Linear.easeNone });
    var tween2 = TweenMax.to(".call__cloud", 0.5, { css: 'top:0;', ease: Linear.easeNone });
    var tween3 = TweenMax.to(".main__img", 1, { css: 'top:265px;', ease: Linear.easeNone });

    var tween6 = TweenMax.to(".key__img img", 1, { css: 'transform:scale(1.2);', ease: Linear.easeNone });
    var tween4 = TweenMax.to(".cats__block2", 1, { css: 'transform:translateY(0vh);opacity:1;', ease: Linear.easeNone });
    var tween5 = TweenMax.to(".cats__block3", 1, { css: 'transform:translateY(0vh);opacity:1;', ease: Linear.easeNone });

    new ScrollMagic.Scene({ triggerElement: ".products", triggerHook: 'onEnter', duration: 500, offset: 0 })
        .setTween(tween)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".products__block", triggerHook: 'onEnter', offset: 200 })
        .setTween(setMultipleClasses)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".call__wrap", triggerHook: 'onEnter', duration: 600, offset: 100 })
        .setTween(tween2)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".main__wrap", triggerHook: 'onLeave', duration: 300, offset: -180 })
        .setTween(tween3)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".cats", triggerHook: 'onLeave', duration: 1000, offset: 0 })
        .setPin(".cats")
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".cats", triggerHook: 'onLeave', duration: 500, offset: 0 })
        .setTween(tween4)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".cats", triggerHook: 'onLeave', duration: 500, offset: 500 })
        .setTween(tween5)
        .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: ".key__img", triggerHook: 'onEnter', duration: 500, offset: 500 })
        .setTween(tween6)
        .addTo(controller);
}