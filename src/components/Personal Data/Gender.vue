<template>
  <div class="gender">
    <h5 class="gender-title">Пол</h5>
    <label for="male">Мужской</label>
    <input type="radio" id="male" name="gender" checked class="gender-male"
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
.gender-title{
  margin: 5px 0px;
}
.gender-male{
  margin-right: 30px;
}
</style>