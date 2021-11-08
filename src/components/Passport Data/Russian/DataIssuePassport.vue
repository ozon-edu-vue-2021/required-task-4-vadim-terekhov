<template>
  <div class="data-issue-passport">
    <label for="dataissuepassport">Дата выдачи</label> 
    <br>
    <input type="date" id="dataissuepassport" placeholder="дд.мм.гггг"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'DataIssuePassport'
}
</script>

<style>

</style>