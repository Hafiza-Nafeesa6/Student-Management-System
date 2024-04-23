<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'
import router from '@/router'


interface type {
  username: string
  password: string
}

const login: type = reactive(
  {
    username: '',
    password: ''
  })
const loading =ref<boolean>(false)
const submit = async () => {
  loading.value =true;
  await axios.post('http://127.0.0.1:8001/jwt/create/', {
    username: login.username,
    password: login.password,
  }).then((response: any) => {
    console.log(response)
     loading.value = false;
    localStorage.setItem('login', login.username);
    router.push({ name: 'TheWelcome' });
  }).catch((error: any) => {
    console.log(error)
  }).finally(()=> {
    loading.value = false;
  })
}


</script>

<template>
  <div class="tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center">
    <div class="tw-flex tw-flex-col tw-w-1/2 tw-gap-2">
      <h1 class="tw-text-center tw-text-3xl tw-font-bold">Welcome back!</h1>
      <div class="tw-text-center tw-text-sm tw-font-light tw-mb-10 tw-text-purple-900">please enter your login detail
      </div>
      <label class="input" >
        <i class="fa fa-user tw-mr-2" />
        <input v-model="login.username" placeholder="Username" type="text" class="input-value">
      </label>
      <label class="input">
        <i class="fa fa-eye tw-mr-2" />
        <input v-model="login.password" placeholder="Password" type="password" class="input-value" />
      </label>
      <div class="tw-mb-5"><input type="checkbox">
        <label class="tw-pl-2">Remember me</label></div>
      <button :disabled="loading" @click="submit">
      <span v-if="loading">Loading...</span>
      <span v-else>Login</span>
    </button>
      <div class="tw-text-right tw-text-[12px] tw-cursor-pointer">Forget Password?</div>
      <div class="tw-text-center">Need an account?
        <router-link to="/signup"> <span class="tw-text-purple-900 tw-cursor-pointer tw-font-semibold">Sign Up
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
.input-value{
  outline: none;
}

button {
  background: purple;
  border-radius: 10px;
  color: white;
  padding: 4px 0px 4px 0px;
}
</style>
