<template>
  <div>
    <app-header />
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    <auth-player />
    <auth-modal />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AuthModal from '@/components/Auth.vue';
import AuthPlayer from '@/components/Player.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AuthPlayer,
  },
  created() {
    this.init_login();
  },
  methods: {
    ...mapActions(['init_login']),
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
