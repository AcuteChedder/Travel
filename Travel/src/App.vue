<script>
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Manrope', sans-serif;
}

.container {
  margin: 0 350px;
}

</style>
