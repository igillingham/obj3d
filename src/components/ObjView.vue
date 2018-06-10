<template>
  <div  v-on:input="selectfile">
    <h2>View OBJ Image File</h2>
    <div id="objcontainer" class="obj-container" ></div>
    <div id="fselbutton">
      <p>My File Selector: <SelectFile v-model="file"></SelectFile></p>
      <p v-if="file">{{file.name}}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable indent */
  import Vue from 'vue'
  import * as Three from 'three'
  import SelectFile from './SelectFile'

export default
{
  name: 'ObjView',
  components: {SelectFile},
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      file: null
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
        this.loader = new Three.ObjectLoader()

        this.fselbutton = new Vue({
          el: '#fselbutton',
          data: {
          value: ''
          }
      })
      },
      selectfile: function (arg) {
        console.log('ObjView: selectfile() callback')
        let fileuri = arg.toString()
        console.log('selectfile(): arg = ', fileuri)
        this.loadobj(fileuri)
        },
      loadobj: function (filename) {
        // load a resource
        this.loader.load(
          // resource URL
          filename,
          // called when resource is loaded
          function (object) {
            this.scene.add(object)
            },
          // called when loading is in progresses
          function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded')
            },
          // called when loading has errors
          function (error) {
            console.log('Ian - you have an error (sorry about that): %s', error)
            }
          )
        }
    },
  mounted () {
    this.init()
    // this.loadobj()
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
