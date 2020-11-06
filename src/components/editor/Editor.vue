<template>
  <Preview :blueprint="blueprint" />

  <Menu :blueprint="blueprint"
        @color-changed="updateColor"
        />
</template>

<script>
import Preview from './Preview/Preview.vue'
import Menu from './Menu.vue'
import blueprint from '../../blueprints/1up.js'

export default {
  name: 'Editor',
  components: { Preview, Menu },
  data() {
    return {
      blueprint: blueprint
    }
  },
  methods: {
    updateColor(colorKey, newValue) {
      let newScheme = Object.assign({}, this.blueprint)
      newScheme.colors[colorKey] = newValue
      this.blueprint = newScheme;
    }
  }
}
</script>
