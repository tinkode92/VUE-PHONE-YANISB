<template>
  <nav>
    <router-link to="/">Journal</router-link> |
    <router-link to="/contacts">Contacts</router-link> |
    <router-link to="/keypad">Clavier</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a2a2a;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0d0d0d;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ff8e3c;
}
</style>
