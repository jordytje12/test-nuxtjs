<template>
  <div ref="threeCanvas" class="three-container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { onMounted, ref } from 'vue';

const threeCanvas = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!threeCanvas.value) return;

  // Scene, Camera en Renderer instellen
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  // Renderer aan de DOM toevoegen
  renderer.setSize(window.innerWidth, window.innerHeight);
  threeCanvas.value.appendChild(renderer.domElement);

  // Een voorbeeld-kubus
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  // Animatielus
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
});
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
