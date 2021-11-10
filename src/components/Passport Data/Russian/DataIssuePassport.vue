<template>
  <div class="data-issue-passport">
    <label for="dataissuepassport">Дата выдачи</label> 
    <br>
    <input type="date" id="dataissuepassport" placeholder="дд.мм.гггг" class="input-all"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'DataIssuePassport',
  props: {
    value: String,
  }
}
</script>

<style>

</style>