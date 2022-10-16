<template>
  <div>
  <nav>
    <router-link :to="{name:'Home'}" class="logo" >
      <span class="material-icons">
        eco
      </span>
    </router-link>
  </nav>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @font-face {
    font-family: "nvanumburi";
    src: url("assets/MaruBuri-Regular.woff2") format("woff2");
  }
  body {
    font-family: "nanumburi";
    margin: 0 auto;
    padding: 0;
  }
  nav {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .logo {
    float: left;
    width: 0;
  }
</style>
