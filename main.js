import { createScene } from 'scene.js';

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('renderCanvas');
    const engine = new BABYLON.Engine(canvas, true);

    const scene = createScene(engine, canvas);

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener('resize', () => {
        engine.resize();
    });
});
