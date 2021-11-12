<template>
  <div class="ino-number-passport">
    <label for="inonumberpassport">Номер паспорта</label> 
    <br>
    <input type="number" id="inonumberpassport" class="input-all"
    :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InoNumberPassport',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.ino-number-passport{
  margin-right: 5px;
  flex-basis: 125px;
}
</style>