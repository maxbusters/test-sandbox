<template>
  <v-container>
    <v-card-title>Accept data</v-card-title>
    <v-form v-if="!success">
      <v-text-field v-model="formData.firstName" label="First Name" disabled></v-text-field>
      <v-text-field v-model="formData.lastName" label="Last Name" disabled></v-text-field>
      <v-text-field v-model="formData.email" label="Email" disabled></v-text-field>
      <v-text-field v-model="formData.phone" label="Phone Number" disabled></v-text-field>
      <v-text-field v-model="formData.password" label="Password" disabled></v-text-field>
      <v-text-field v-model="formData.driveLicenseCategories" label="Categories" disabled></v-text-field>
      <v-row class="my-5">

        <v-avatar v-if="formData.previewState" size="100" class="avatar">
          <img :src="formData.previewState" alt="Avatar">
        </v-avatar>
      </v-row>
      <v-btn color="primary" @click="success = true">All correct</v-btn>
      <v-btn color="green" @click="goBack()">Go back and edit</v-btn>
    </v-form>
    <v-row v-if="success">
      <v-col class="d-flex flex-row justify-center"><v-icon color="green" size="500">mdi-check</v-icon></v-col>
    </v-row>

    <h2 class="text-center" v-if="success">Success</h2>
    <v-btn color="primary" v-if="success" @click="logout">Logout</v-btn>
  </v-container>
</template>

<script setup>
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useAuth } from '@/plugins/auth';
const auth = useAuth();
const success = ref(false);
const formData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  driveLicenseCategories: [],
  previewState: '',
};
onMounted(() => {
  Object.assign(formData, JSON.parse(localStorage.getItem('formData') || '{}'));
  formData.driveLicenseCategories = formData.driveLicenseCategories.toString();
  // const reader = new FileReader
  // reader.onload = e => {
  //   formData.previewState = e.target.result
  // }
  // reader.readAsDataURL(formData.avatarState)
});

function goBack() {
  localStorage.setItem('blockEdit', 'true');
  router.go(-1);
}

function logout() {
  auth.logout();
  router.push('/login');
}
</script>
