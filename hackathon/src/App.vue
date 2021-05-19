<template>
  <div id="app">
    <form class="searchbar">
      <div class="searchbar-input">
        <input id="search-input" type="search" placeholder="Type your search quary here"/>
        <button type="submit" id='searchbar-submit'>Search</button>
        <!-- <a href="#" class="searchbar-clear"></a> -->
      </div>
    </form>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/add-product">Add Product</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#search-input {
  width: 50%;
}
</style>
