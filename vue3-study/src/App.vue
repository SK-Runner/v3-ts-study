<template>
  <nav>
    <router-link to="/setupview">setup初体验</router-link> |
    <router-link to="/refview">ref</router-link> |
    <router-link to="/reactiveview">reactive</router-link> |
    <router-link to="/setupdetailview">setup细节</router-link> |
    <router-link to="/leftcycleview">生命周期</router-link> |
    <router-link to="/hooks">自定义hook</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
