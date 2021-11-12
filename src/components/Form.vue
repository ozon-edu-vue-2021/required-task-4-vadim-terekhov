<template>
  <div class="form">
    <template
      v-if="SuccesValidate"
    >
      <ul 
        class="errors"
        v-if="Errors.length > 0"
      >
        <li
          v-for="(error,idx) in Errors"
          :key="idx"
        >{{ error.text }}</li>
      </ul>
      <p
        class="success"
        v-else
      >Какие поля вы заполняли или меняли, Вы их заполнили правильно</p>
    </template>
    <form action=""
      @submit.prevent="formSubmit"
    >
      <h4>Личные данные</h4>
      <fieldset class="personal-data">
        <div class="row">
          <sur-name v-model.trim="formData.surName" />
          <first-name v-model.trim="formData.firstName"/>
          <middle-name v-model.trim="formData.middleName"/>
        </div>
        <div class="row">
          <data-birth v-model.trim="formData.dataBirth"/>
        </div>
        <div class="row">
          <email v-model.trim="formData.email"/>
        </div>
        <div class="row">
          <gender v-model.trim="formData.gender"/>
        </div>
      </fieldset>
      
      <h4>Паспортные данные</h4>
      <fieldset class="passport-data">
        <div class="row">
          <citizenship-custom @send="changeHandler" @input="UpdateForms"/>
        </div>
        
        <div v-show="formData.citizenshipCustom">
          <div class="row">
            <div class="wrapper-russian-passport" v-if="(formData.citizenshipCustom === 'Russia') ? true : false">
              <serial-passport v-model.trim="formData.serialPassport"/>
              <number-passport v-model.trim="formData.numberPassport"/>
              <data-issue-passport v-model.trim="formData.dataIssuePassport"/>
            </div>
          </div>
          
          <div class="wrapper-ino-passport" v-if="isNationality">
            <div class="row">
              <div class="ino-fio">
                <ino-sur-name v-model.trim="formData.inoSurName"/>
                <ino-first-name v-model.trim="formData.inoFirstName"/>
              </div>
            </div>
            <div class="row">
              <div class="ino-passport">
                <ino-number-passport v-model.trim="formData.inoNumberPassport"/>
                <ino-country-issue v-model.trim="formData.inoCountryIssue"/>
                <ino-type-passport v-model.trim="formData.inoTypePassport"/>
              </div>
            </div>
          </div>
        </div>
        <question v-model.trim="formData.changeSurname"/>
        <div class="row">
          <div class="change-surname" v-show="(formData.changeSurname === 'yes') ? true : false">
            <old-sur-name v-model="formData.oldSurName"/>
            <old-first-name v-model="formData.oldFirstName"/>
          </div>
        </div>
      </fieldset>
      <button class="send">Отправить</button>
    </form>
  </div>
</template>

<script>
import DataBirth from './Personal Data/DataBirth.vue';
import Email from './Personal Data/Email.vue';
import FirstName from './Personal Data/FirstName.vue';
import MiddleName from './Personal Data/MiddleName.vue';
import SurName from './Personal Data/SurName.vue';
import Gender from './Personal Data/Gender.vue';
import Question from '@/components/Change Surname/Question.vue';
import OldSurName from '@/components/Change Surname/OldSurName.vue';
import OldFirstName from '@/components/Change Surname/OldFirstName.vue';
import SerialPassport from '@/components/Passport Data/Russian/SerialPassport.vue';
import NumberPassport from '@/components/Passport Data/Russian/NumberPassport.vue';
import DataIssuePassport from '@/components/Passport Data/Russian/DataIssuePassport.vue';

import InoSurName from '@/components/Passport Data/Other/InoSurName.vue';
import InoFirstName from '@/components/Passport Data/Other/InoFirstName.vue';
import InoNumberPassport from '@/components/Passport Data/Other/InoNumberPassport.vue';
import InoCountryIssue from '@/components/Passport Data/Other/InoCountryIssue.vue';
import InoTypePassport from '@/components/Passport Data/Other/InoTypePassport.vue';
import CitizenshipCustom from '@//components/Passport Data/CitizenshipCustom.vue';

import nationality from '@/assets/data/citizenships.json';
import Validation from '@/libs/ValidationClass.js';
export default {
  components: { 
    FirstName,
    SurName, MiddleName, DataBirth, Email, Gender,
    Question, OldSurName, OldFirstName,
    SerialPassport, NumberPassport, DataIssuePassport,
    InoSurName, InoFirstName, InoNumberPassport, InoCountryIssue,
    InoTypePassport, CitizenshipCustom
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
      /////
      Errors: [],
      SuccesValidate: false,
      //////
      nationality,
    }
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
    UpdateForms(value){
      this.formData.citizenshipCustom = value;
    },
    formSubmit(){
      if (
        this.formData.surName !== '' ||
        this.formData.firstName !== '' ||
        this.formData.middleName !== '' ||
        this.formData.dataBirth !== '' ||
        this.formData.email !== '' ||
        this.formData.gender !== 'male' ||
        this.formData.citizenship !== '' ||
        this.formData.changeSurname !== 'no' ||
        this.formData.oldSurName !== '' ||
        this.formData.oldFirstName !== '' ||
        this.formData.serialPassport !== '' ||
        this.formData.numberPassport !== '' ||
        this.formData.dataIssuePassport !== '' ||
        this.formData.inoFirstName !== '' ||
        this.formData.inoSurName !== '' ||
        this.formData.inoNumberPassport !== '' ||
        this.formData.inoCountryIssue !== '' ||
        this.formData.inoTypePassport !== '' ||
        this.formData.citizenshipCustom !== ''
      ){
        this.SuccesValidate = true;
      }else{
        this.SuccesValidate = false;
      }
      //Серия паспорта - 4 цифры
      //Номер паспорта - 6 цифр для гражданства Россия и любое значение для других гражданств
      Validation.RUSPassportSerialNumber(this);

      //Фамилия, Имя, Отчество, Предыдущая Фамилия, Предыдущее Имя- только русские буквы
      Validation.OnlyRUSLetters(this);
      
      //Дата Рождения - валидная дата, не позже сегодняшнего числа
      Validation.BirthDate(this);
      
      //E-mail - валидный почтовый адрес
      Validation.Email(this);

      //Фамилия на латинице и Имя на латинице - только английские буквы
      Validation.OnlyENGLetters(this);

      if (this.Errors.length === 0 && this.SuccesValidate === true){
        console.log(JSON.stringify(this.formData));
      }
    }
  },
};
</script>

<style>
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
.form {
  box-sizing: border-box;
  width: 60%;
  margin: 0 auto;
}
.personal-data, .passport-data{
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
}
.change-surname{
  display: flex;
  width: 100%;
}
.wrapper-russian-passport{
  display: flex;
}
.ino-fio{
  display: flex;
  width: 100%;
}
.ino-passport{
  display: flex;
  width: 100%;
}
.errors{
  color: red;
  font-weight: bold;
}
.errorItem{
  border: 1px solid red;
}
.success{
  color: green;
  font-weight: bold;
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
