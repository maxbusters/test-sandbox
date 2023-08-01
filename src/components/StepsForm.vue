<template>
  <v-container>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-text-field v-model="firstName" label="First Name" required :rules="nameRules"></v-text-field>
      <v-text-field v-model="lastName" label="Last Name" required :rules="nameRules"></v-text-field>
      <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
      <v-text-field v-model="phone" label="Phone Number" required :rules="phoneRules"></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" required :rules="passwordRules"></v-text-field>
      <v-select v-model="driveLicenseCategories" :items="driveLicenseOptions" :rules="[validateCategories]"
        label="Drive License Categories" multiple required></v-select>
      <v-btn color="primary" type="submit" :disabled="!valid">Send</v-btn>
      <v-row class="my-5">
        <v-avatar size="100" class="avatar" v-if="!previewState">
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        <v-avatar size="100" class="avatar" v-else>
          <img :src="previewState" alt="Avatar">
        </v-avatar>
      </v-row>
      <v-row><v-file-input v-model="file" accept="image/*" @change="onFileChange" @click:clear="deleteImage()"
          :rules="avatarRules" label="Select an image" show-size></v-file-input>
        <v-btn color="primary" @click="deleteImage" v-if="imageData">Delete</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import router from '@/router';
import { onMounted, ref } from 'vue';
const valid = ref(false);
const file = ref<any>(null);
const imageData = ref<any>(null);
const isDeleted = ref<boolean>(false);

const maxFileSize = 5 * 1024 * 1024; // 5 MB
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref(''); // static +380 start of the number
const password = ref('');
const driveLicenseCategories = ref([]);
const previewState = ref<any>(null);
const avatarState = ref<any>(null);
const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => v.length !== 245 || 'Max length is 228 characters',
  (v: string) => v.length >= 1 && v.length < 255 || 'Max length is 255 characters'
];
const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /^[^@]*@[^@]*$/.test(v) || 'Email must be valid'
];
const phoneRules = [(v: string) => !!v || 'Phone number is required'];
const passwordRules = [(v: string) => !!v || 'Password is required', (v: string) => v.length >= 5 || 'Min length is 5'];
const avatarRules = [(v: string) => !!v || 'Avatar is required'];
/**A - Motorcycle
A1 - Motorcycle (up to 125cc)
B - Car and Light Truck
BE - Car and Trailer
C - Trucks (up to 16 tons)
CE - Trucks and Trailer
D - Buses and Passenger Vehicles
DE - Buses and Passenger Vehicles with Trailer
M - Moped */
const driverLicenseCategoriesUkraine2022 = [
  'A',
  'A1',
  'B',
  'BE',
  'C',
  'CE',
  'D',
  'DE',
  'M',
];
const driveLicenseOptions = ref(['A', 'B', 'C', 'D', 'E', 'F', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2',]);

const blockEdit = localStorage.getItem('blockEdit');
function onFileChange(e: any) {
  const [file] = e.target.files || e.dataTransfer.files

  if (!file) {
    deleteImage();
    return
  }

  const validImageTypes = ['image/jpeg', 'image/png'];
  if (!validImageTypes.includes(file['type'])) {
    alert('Invalid file type. Must be ... (try to find out the write answer by manual tesing if you are not loser)');
    return;
  }

  avatarState.value = file
  const reader = new FileReader
  reader.onload = e => {
    if (file.size > maxFileSize) {
      alert('MAX FILE SIZE IS 5MB')
      deleteImage();
      return;
    }
    if (!validImageTypes.includes(file['type'])) {
      // alert('Invalid file type. Must be ... (try to find out the write answer by manual tesing if you are not loser)');
      deleteImage();
      return;
    }
    if (isDeleted.value === true) {
      deleteImage();
      return;
    }
    previewState.value = e.target?.result
  }
  reader.readAsDataURL(file)
}

function deleteImage() {
  isDeleted.value = true;
  file.value = null;
  previewState.value = null;
}


function validateCategories(value: string[]) {
  if (!value || value.length === 0) {
    return 'Select at least one category';
  }

  for (const category of value) {
    if (!driverLicenseCategoriesUkraine2022.includes(category)) {
      return 'Invalid category selected';
    }
  }

  return true;
}

function submit() {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    driveLicenseCategories: driveLicenseCategories.value,
    previewState: previewState.value,
    avatarState: avatarState.value,
  }
  if (blockEdit !== 'true') {
    localStorage.setItem('formData', JSON.stringify(formData))
  }
  //, lastName.value, email.value, phone.value, password.value, driveLicenseCategories.value, previewState.value });
  router.push('/accept')
  // Handle form submission for step 2
}

onMounted(() => {
  if (blockEdit === 'true') {
    const formData = JSON.parse(localStorage.getItem('formData') || '{}');
    firstName.value = formData.firstName;
    lastName.value = formData.lastName;
    email.value = formData.email;
    phone.value = formData.phone;
    password.value = formData.password;
    driveLicenseCategories.value = formData.driveLicenseCategories;
    previewState.value = formData.previewState;
    avatarState.value = formData.avatarState;
  }
});
</script>
