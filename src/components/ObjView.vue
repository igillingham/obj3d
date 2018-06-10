<template>
  <div>
    <h2>View OBJ Image File</h2>
    <div id="objcontainer" class="obj-container"></div>
  </div>
</template>

<script>
  /* eslint-disable indent */

  import * as Three from 'three'


export default
{
  name: 'ObjView',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods:
    {
      init: function () {
        var container = document.getElementById('objcontainer')

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
        this.camera.position.z = 1

        this.scene = new Three.Scene()

        this.renderer = new Three.WebGLRenderer({antialias: true})
        this.renderer.setSize(container.clientWidth, container.clientHeight)
        container.appendChild(this.renderer.domElement)
        // instantiate the loader
        this.loader = new Three.ObjectLoader();

      },
      loadobj: function()
        {
        // load a resource
        this.loader.load(
          // resource URL
          '${BASE_URL}/assets/teapot.obj',
          // called when resource is loaded
          function (object)
            {
            this.scene.add(object);
            },
          // called when loading is in progresses
          function (xhr)
            {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded');
            },
          // called when loading has errors
          function (error)
            {
            console.log('An error happened');
            }
          )
        },
      animate: function ()
        {
        console.log('OBJ Image: Animate()')
        requestAnimationFrame(this.animate)
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.y += 0.02
        this.renderer.render(this.scene, this.camera)
        }
    },
  mounted ()
    {
    this.init()
    this.loadobj()
    // this.animate()
    }
  }
</script>

<style scoped>
  .obj-container {
    border: 1px;
    border-radius: 2px;
    width: 300px;
    height: 300px;
  }

</style>
