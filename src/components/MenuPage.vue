<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Facilities</h2>
    <ul>
      <li>
        <router-link tag="li" to="/3d">
          <a>3D</a>
        </router-link>
          Animation with Three.js primitives
      </li>
      <li>
        <router-link tag="li" to="/objview">
          <a>OBJ</a>
        </router-link>
          Examine OBJ image
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuPage',
  data () {
    return {
      msg: 'Ian Gillingham - 3D OBJ Metrics Framework'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
