<template>
  <div class=" w-full flex justify-center items-center py-5">
    <div class="w-screen max-w-6xl p-8">
      <div class="w-full">
        <Calendar />

        <Table 
          v-show="isInfoClassroom === true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Calendar from './components/Calendar/index.vue';
  import Table from './components/Table/index.vue';
</script>

<script>
  export default {
    name: 'AppView',
    computed: {
      isInfoClassroom() {
        return this.$store.state.isInfoClassroom;
      }
    }
  }
</script>


