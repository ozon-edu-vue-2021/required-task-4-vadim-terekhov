<template>
  <div class="ino-country-issue">
    <label for="inocountryissue">Страна выдачи </label><br>
    <select name="" id="inocountryissue"
      @input="$emit('input',$event.target.value)"
    >
      <option disabled selected value="">Выберите страну</option>
      <option
        v-for="item in country"
        :key="item.id"
      >{{ item.nationality }}</option>
    </select>
  </div>
</template>

<script>
import country from "@/assets/data/citizenships.json";
export default {
  name: 'inoCountryIssue',
  data(){
    return{
      country,
    }
  },
}
</script>

<style scoped>

</style>