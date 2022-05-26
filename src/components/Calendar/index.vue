<template>
  <div class="text-center section flex flex-col items-center">
    <span
      v-for="attr in attributes"
      :key="attr"
    >
      {{ attr.customData.title }}
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
      >
        <template v-slot:day-content="{ day, attributes }">
          <div class="min-h-full flex flex-col h-24 z-10 overflow-hidden border border-solid border-gray-200">
            <span class="day-label text-sm text-gray-900">{{ day.day }}</span>

            <!-- Administrador -->
            <button v-if="user.office === 'administrador'" @click="handleOpenTableContentData(attributes)" class="flex-grow overflow-y-auto overflow-x-auto p-1 hover:bg-sky-700 transition-colors cursor-pointer focus:bg-sky-700" >
              <!-- <span
                type="button"
                class="bg-teal-500 justify-center text-xs leading-tight rounded-full p-[0.5rem] m-2 flex"
                v-show="user.office === 'administrador'"
                v-for="attr in attributes"
                :key="attr.key"
                :class="attr.customData.class"
              >
                {{ attr.name }}
              </span> -->

            </button>

            <!-- Usuário -->
            <div v-else class="relative flex-grow overflow-y-auto overflow-x-auto p-1 admCommand">
              <span
                v-for="attr in attributes['results']" 
                :key="attr.key"
                :class="attr.customData.class"
                v-show="user.office != 'administrador' && attr.customData.userId === user.id" 
                class="bg-teal-500 justify-center text-xs leading-tight rounded-full p-[0.5rem] m-2 flex"
              >
                {{ attr.customData.title }}
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
      }, 5000)
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

  .admCommand button {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
  }

  .admCommand:hover span {
    opacity: 0;
    visibility: hidden;

    transition: all 0.2s;
  }

  .admCommand:hover button {
    opacity: 1;
    visibility: visible;
  }
  
</style>