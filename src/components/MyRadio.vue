<template>
  <div class="wrapper-radio">
    <h5 class="gender-title">
      <slot></slot>
    </h5>

    <template 
      v-for="(item, idx) in config"
    >
      <label :for="item.id" :key="`${idx}+${item.id}`">{{ item.label }}</label>
      <input 
        :key="idx"
        :type="item.type"
        :id="item.id"
        :name="item.name"
        :checked="item.checked"
        class="gender-male"
        :value="item.value"
        @input="$emit('input',$event.target.value)"
      >
    </template>

  </div>
</template>

<script>
export default {
  name: 'MyRadio',
  props:{
    config: Array,
    value: String
  },
}
</script>

<style scoped>

</style>