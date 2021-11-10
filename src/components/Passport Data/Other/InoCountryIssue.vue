<template>
  <div class="ino-country-issue">
    <label for="inocountryissue">Страна выдачи </label><br>
    <select name="" id="inocountryissue" class="input-all"
      :value="value"
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
  props: {
    value: String,
  },
  data(){
    return{
      country,
    }
  },
}
</script>

<style scoped>
.ino-country-issue{
  margin-right: 5px;
  flex-grow: 1;
}
</style>