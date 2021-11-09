<template>
  <div class="number-passport">
    <label for="numberpassport">Номер паспорта</label> 
    <br>
    <input type="number" id="numberpassport"
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