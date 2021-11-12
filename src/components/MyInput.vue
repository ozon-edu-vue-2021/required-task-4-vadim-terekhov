<template>
  <div class="wrapper-input">
    <label :for="config.id">{{ config.label }}</label> 
    <br>
    <input :type="config.type" :id="config.id" class="sur-name-input input-all"
      :value="value"
      :placeholder="config.placeholder ? config.placeholder : '' "
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    config: Object,
    value: String,
  }
}
</script>

<style scoped>

</style>