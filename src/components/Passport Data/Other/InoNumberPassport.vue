<template>
  <div class="ino-number-passport">
    <label for="inonumberpassport">Номер паспорта</label> 
    <br>
    <input type="text" id="inonumberpassport"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InoNumberPassport'
}
</script>

<style>

</style>