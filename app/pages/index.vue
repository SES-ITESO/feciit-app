<script lang="ts" setup>
const counter = ref(0); // reactive state - tracks a value, when updated it re renders it to show the latest value
const double = computed(() => counter.value * 2); // computed - a value that is derived from a reactive state and updates when it changes
const inputText = ref("This is a binded state"); // Can be binded in an input and the input will track its change
</script>

<template>
  <div>
    <!-- TailwindCSS: Allows to define css styles as html classes -->
    <button
      class="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-lg transition-all active:-translate-y-1/4 text-white"
      @click="counter++"
    >
      Counter: {{ counter }}
    </button>
    <p>Double: {{ double }}</p>

    <div>
      <label for="input-test">Two way binding:</label>
      <!-- Two way data binding - v-model tracks a reactive state and updates it in real time as the input change -->
      <UInput id="input-test" v-model="inputText" />
      <!-- Custom NuxtUI component -->
      <p>{{ inputText }}</p>
    </div>
  </div>
</template>
