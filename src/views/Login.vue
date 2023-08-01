<template>
  <v-container class="text-center">
    <v-form @submit.prevent="login">
      <v-card-title>Login</v-card-title>
      <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
      <v-btn color="primary" type="submit">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/plugins/auth';

const email = ref('');
const password = ref('');

const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
];

function login() {
  // Perform login logic using the authentication module from Firebase
  const auth = useAuth();
  auth.login(email.value, password.value);
}
</script>
