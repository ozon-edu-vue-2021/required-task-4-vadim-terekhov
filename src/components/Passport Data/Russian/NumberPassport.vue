<template>
  <div class="number-passport">
    <label for="numberpassport">Номер паспорта</label> 
    <br>
    <input type="number" id="numberpassport" class="input-all"
      :value="value" 
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'NumberPassport',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.number-passport{
  margin-right: 5px;
}
</style>