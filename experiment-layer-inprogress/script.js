const layersBegin = document.querySelectorAll('.begin__layer');
const layersEnd = document.querySelectorAll('.end__layer');

const layOne = KUTE.allFromTo(
    [layersBegin[0], layersEnd[0]],
    { path: layersBegin[0] },
    { path: layersEnd[0] },
    { repeat: 999, duration: 3000, yoyo: true }
)
.start();

const layTwo = KUTE.allFromTo(
    [layersBegin[1], layersEnd[1]],
    { path: layersBegin[1] },
    { path: layersEnd[1] },
    { repeat: 999, duration: 3000, yoyo: true }
)
.start();

const layThr = KUTE.allFromTo(
    [layersBegin[2], layersEnd[2]],
    { path: layersBegin[2] },
    { path: layersEnd[2] },
    { repeat: 999, duration: 3000, yoyo: true }
)
.start();

const layFou = KUTE.allFromTo(
    [layersBegin[3], layersEnd[3]],
    { path: layersBegin[3] },
    { path: layersEnd[3] },
    { repeat: 999, duration: 3000, yoyo: true }
)
.start();

const layFiv = KUTE.allFromTo(
    [layersBegin[4], layersEnd[4]],
    { path: layersBegin[4] },
    { path: layersEnd[4] },
    { repeat: 999, duration: 3000, yoyo: true }
)
.start();
