<template>
  <div class="custom-citizenship" v-click-outside="hideSelectMenu">
      <label for="customcitizenship">Гражданство </label>
      <input type="text" id="customcitizenship"
        @focus="isShowSelectMenu = true"
        v-model="searchWord"
        @input="$emit('input',$event.target.value)"
      >
      <div class="select-ul" v-if="isShowSelectMenu">
          <div
            v-if="buffer.length"
          >
            <p class="select-ul-item"
                v-for="item in citizenshipFilter"
                :key="item.id"
                @click.stop="handlerClickItem(item.nationality)"
            >{{ item.nationality }}</p>
          </div>
          <div v-else>
              <p>Ничего не найдено</p>
          </div>
      </div>
  </div>
</template>

<script>
import citizenship from '@/assets/data/citizenships.json';
import ClickOutside from 'vue-click-outside';
import lodash from 'lodash';

export default {
    name: 'CitizenshipCustom',
    data(){
        return {
            citizenship,
            buffer: citizenship,
            isShowSelectMenu: false,
            searchWord: '',
            debaunceFn: null,
        }
    },
    created() {
        this.debaunceFn = lodash.debounce(this.getCitizenship,500);
    },
    computed: {
        citizenshipFilter(){
            return this.buffer;
        }
    },
    methods: {
        handlerClickItem(citizenshipItem){
            if (!(this.curentItem === citizenshipItem)){
                this.searchWord = citizenshipItem;
                this.isShowSelectMenu = false;
                this.$emit('send',citizenshipItem)
            }
        },
        hideSelectMenu(){
            this.isShowSelectMenu = false;
        },
        getCitizenship(searchWord){
            this.buffer = this.citizenship.filter( (i) => {
                return i.nationality.includes(searchWord);
            });
        },
    },
    watch: {
        searchWord(newValue){
            //this.getCitizenship(newValue);
            this.debaunceFn(newValue);
        }
    },
    directives:{
        ClickOutside,
    },
}
</script>

<style scoped>
.select-ul{
    display: block;
    position: absolute;
    height: 12vh;
    width: 35%;
    overflow-y: scroll;
    background-color: aquamarine;
    margin-top: 10px;
    padding: 7px 0px;
    box-shadow: 0px 3px 6px 1px brown;
}
.custom-citizenship{
    position: relative;
}
.select-ul-item{
    margin: 0;
    padding: 4px 5px;
}
.select-ul-item:hover{
    cursor: pointer;
}
</style>