let tl = anime.timeline({
    duration : 3000,
    // loop: true,
    // direction: 'alternate'
    
});
tl.add({
    targets: '.title',
    keyframes: [
        { translateY: -100, opacity: 1},
    ],
    easing: 'linear',

    delay: 10000
});

