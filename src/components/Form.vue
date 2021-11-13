<template>
  <div class="wrapper-form">
    <template
      v-if="hasChange"
    >
      <ul 
        class="errors"
        v-if="ErrorsArr.length > 0"
      >
        <li
          v-for="(error,idx) in ErrorsArr"
          :key="idx"
        >{{ error }}</li>
      </ul>
      <p
        class="success"
        v-else
      >Какие поля вы заполняли или меняли, Вы их заполнили правильно</p>
    </template>
    <form class="form"  @submit.prevent="formSubmit">
      <h4>Личные данные</h4>
      <fieldset class="personal-data">
        <div class="row">
          <my-input v-model.trim="formData.surName" :config="{id:'surname',type:'text',label:'Фамилия', class:['input-all'],error: Errors.surName ? true : false}" />
          <my-input v-model.trim="formData.firstName" :config="{id:'firstname',type:'text',label:'Имя',class:['input-all'],error: Errors.firstName ? true : false}" />
          <my-input v-model.trim="formData.middleName" :config="{id:'middlename',type:'text',label:'Отчество',class:['input-all'],error: Errors.middleName ? true : false}" />
        </div>
        <my-input v-model.trim="formData.dataBirth" :config="{id:'databirth',type:'date',label:'Дата рождения',placeholder:'дд.мм.гггг',class:['input-all'],error: Errors.dataBirth ? true : false}" />
        <my-input v-model.trim="formData.email" :config="{id:'email',type:'text',label:'E-mail',class:['input-all'],error: Errors.email ? true : false}" />
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
          <my-input v-model.trim="formData.serialPassport" :config="{id:'serialpassport',type:'number',label:'Серия паспорта',class:['input-all'],error: Errors.serialPassport ? true : false}" />
          <my-input v-model.trim="formData.numberPassport" :config="{id:'numberpassport',type:'number',label:'Номер паспорта',class:['input-all'],error: Errors.numberPassport ? true : false}" />
          <my-input v-model.trim="formData.dataIssuePassport" :config="{id:'dataissuepassport',type:'date',label:'Дата выдачи',placeholder:'дд.мм.гггг',class:['input-all']}" />
        </div>
        <div class="wrapper-ino-passport" v-if="isNationality">
          <div class="row">
            <my-input v-model.trim="formData.inoSurName" :config="{id:'inosurname',type:'text',label:'Фамилия на латинице',class:['input-all'],error: Errors.inoSurName ? true : false}" />
            <my-input v-model.trim="formData.inoFirstName" :config="{id:'inofirstтame',type:'text',label:'Имя на латинице',class:['input-all'],error: Errors.inoFirstName ? true : false}" />
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
          <my-input v-model.trim="formData.oldSurName" :config="{id:'oldsurname',type:'text',label:'Фамилия (предыдущая)',class:['input-all'],error: Errors.oldSurName ? true : false}" />
          <my-input v-model.trim="formData.oldFirstName" :config="{id:'oldаirstтame',type:'text',label:'Имя (предыдущее)',class:['input-all'],error: Errors.oldFirstName ? true : false}" />
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
      Errors: {},
      ErrorsArr: [],
      hasChange: false,
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
    hasChangeField(){
      let flag = false;
      for(let [key,data] of Object.entries(this.formData)){
        if (key === 'gender'){
          if (data !== 'male'){
            flag = true;
            break;
          }
        }else if (key === 'changeSurname'){
          if (data !== 'no'){
            flag = true;
            break;
          }
        }else if (data !== ''){
          flag = true;
          break;
        }
      }
      return flag;
    },
    ValidationField(data,err,fieldErr,text,regExp){
      if (!regExp.test(data) && data !== ''){
        err[fieldErr] = text;
      }else{
        delete err[fieldErr];
      }
    },
    changeHandler(citizenship){
      this.formData.citizenshipCustom = citizenship;
      if (this.isNationality === undefined){
        this.formData.inoFirstName = '';
        this.formData.inoSurName = '';
        this.formData.inoNumberPassport = '';
        this.formData.inoCountryIssue = '';
        this.formData.inoTypePassport = '';
      }
      if(this.formData.citizenshipCustom !== 'Russia'){
        this.formData.serialPassport ='';
        this.formData.numberPassport ='';
        this.formData.dataIssuePassport = '';
      }

    },
    formSubmit(){
      if (this.hasChangeField()){
        this.hasChange = true;
      }else{
        this.hasChange = false;
      }
      //Серия паспорта - 4 цифры
      const FOUR_DIGITAL = /^[0-9]{4}$/;
      this.ValidationField(this.formData.serialPassport,this.Errors,'serialPassport','Серия паспорта должна быть 4 цифры',FOUR_DIGITAL);
      //Номер паспорта - 6 цифр для гражданства Россия и любое значение для других гражданств
      const SIX_DIGITAL = /^[0-9]{6}$/;
      this.ValidationField(this.formData.numberPassport,this.Errors,'numberPassport','Номер паспорта должна быть 6 цифр',SIX_DIGITAL);
      //Фамилия, Имя, Отчество, Предыдущая Фамилия, Предыдущее Имя- только русские буквы
      const ONLY_RUS_LETTERS = /^[А-Яа-я]+$/;
      this.ValidationField(this.formData.surName,this.Errors,'surName','Фамилия только русскими буквами',ONLY_RUS_LETTERS);
      this.ValidationField(this.formData.firstName,this.Errors,'firstName','Имя только русскими буквами',ONLY_RUS_LETTERS);
      this.ValidationField(this.formData.middleName,this.Errors,'middleName','Отчество только русскими буквами',ONLY_RUS_LETTERS);

      this.ValidationField(this.formData.oldSurName,this.Errors,'oldSurName','Фамилия (предыдущая) только русскими буквами',ONLY_RUS_LETTERS);
      this.ValidationField(this.formData.oldFirstName,this.Errors,'oldFirstName','Имя (предыдущее) только русскими буквами',ONLY_RUS_LETTERS);

      //E-mail - валидный почтовый адрес
      const VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.ValidationField(this.formData.email,this.Errors,'email','Email должен быть корректным',VALID_EMAIL);
      //Фамилия на латинице и Имя на латинице - только английские буквы
      const ONLY_ENG_LETTERS = /^[A-Za-z]+$/;
      this.ValidationField(this.formData.inoSurName,this.Errors,'inoSurName','Фамилия только латинскими буквами при выборе иностранного гражданства',ONLY_ENG_LETTERS);
      this.ValidationField(this.formData.inoFirstName,this.Errors,'inoFirstName','Имя только латинскими буквами при выборе иностранного гражданства',ONLY_ENG_LETTERS);
      //Дата Рождения - валидная дата, не позже сегодняшнего числа
      const currentDate = new Date();
      const curentDateYear = currentDate.getFullYear();
      const curentDateMonth = currentDate.getMonth() + 1;
      const curentDateNumber = currentDate.getDate();
      if (this.formData.dataBirth !== ''){
        const [y,m,d] = this.formData.dataBirth.split('-');
        if (+y > curentDateYear || +m > curentDateMonth || +d > curentDateNumber){
          this.Errors.dataBirth = 'Дата должна быть меньше текущей';
        }else{
          delete this.Errors.dataBirth;
        }
      }
      
      /*---------------------------------------------------------------------------- */
      this.ErrorsArr = Object.keys(this.Errors).map(item => this.Errors[item]);
      if (this.ErrorsArr.length === 0 && this.hasChange === true){
        console.log(JSON.stringify(this.formData));
      }
    }
  },
};
</script>

<style>
.wrapper-form{
  width: 60%;
  margin: 0 auto;
}
.form {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
.errors{
  color: red;
  font-weight: bold;
}
.success{
  color: green;
  font-weight: bold;
}
</style>
