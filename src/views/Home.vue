<template>
  <v-container>
    <h1>Welcome to the Main Page!</h1>
    <p v-if="user">Hello, {{ user.email }}!</p>
    <v-btn color="primary" @click="logout">Logout</v-btn>
    <steps-form></steps-form>
  </v-container>
</template>

<script setup>
import StepsForm from '@/components/StepsForm.vue';
import { useAuth } from '@/plugins/auth';
import { ref, onMounted } from 'vue';
import router from '@/router';

const email = ref('');
const auth = useAuth();
const user = auth.user;

onMounted(() => {
  console.log('TEST', user.value);
  if (!user.value) {
    router.push('/login');
  }
});

function logout() {
  auth.logout();
  router.push('/login');
}
</script>


