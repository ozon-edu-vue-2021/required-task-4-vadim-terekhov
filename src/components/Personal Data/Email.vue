<template>
  <div class="e-mail">
    <label for="email">E-mail</label> 
    <br>
    <input type="text" id="email" class="input-all"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'Email',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.e-mail{
  width: 100%;
}
.e-mail .input-all{
  width: 100%;
}
</style>