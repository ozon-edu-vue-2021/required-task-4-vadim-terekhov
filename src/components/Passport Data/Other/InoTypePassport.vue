<template>
  <div class="ino-type-passport">
    <label for="inotypepassport">Тип паспорта </label><br>
    <select name="" id="inotypepassport" class="input-all"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
      <option disabled selected value="">Выберите тип</option>
      <option
        v-for="item in type"
        :key="item.id"
      >{{ item.type }}</option>
    </select>
  </div>
</template>

<script>
import type from "@/assets/data/passport-types.json";
export default {
  name: 'inoCountryIssue',
  props: {
    value: String,
  },
  data(){
    return{
      type,
    }
  },
}
</script>

<style scoped>

</style>