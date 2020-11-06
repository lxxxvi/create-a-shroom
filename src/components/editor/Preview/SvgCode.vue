<template>
  <button @click="showCode = !showCode"
          class="hover:bg-green-500 hover:text-white">Toggle code</button>
  <textarea v-if="showCode"
            class="h-64 my-5">
    {{ svgCode }}
  </textarea>
</template>

<script>
export default {
  name: 'SvgCode',
  props: ['svgCode'],
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style scoped>
button {
  @apply text-green-500 bg-white px-4 py-1 text-xs tracking-wide cursor-pointer transition duration-150 ease-in-out;
}

textarea {
  @apply w-full text-xs p-2 font-mono bg-gray-100 shadow-inner;
}
</style>
