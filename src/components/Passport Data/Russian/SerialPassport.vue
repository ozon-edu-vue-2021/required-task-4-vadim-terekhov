<template>
  <div class="serial-passport">
    <label for="serialpassport">Серия паспорта</label> 
    <br>
    <input type="number" id="serialpassport"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'SerialPassport',
}
</script>

<style scoped>

</style>