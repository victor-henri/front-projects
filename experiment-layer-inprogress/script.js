const layersBegin = document.querySelectorAll('.begin__layer');
const layersEnd = document.querySelectorAll('.end__layer');

for (let i = 0; i < layersBegin.length; i++) {
  KUTE.allFromTo(
    [layersBegin[i], layersEnd[i]],
    { path: layersBegin[i] },
    { path: layersEnd[i] },
    { repeat: 999, duration: 3000, yoyo: true }
  ).start();
}