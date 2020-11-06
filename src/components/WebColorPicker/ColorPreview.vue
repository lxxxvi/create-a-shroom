<template>
  <span class="w-6 h-3 inline-block border" :style="bgColor()"></span>
</template>

<script>
export default {
  name: 'ColorPreview',
  props: { colorName: String },
  methods: {
    bgColor() {
      return `background-color: ${this.colorName};`
    }
  }
}
</script>
