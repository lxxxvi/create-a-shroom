<template>
  <div class="text-left">
    <label :for="colorKey">{{ selectedColorLabel }}</label>

    <div class="border py-1 px-2 flex justify-center items-center">
      <ColorPreview :colorName="inputValue" class="ml-1 w-1/12" />
      <input type="text"
             placeholder="Enter color"
             class="inline-block focus:outline-none w-10/12 px-2"
             :name="colorKey"
             :value="inputValue"
             @input="filterWebColors"
             @focus="showWebColorPicker = true"
             @keyup.enter="colorEntered"
             @keydown.tab="colorEntered"
             ref="colorInput"
             />
      <span @click="clearInput"
            class="w-1/12 mr-1 text-gray-500 cursor-pointer hover:text-gray-900">x</span>
    </div>

    <WebColorPicker v-if="showWebColorPicker"
                    :searchTerm="inputValue"
                    @color-selected="colorSelected"
                    />
  </div>

</template>

<script>
import WebColorPicker from '../WebColorPicker/WebColorPicker.vue';
import ColorPreview from '../WebColorPicker/ColorPreview.vue';

export default {
  name: 'ColorInput',
  props: { blueprint: Object, colorKey: String },
  components: { WebColorPicker, ColorPreview },
  data() {
    return {
      showWebColorPicker: false,
      inputValue: this.blueprint.colors[this.colorKey]
    }
  },
  emits: ['color-changed'],
  methods: {
    clearInput() {
      this.inputValue = '';
      this.$refs.colorInput.focus();
    },
    applyColor() {
      this.$emit('color-changed', this.colorKey, this.inputValue);
      this.showWebColorPicker = false;
    },
    colorEntered(event) {
      this.colorSelected(event.target.value);
    },
    colorSelected(colorName) {
      this.inputValue = colorName;
      this.applyColor();
    },
    filterWebColors(event) {
      this.inputValue = event.target.value;
    }
  },
  computed: {
    selectedColorLabel: function () {
      return this.blueprint.labels[this.colorKey];
    }
  }
}
</script>

<style scoped>
label {
  @apply block text-green-400 text-xs;
}
</style>
