<template>
  <div class="mx-auto">
    <Title />
    <Editor />
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Editor from './components/Editor/Editor.vue'

export default {
  name: 'App',
  components: {
    Title, Editor
  }
}
</script>
