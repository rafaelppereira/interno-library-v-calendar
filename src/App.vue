<template>
  <header>
    <img alt="Vue logo" src="./assets/logo.png" />
  </header>
  <div class="container">
    <div class="box">
      <Calendar />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Calendar from './components/Calendar.vue'
</script>

<style lang="scss">
  header {
    height: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 80%;
    }
  }

  .container {
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;
    padding: 0 2rem;

    .box {
      background-color: #dddddd;
      width: inherit;

      height: calc(100vh - 12rem);
      border-radius: 1rem;
      padding: 1.5rem;
    }
  }
</style>
