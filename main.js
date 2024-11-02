window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('renderCanvas');
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
        const scene = new BABYLON.Scene(engine);

        // Create a camera
        const camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(0, 5, -10));
        camera.attachControl(canvas, true);

        // Create a light
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        // Create a yellow material
        const yellowMaterial = new BABYLON.StandardMaterial("yellowMaterial", scene);
        yellowMaterial.emissiveColor = new BABYLON.Color3(1, 1, 0); // Change to yellow

        // Create a box (cube)
        const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
        box.material = yellowMaterial;

        // Add a glow layer
        const glowLayer = new BABYLON.GlowLayer("glow", scene);
        glowLayer.intensity = 0.5;

        // Rotate the box
        scene.registerBeforeRender(() => {
            box.rotation.y += 0.01;
        });

        // Set the background color to black
        scene.clearColor = new BABYLON.Color3(0, 0, 0);

        return scene;
    };

    const scene = createScene();

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener('resize', () => {
        engine.resize();
    });
});
