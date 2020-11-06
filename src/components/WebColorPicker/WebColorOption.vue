<template>
  <div class="text-sm py-1 text-left hover:bg-gray-100 cursor-pointer"
       @click="selectColor"
       >
    <ColorPreview :colorName="colorName" class="ml-1 mr-2" />
    <span>{{ colorName }}</span>
  </div>
</template>

<script>
import ColorPreview from './ColorPreview.vue'

export default {
  name: 'WebColorOption',
  props: ['colorName'],
  components: { ColorPreview },
  methods: {
    selectColor() {
      console.log('WebColorOption.selectColor', this.colorName)
      this.$emit('color-selected', this.colorName);
    }
  }
}
</script>
