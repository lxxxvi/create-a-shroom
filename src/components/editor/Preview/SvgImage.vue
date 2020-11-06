<template>
  <div v-html="svgCode"></div>
</template>

<script>
export default {
  name: 'SvgImage',
  props: ['svgCode']
}
</script>
