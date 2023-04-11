<template>
  <div id="main">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About Me</router-link>
      <router-link :to="{ name: 'projects' }">Projects</router-link>
      <router-link :to="{ name: 'blog' }">Blog</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// export default {}
</script>

<style>
#main {
  background-color: #273469;
  height: 100vh;
}

nav {
  background-color: #1e2749;
  justify-content: space-around;
  align-items: flex-end;
  position: fixed;
  height: 10vh;
  width: 100vw;
  display: flex;
  margin-bottom: 10vh;
}
nav > * {
  color: #e4d9ff;
  font-size: 24px;
  padding-bottom: 10px;
}
</style>
