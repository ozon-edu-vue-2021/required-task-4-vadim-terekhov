<template>
  <div class="wrapper-form">
    <form class="form">
      <h4>Личные данные</h4>
      <fieldset class="personal-data">
        <div class="row">
          <my-input v-model.trim="formData.surName" :config="{id:'surname',type:'text',label:'Фамилия', class:['input-all']}" />
          <my-input v-model.trim="formData.firstName" :config="{id:'firstname',type:'text',label:'Имя',class:['input-all']}" />
          <my-input v-model.trim="formData.middletName" :config="{id:'middlename',type:'text',label:'Отчество',class:['input-all']}" />
        </div>
        <my-input v-model.trim="formData.dataBirth" :config="{id:'databirth',type:'date',label:'Дата рождения',placeholder:'дд.мм.гггг',class:['input-all']}" />
        <my-input v-model.trim="formData.email" :config="{id:'email',type:'text',label:'E-mail',class:['input-all']}" />
        <my-radio 
          :config="[
            {id:'male',type:'radio',label:'Мужской',name:'gender',checked: true,value: 'male'},
            {id:'female',type:'radio',label:'Женский',name:'gender',checked: false, value: 'female'}
          ]"
          v-model.trim="formData.gender"
        >Пол</my-radio>
      </fieldset>
      
      <h4>Паспортные данные</h4>
      <fieldset class="passport-data">
        <my-custom-select @clickItem="changeHandler" @input="changeHandler" :classProp="['input-all']"/>
        <div class="wrapper-russian-passport row" v-if="(formData.citizenshipCustom === 'Russia') ? true : false">
          <my-input v-model.trim="formData.serialPassport" :config="{id:'serialpassport',type:'number',label:'Серия паспорта',class:['input-all']}" />
          <my-input v-model.trim="formData.numberPassport" :config="{id:'numberpassport',type:'number',label:'Номер паспорта',class:['input-all']}" />
          <my-input v-model.trim="formData.dataIssuePassport" :config="{id:'dataissuepassport',type:'date',label:'Дата выдачи',placeholder:'дд.мм.гггг',class:['input-all']}" />
        </div>
        <div class="wrapper-ino-passport" v-if="isNationality">
          <div class="row">
            <my-input v-model.trim="formData.inoSurName" :config="{id:'inosurname',type:'text',label:'Фамилия на латинице',class:['input-all']}" />
            <my-input v-model.trim="formData.inoFirstName" :config="{id:'inoаirstтame',type:'text',label:'Фамилия на латинице',class:['input-all']}" />
          </div>
          <div class="row">
            <my-input v-model.trim="formData.inoNumberPassport" :config="{id:'inonumberpassport',type:'number',label:'Номер паспорта',class:['input-all']}" />
            <my-select 
              v-model.trim="formData.inoCountryIssue"
              :config="{
                id:'inocountryissue',
                label:'Страна выдачи',
                textDefault: 'Выбирите страну',
                class:['input-all'],    
                data: nationality,
                option: 'capital'
              }"
            />
            <my-select 
              v-model.trim="formData.inoTypePassport"
              :config="{
                id:'inotypepassport',
                label:'Тип паспорта',
                textDefault: 'Выбирите тип',
                class:['input-all'],
                data: typePassport,
                option: 'type'
              }"
            />
          </div>
        </div>

        <my-radio 
          :config="[
            {id:'no',type:'radio',label:'Нет',name:'changeSurname',checked: true,value: 'no'},
            {id:'yes',type:'radio',label:'Да',name:'changeSurname',checked: false, value: 'yes'}
          ]"
          v-model.trim="formData.changeSurname"
        >Меняли ли фамилию или имя?</my-radio>

        <div
          v-show="(formData.changeSurname === 'yes') ? true : false"
          class="row"
        >
          <my-input v-model.trim="formData.oldSurName" :config="{id:'oldsurname',type:'text',label:'Фамилия (предыдущая)',class:['input-all']}" />
          <my-input v-model.trim="formData.oldFirstName" :config="{id:'oldаirstтame',type:'text',label:'Имя (предыдущее)',class:['input-all']}" />
        </div>

      </fieldset>
      <button class="send">Отправить</button>
    </form>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue';
import MyRadio from '@/components/MyRadio.vue';
import MyCustomSelect from '@/components/MyCustomSelect.vue';
import MySelect from '@/components/MySelect.vue';

import nationality from '@/assets/data/citizenships.json';
import typePassport from "@/assets/data/passport-types.json";

export default {
  components: {
    MyInput,
    MyRadio,
    MyCustomSelect,
    MySelect
  },
  data() {
    return {
      formData: {
        surName: '',
        firstName: '',
        middleName: '',
        dataBirth: '',
        email: '',
        gender: 'male',
        citizenship: '',
        changeSurname: 'no',
        oldSurName: '',
        oldFirstName: '',
        serialPassport: '',
        numberPassport: '',
        dataIssuePassport: '',
        inoFirstName: '',
        inoSurName: '',
        inoNumberPassport: '',
        inoCountryIssue: '',
        inoTypePassport: '',
        citizenshipCustom: '',
      },
      nationality,
      typePassport,
    };
  },
  computed:{
    isNationality(){
      return this.nationality.find(i => 
        i.nationality === this.formData.citizenshipCustom && i.nationality !== 'Russia'
      );
    }
  },
  methods: {
    changeHandler(citizenship){
      this.formData.citizenshipCustom = citizenship;
    },
  },
};
</script>

<style>
.form {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  width: 60%;
  margin: 0 auto;
}
.input-all{
  height: 30px;
  width: 100%;
}
.input-all:focus{
  outline: none;
}
.row{
  display: flex;
  margin-top: 20px;
  width: 100%;
}
.send{
  margin-top: 20px;
  background-color: green;
  color: beige;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 10px;
  transition: all .5s;
}
.send:hover{
  cursor: pointer;
  transform: scale(1.1);
}
</style>
