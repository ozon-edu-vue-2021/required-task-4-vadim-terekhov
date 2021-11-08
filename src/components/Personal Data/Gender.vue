<template>
  <div class="gender">
    <h5>Пол</h5>
    <label for="male">Мужской</label>
    <input type="radio" id="male" name="gender" checked
      value="male"
      @input="$emit('input',$event.target.value)"
    >

    <label for="female">Женский</label>
    <input type="radio" id="female" name="gender"
      value="female"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'Gender',
}
</script>

<style scoped>

</style>