export function createBox(scene) {
    const redMaterial = new BABYLON.StandardMaterial("redMaterial", scene);
    redMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0);

    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.material = redMaterial;

    const glowLayer = new BABYLON.GlowLayer("glow", scene);
    glowLayer.intensity = 0.5;

    scene.registerBeforeRender(() => {
        box.rotation.y += 0.01;
    });
}
