<template>
  <div class="text-center section">
    <h2 class="text-3xl text-white">Calendário customizado</h2>
    <p class="text-lg font-medium text-gray-200 mb-6">
      Crie suas próprias tarefas com o calendário personalizado
    </p>
    <button 
      class="bg-sky-400 text-white p-2 mb-12 rounded-md"
      @click="handleFilterByCategory('extra')"
    >
      Filtrar pela categoria "extra"
    </button>
    <v-calendar
      class="bg-white max-w-full"
      :masks="masks"
      :attributes="attributes"
      :columns="$screens({ default: 1, laptop: 1 })"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class=" min-h-full flex flex-col h-24 z-10 overflow-hidden border border-solid border-gray-200">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto p-1">
            <button
              type="button"
              class="text-xs leading-tight rounded-xl p-[0.35rem] mt-0 mb-1 hover:brightness-90 transition"
              @click="handleRedirectUrl(attr.customData.title)"
              v-for="attr in attributes"
              :key="attr.key"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </button>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        masks: {
          title: 'MMMM YYYY',
          weekdays: 'WWW',
          navMonths: 'MMM',
          input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
          dayPopover: 'WWW, MMM D, YYYY',
          data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
        },
      };
    },
    computed: {
      attributes() {
        return this.$store.state.attributes;
      }
    },
    mounted() {
      this.$store.dispatch('getUsers', 'rafaelppereira');
    },
    methods: {
      handleFilterByCategory(category) {  
        this.$store.commit('GET_CATEGORY', category);
      },
      handleRedirectUrl(url) {
        const urlFormatted = url.toString().toLowerCase().split(' ').join('-');
        window.location.href = `https://app.rafaelpereira.dev/tasks/${urlFormatted}`
      },
    },
  };
</script>

<style lang="postcss" scoped>
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
</style>