<template>
  <v-container>
    <h1>Welcome to the Main Page!</h1>
    <p>Hello, {{ user.displayName }}!</p>
    <v-btn color="primary" @click="logout">Logout</v-btn>
  </v-container>
</template>

<script setup>
import { useAuth } from '@/plugin/auth';
import { ref } from 'vue';

const email = ref('');
const auth = useAuth();
const user = auth.user;

function logout() {
  auth.logout();
}
</script>
