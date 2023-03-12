const tween = KUTE.fromTo(
    '#layer-o',
    { path: '#layer-o' },
    { path: '#layer-t' },
    { repeat: 999, duration: 3000, yoyo: true }
)
.start();