<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'

const response_value = ref('')

interface type {
  email: string
  username: string
  password: string
}

const login: type = reactive(
  {
    username: '',
    password: '',
    email: ''
  })
const errorValue = ref('')
const detailError = ref('')
const loading = ref<boolean>(false)
const submit = () => {
  loading.value = true
  axios.post('http://127.0.0.1:8001/auth/users/', {
    email: login.email,
    username: login.username,
    password: login.password
  }).then((response) => {
    response = response_value.value
    loading.value = false
    detailError.value = ''
    errorValue.value = ''
    login.email = ''
    login.username = ''
    login.password = ''
  }).catch((error) => {
    if (error.response.data.password) {
      detailError.value = error.response.data
    } else {
      errorValue.value = error.response.data
    }

  }).finally(() => {
    loading.value = false
  })
}
</script>

<template>
  <div class="tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center">
    <div class="tw-flex tw-flex-col tw-w-1/2 tw-gap-2">
      <h1 class="tw-text-center tw-text-3xl tw-font-bold">Create Account</h1>
      <div class="tw-text-center tw-text-sm tw-font-light tw-mb-10 tw-text-purple-900">
        sign In and start managing your daily routine
      </div>
      <label class="input">
        <i class="fa fa-envelope tw-mr-2" />
        <input v-model="login.email" placeholder="Email" type="text" class="input-value" />
      </label>

      <label class="input">
        <i class="fa fa-user tw-mr-2" />
        <input v-model="login.username" placeholder="Username" type="text" class="input-value" />
      </label>
      <div v-if="errorValue" class="tw-text-red-600 tw-italic tw-text-xs">{{ errorValue.username[0] }}</div>
      <label class="input">
        <i class="fas fa-eye tw-mr-2" />
        <input v-model="login.password" placeholder="Password" type="password" class="input-value" />
      </label>
      <div v-if="errorValue" class="tw-text-red-600 tw-italic tw-text-xs">{{ errorValue.password[0] }}</div>
      <div v-if="detailError" class="tw-text-red-600 tw-italic tw-text-xs">{{ detailError.password[0] }}</div>
      <div v-if="detailError" class="tw-text-red-600 tw-italic tw-text-xs">{{ detailError.password[1] }}</div>
      <div v-if="detailError" class="tw-text-red-600 tw-italic tw-text-xs">{{ detailError.password[2] }}</div>
      <button :disabled="loading" @click="submit" class="tw-my-5">
        <span v-if="loading">Loading...</span>
        <span v-else>Signup</span>
      </button>
      <div class="tw-text-center">Already have account?
        <router-link to="/"> <span class="tw-text-purple-900 tw-cursor-pointer tw-font-semibold">Login
        </span></router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
.input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  outline: none;
}

.input-value {
  outline: none;
}

button {
  background: purple;
  border-radius: 10px;
  color: white;
  padding: 4px 0px 4px 0px;
}
</style>