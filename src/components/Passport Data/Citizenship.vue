<template>
  <div class="citizen-ship">
    <label for="citizenship">Гражданство </label>
    <select name="" id="citizenship"
      @input="$emit('input',$event.target.value)"
    >
      <option disabled selected value="">Выберите гражданство</option>
      <option
        v-for="item in citizenship"
        :key="item.id"
      >{{ item.nationality }}</option>
    </select>
  </div>
</template>

<script>
import citizenship from "@/assets/data/citizenships.json";
export default {
  name: 'Citizenship',
  data(){
    return{
      citizenship,
    }
  },
}
</script>

<style>

</style>