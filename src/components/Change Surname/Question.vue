<template>
  <div class="question">
    <h5>Меняли ли фамилию или имя?</h5>
    <label for="no">Нет</label>
    <input type="radio" id="no" name="changeSurname" checked class="question-no"
      value="no"
      @input="$emit('input',$event.target.value)"
    >
    <label for="yes">Да</label>
    <input type="radio" id="yes" name="changeSurname"
      value="yes"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'Question'
}
</script>

<style scoped>
.question-no{
  margin-right: 30px;
}
</style>