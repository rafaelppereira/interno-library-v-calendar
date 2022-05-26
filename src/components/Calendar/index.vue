<template>
  <div class="text-center section flex flex-col items-center">
    <span
      v-for="attr in attributes"
      :key="attr[0]?.key"
    >
      {{ attr }}   
    </span>
    
    <Title />
    <Loading 
      v-if="isLoading === true"
    />
    <div class="w-full" v-else>
      <v-calendar
        :masks="masks"
        :attributes="attributes"
        class="bg-white max-w-full w-full"
        disable-page-swipe
        is-expanded
        v-model="attributes"
      >
        <template v-slot:day-content="{ day, attributes }">
          <div class="min-h-full flex flex-col h-24 z-10 overflow-hidden border border-solid border-gray-200">
            <span class="day-label text-sm text-gray-900">{{ day.day }}</span>

            <!-- Administrador -->
            <button v-if="user.office === 'administrador'" @click="handleOpenTableContentData(attributes)" class="flex-grow overflow-y-auto overflow-x-auto p-1 " >
              <span
                type="button"
                class="text-white bg-teal-500 justify-center text-xs leading-tight rounded-full p-[0.5rem] m-2 flex"
                v-show="user.office === 'administrador'"
                v-for="attr in attributes"
                :key="attr?.key"
              >
                {{ attr[0]?.customData?.title }}
              </span>

            </button>

            <!-- Usuário -->
            <div v-else class="relative flex-grow overflow-y-auto overflow-x-auto p-1 admCommand">
              <span
                v-for="attr in attributes" 
                :key="attr?.key"
                v-show="user.office != 'administrador' && attr[0]?.customData?.userId === user.id" 
                class="bg-teal-500 text-white justify-center text-xs leading-tight rounded-full p-[0.5rem] m-2 flex"
              >
                {{ attr[0]?.customData?.title }}
              </span>
              <button class="absolute inset-0 bg-sky-700 rounded-full text-white">
                Reservar agora
              </button>
            </div>
            
          </div>
        </template>
      </v-calendar>
    </div>

  </div>
</template>

<script setup>
  import Loading from '../Loading.vue';
  import Title from '../Title.vue';
</script>

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
      },
      user() {
        return this.$store.state.user;
      },
      isLoading() {
        return this.$store.state.isLoading;
      },
    },
    mounted() {
      setTimeout(() => {
        this.$store.dispatch('getAttributes', 'units');
        this.$store.dispatch('getUsers', 'users');
      }, 100)
    },
    methods: {
      handleOpenTableContentData(id) {
        this.$store.commit('OPEN_CLASSROOM_INFO', id);
      }
    }
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