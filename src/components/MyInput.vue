<template>
  <div class="wrapper-input">
    <label :for="config.id">{{ config.label }}</label> 
    <br>
    <input :type="config.type" :id="config.id" :class="config.class"
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
.wrapper-input{
  width: 100%;
  margin-right: 5px;
}
.wrapper-input:last-child{
  margin-right: 0px;
}
</style>