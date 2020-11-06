<template>
  <ul>
    <template v-for="(colorNames, colorGroup) in webColors">
      <li class="my-4 p-2 border"
          v-show="matchesSearchTerm(colorNames, colorGroup)"
          >
        <span class="text-xs text-gray-400 uppercase"
              >{{ colorGroup }}</span>

        <template v-for="colorName in colorNames">
          <WebColorOption v-show="matchesSearchTerm([colorName])"
                          :colorName="colorName"
                          @color-selected="selectColor"
                          />
        </template>
      </li>
    </template>
  </ul>
</template>

<script>
import WebColors from '../../utils/WebColors.js';
import WebColorOption from './WebColorOption.vue';

export default {
  name: 'WebColorPicker',
  props: ['searchTerm'],
  emits: ['color-selected'],
  components: { WebColorOption },
  data() {
    return {
      webColors: WebColors
    }
  },
  methods: {
    matchesSearchTerm(colorNames, colorGroup = null) {
      if(this.searchTerm.length === 0) {
        return true;
      }

      let allNames = [...colorNames];

      if (colorGroup != null) {
          allNames.push(colorGroup);
      }

      return allNames.map(name => name.toUpperCase())
                     .some(name => name.includes(this.searchTerm.toUpperCase()));
    },
    selectColor(colorName) {
      this.$emit('color-selected', colorName);
    }
  }
}
</script>
