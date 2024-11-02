export function createBox(scene) {
    const greenMaterial = new BABYLON.StandardMaterial("greenMaterial", scene);
    greenMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0); // Change to green

    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.material = greenMaterial;

    const glowLayer = new BABYLON.GlowLayer("glow", scene);
    glowLayer.intensity = 0.5;

    scene.registerBeforeRender(() => {
        box.rotation.y += 0.01;
    });
}
