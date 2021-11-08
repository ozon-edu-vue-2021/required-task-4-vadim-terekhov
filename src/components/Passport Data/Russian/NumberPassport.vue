<template>
  <div class="number-passport">
    <label for="numberpassport">Номер паспорта</label> 
    <br>
    <input type="text" id="numberpassport"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'NumberPassport'
}
</script>

<style>

</style>