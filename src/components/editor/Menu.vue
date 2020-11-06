<template>
  <div class="text-center mt-10">
    <template v-for="(field, colorKey) in blueprint.labels">
      <div class="w-64 mt-4 mb-8 mx-auto">
        <ColorInput :blueprint="blueprint"
                    :colorKey="colorKey"
                    @color-changed="colorChanged"
                    />
      </div>
    </template>
  </div>
</template>

<script>
import ColorInput from './ColorInput.vue'

export default {
  name: 'Menu',
  props: { blueprint: Object },
  emits: ['color-changed'],
  components: { ColorInput },
  methods: {
    colorChanged(colorKey, newValue) {
      this.$emit('color-changed', colorKey, newValue);
    }
  }
}
</script>


