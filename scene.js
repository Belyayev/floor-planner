import { createCamera } from './camera.js';
import { createLight } from './light.js';
import { createBox } from './box.js';

export function createScene(engine, canvas) {
    const scene = new BABYLON.Scene(engine);

    createCamera(scene, canvas);
    createLight(scene);
    createBox(scene);

    scene.clearColor = new BABYLON.Color3(0, 0, 0);

    return scene;
}
