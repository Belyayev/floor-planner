export function createBox(scene) {
    const greenMaterial = new BABYLON.StandardMaterial("blueMaterial", scene);
    greenMaterial.emissiveColor = new BABYLON.Color3(0, 0, 1); // Change to green

    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 3 }, scene);
    box.material = greenMaterial;

    const glowLayer = new BABYLON.GlowLayer("glow", scene);
    glowLayer.intensity = 0.5;

    scene.registerBeforeRender(() => {
        box.rotation.y += 0.01;
    });
}
