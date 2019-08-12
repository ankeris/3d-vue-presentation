<template>
  <div id="app">
    <div id="nav">
      <img class="logo" alt="Vue logo" src="./assets/logo.png" />
      <router-link to="/">Logo</router-link>
      <router-link to="/about">Build your own</router-link>
      <router-link to="/loops">Loops</router-link>
      <router-link to="/entities">Entities</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin: 20px auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content:space-between;
}
#nav a {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 15px;
    text-decoration: none;
    color: black;
}
#nav a:hover {
  background-color: rgba(0,0,0,0.1);
}
.logo {
  width: 45px;
}
canvas {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>
