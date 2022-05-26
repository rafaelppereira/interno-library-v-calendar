<template>
  <h2 class="text-3xl text-white">Calendário customizado</h2>
  <div v-if="isLoading" class="mb-12 mt-3 rounded-full bg-slate-700 h-3 w-[200px] animate-pulse"></div>

  <p class="text-lg font-regular text-gray-200 mb-8" v-else>
    {{ user.name }}! você tem sala(s) disponíveis.
  </p>

  <select class="mb-12 h-8 px-2 text-gray-500 rounded-lg w-[360px]" v-model="unity">
    <option value="" disabled selected>Selecione uma unidade</option>
    <option value="RJ">Rio de janeiro</option>
    <option value="SP">São Paulo</option>
  </select>
</template>

<script>
  export default {
    name: 'TitleItem',
    data() {
      return {
      }
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      isLoading() {
        return this.$store.state.isLoading;
      },
      unity: {
        get() {
          return this.$store.state.unity;
        },
        set(value) { 
          this.$store.commit('CHANGE_UNITY_SELECT', value);
          this.$store.dispatch('getAttributes', 'units');
        }
      }
    }
  }
</script>