<template>
  <div>
    <h2>OBJ 3D Canvas</h2>
  <div id="container" class="canvas-container"></div>
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeCanvas',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function () {
      var container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      var geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      var material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({antialias: true})
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      console.log('ThreeCanvas: Animate()')
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>

<style scoped>
  .canvas-container {
    border: 1px;
    border-radius: 2px;
    width: 300px;
    height: 300px;
  }

</style>
