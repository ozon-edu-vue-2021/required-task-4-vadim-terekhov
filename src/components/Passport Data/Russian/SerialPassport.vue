<template>
  <div class="serial-passport">
    <label for="serialpassport">Серия паспорта</label> 
    <br>
    <input type="number" id="serialpassport" class="input-all"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'SerialPassport',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.serial-passport{
  margin-right: 5px;
}
</style>