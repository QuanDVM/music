<template>
  <div>
    <app-header />

    <router-view></router-view>

    <auth-player />
    <auth-modal />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AuthModal from '@/components/Auth.vue';
import AuthPlayer from '@/components/Player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AuthPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
