<template>
  <div id="app">
    <video autoplay loop poster="digital-dna.jpg">
      <source src="digital-dna.webm" type="video/webm">
    </video>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    window.addEventListener('resize', this.onResize())
  },
  methods: {
    onResize () {
      this.$el.style.height = window.innerHeight + 'px'

      let video = this.$el.firstChild
      video.style.minWidth = window.innerWidth + 'px'
      video.style.minHeight = window.innerHeight + 'px'
      video.style.left = ((window.innerWidth - video.clientWidth) / 2) + 'px'
      video.style.top = ((window.innerHeight - video.clientHeight) / 2) + 'px'

      return this.onResize
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  overflow: hidden;
  // background-image: url('assets/digital-dna.jpg');
  // background-size: cover;
  // background-position: center;

  video {
    position: fixed;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
