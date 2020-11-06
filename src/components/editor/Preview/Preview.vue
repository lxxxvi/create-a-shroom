<template>
  <div class="pt-16 pb-16 bg-gradient-to-r from-red-300 via-yellow-300 to-green-400">
    <div class="w-64 bg-gray-100 mx-auto">
      <SvgImage :svgCode="svgCode" />
    </div>

    <div class="block w-1/2 mx-auto text-center mt-10 mb-2">
      <SvgCode :svgCode="svgCode" />
    </div>
  </div>
</template>

<script>
import SvgImage from './SvgImage.vue';
import SvgCode from './SvgCode.vue';
import Svg from '../../../utils/svg/Svg.js';

export default {
  name: 'Preview',
  props: ['blueprint'],
  components: { SvgImage, SvgCode },
  computed: {
    svgCode() {
      return new Svg(this.blueprint).build()
    }
  }
}
</script>
