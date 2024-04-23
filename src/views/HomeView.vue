<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import LoginPage from '@/views/LoginPage.vue'
import { computed, onMounted, ref } from 'vue'

const isLoggedIn = ref<boolean>(false)

const checkLogin = computed(() => {
  const localValue = localStorage.getItem('login')
  return !!localValue
})

onMounted(() => {
  isLoggedIn.value = checkLogin.value
})
</script>

<template>
  <div v-if="isLoggedIn">
    <TheWelcome />
  </div>
  <div v-else>
    <LoginPage />
  </div>
</template>
