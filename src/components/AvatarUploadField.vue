<template>
  <div>
    <v-avatar size="120" class="avatar" v-if="!previewState">
      <v-icon>mdi-account-circle</v-icon>
    </v-avatar>
    <v-avatar size="120" class="avatar" v-else>
      <img :src="previewState" alt="Avatar">
    </v-avatar>
    <input class="avatar-upload" type="file" accept="image/*" @change="onFileChange" ref="uploadAvatarInp" />
    <!-- <v-file-input v-model="file" accept="image/png, image/jpeg" @change="onFileChange" label="Select an image"
      show-size></v-file-input> -->

    <v-btn color="primary" @click="deleteImage" v-if="imageData">Delete</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const file = ref(null);
const previewState = ref(null);
const avatarState = ref(null);

const maxFileSize = 5 * 1024 * 1024; // 5 MB

function onFileChange() {
  const [file] = e.target.files || e.dataTransfer.files

  if (!file) {
    return
  }

  const validImageTypes = ['image/jpeg', 'image/png'];
  if (!validImageTypes.includes(file['type'])) {
    return;
  }

  avatarState.value = file
  const reader = new FileReader
  reader.onload = e => {
    console.log('EEE', e);
    previewState.value = e.target.result
  }
  reader.readAsDataURL(file)
}

function deleteImage() {
  file.value = null;
  imageData.value = null;
}
</script>

<style>
.avatar {
  margin: 10px;
}
</style>
