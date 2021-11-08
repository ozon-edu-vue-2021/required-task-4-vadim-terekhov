<template>
  <div class="custom-citizenship" @click="isShowSelectMenu = false">
      <input type="text"
        @click.stop="isShowSelectMenu = true"
        :value="curentItem"
      >
      <div class="select-ul" v-show="isShowSelectMenu">
          <p class="select-ul-item"
            v-for="item in citizenship"
            :key="item.id"
            @click.stop="handlerClickItem(item.nationality)"
          >{{ item.nationality }}</p>
      </div>
  </div>
</template>

<script>
import citizenship from '@/assets/data/citizenships.json';
export default {
    name: 'CitizenshipCustom',
    data(){
        return {
            citizenship,
            isShowSelectMenu: false,
            curentItem: '',
        }
    },
    methods: {
        handlerClickItem(val){
            this.curentItem = val;
            this.isShowSelectMenu = false;
            this.$emit('input',val)
        }
    }
}
</script>

<style scoped>
.select-ul{
    display: block;
    position: relative;
    height: 12vh;
    width: 35%;
    overflow-y: scroll;
    background-color: aquamarine;
    margin-top: 10px;
    padding: 7px 0px;
}
.select-ul-item{
    margin: 0;
    padding: 4px 5px;
}
.select-ul-item:hover{
    cursor: pointer;
}
</style>