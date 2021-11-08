<template>
  <div class="data-birth">
    <label for="databirth">Дата рождения</label> 
    <br>
    <input type="date" id="databirth" placeholder="дд.мм.гггг"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'DataBirth',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.data-birth{
  width: 100%;
}
</style>