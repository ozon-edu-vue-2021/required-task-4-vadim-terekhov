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
        <sur-name v-model.trim="surName" />
        <first-name v-model.trim="firstName"/>
        <middle-name v-model.trim="middleName"/>
        <data-birth v-model.trim="dataBirth"/>
        <email v-model.trim="email"/>
        <gender v-model.trim="gender"/>
      </fieldset>
      <h4>Паспортные данные</h4>
      <fieldset class="passport-data">
        <!-- <citizenship v-model.trim="citizenship"/> -->
        <citizenship-custom @send="changeHandler" @input="UpdateForms"/>
        <div v-show="citizenshipCustom">
          <div class="wrapper-russian-passport" v-if="(citizenshipCustom === 'Russia') ? true : false">
            <serial-passport v-model.trim="serialPassport"/>
            <number-passport v-model.trim="numberPassport"/>
            <data-issue-passport v-model.trim="dataIssuePassport"/>
          </div>
          <div class="wrapper-ino-passport" v-if="isNationality">
            <div class="ino-fio">
              <ino-sur-name v-model.trim="inoSurName"/>
              <ino-first-name v-model.trim="inoFirstName"/>
            </div>
            <div class="ino-passport">
              <ino-number-passport v-model.trim="inoNumberPassport"/>
              <ino-country-issue v-model.trim="inoCountryIssue"/>
              <ino-type-passport v-model.trim="inoTypePassport"/>
            </div>
          </div>
        </div>
        <question v-model.trim="changeSurname"/>
        <div class="change-surname" v-show="(changeSurname === 'yes') ? true : false">
          <old-sur-name v-model="oldSurName"/>
          <old-first-name v-model="oldFirstName"/>
        </div>
      </fieldset>
      <button>Отправить</button>
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
//import Citizenship from './Passport Data/Citizenship.vue';
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
export default {
  components: { 
    FirstName,
    SurName, MiddleName, DataBirth, Email, Gender,
    //Citizenship,
    Question, OldSurName, OldFirstName,
    SerialPassport, NumberPassport, DataIssuePassport,
    InoSurName, InoFirstName, InoNumberPassport, InoCountryIssue,
    InoTypePassport, CitizenshipCustom
  },
  data() {
    return {
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
        i.nationality === this.citizenshipCustom && i.nationality !== 'Russia'
      );
    }
  },
  methods: {
    changeHandler(citizenship){
      this.citizenshipCustom = citizenship;
    },
    UpdateForms(value){
      this.citizenshipCustom = value;
    },
    formSubmit(){
      if (
        this.surName !== '' ||
        this.firstName !== '' ||
        this.middleName !== '' ||
        this.dataBirth !== '' ||
        this.email !== '' ||
        this.gender !== 'male' ||
        this.citizenship !== '' ||
        this.changeSurname !== 'no' ||
        this.oldSurName !== '' ||
        this.oldFirstName !== '' ||
        this.serialPassport !== '' ||
        this.numberPassport !== '' ||
        this.dataIssuePassport !== '' ||
        this.inoFirstName !== '' ||
        this.inoSurName !== '' ||
        this.inoNumberPassport !== '' ||
        this.inoCountryIssue !== '' ||
        this.inoTypePassport !== '' ||
        this.citizenshipCustom !== ''
      ){
        this.SuccesValidate = true;
      }else{
        this.SuccesValidate = false;
      }

      //Серия паспорта - 4 цифры
      //Номер паспорта - 6 цифр для гражданства Россия и любое значение для других гражданств
      const serialPassport = document.getElementById('serialpassport');
      const numberPassport = document.getElementById('numberpassport');
      if (this.citizenshipCustom === 'Russia'){
        if (this.serialPassport.length !== 4){
          if (!this.Errors.find(i => i.name === 'serialPassport')){
            this.Errors.push({name: 'serialPassport', text: 'Серия паспорта должна быть 4 цифры'});
            serialPassport.classList.add('errorItem');
          }        
        }else{
          this.Errors = this.Errors.filter(i => i.name !== 'serialPassport');
          serialPassport.classList.remove('errorItem');
        }

        if (this.numberPassport.length !== 6){
          if (!this.Errors.find(i => i.name === 'numberPassport')){
            this.Errors.push({name: 'numberPassport', text: 'Номер паспорта должна быть 6 цифр'});
            numberPassport.classList.add('errorItem');
          }
        }else{
          this.Errors = this.Errors.filter(i => i.name !== 'numberPassport');
          numberPassport.classList.remove('errorItem');
        }
      }else{
        this.Errors = this.Errors.filter(i => i.name !== 'serialPassport');
        this.Errors = this.Errors.filter(i => i.name !== 'numberPassport');
      }

      //Фамилия, Имя, Отчество, Предыдущая Фамилия, Предыдущее Имя- только русские буквы
      const ONLY_RUS_LETTERS = /^[А-Яа-я]+$/;
      const surName = document.getElementById('surname');
      const firstName = document.getElementById('firstname');
      const middleName = document.getElementById('middlename');

      if (this.surName !==''){
        if (!ONLY_RUS_LETTERS.test(this.surName)){
          if (!this.Errors.find(i => i.name === 'surName')){
            this.Errors.push({name: 'surName', text: 'Фамилия только русскими буквами'});
            surName.classList.add('errorItem');
          }
        }else{
          this.Errors = this.Errors.filter(i => i.name !== 'surName');
          surName.classList.remove('errorItem');
        }
      }

      if (this.firstName !== ''){
        if (!ONLY_RUS_LETTERS.test(this.firstName)){
          if (!this.Errors.find(i => i.name === 'firstName')){
            this.Errors.push({name: 'firstName', text: 'Имя только русскими буквами'});        
            firstName.classList.add('errorItem');
          }
        }else{
          this.Errors = this.Errors.filter(i => i.name !== 'firstName');
          firstName.classList.remove('errorItem');
        }
      }

      if (this.middleName !== ''){
        if (!ONLY_RUS_LETTERS.test(this.middleName)){
          if (!this.Errors.find(i => i.name === 'middleName')){
            this.Errors.push({name: 'middleName', text: 'Отчество только русскими буквами'});        
            middleName.classList.add('errorItem');
          }
        }else{
          this.Errors = this.Errors.filter(i => i.name !== 'middleName');
          middleName.classList.remove('errorItem');
        }
      }
      
        if(this.changeSurname === 'yes'){
          const oldSurName = document.getElementById('oldsurname');
          const oldFirstName = document.getElementById('firstsurname');
        if (this.oldSurName !==''){      
          if (!ONLY_RUS_LETTERS.test(this.oldSurName)){
            if (!this.Errors.find(i => i.name === 'oldSurName')){
              this.Errors.push({name: 'oldSurName', text: 'Фамилия (предыдущая) только русскими буквами'});        
              oldSurName.classList.add('errorItem');
            }
          }else{
            this.Errors = this.Errors.filter(i => i.name !== 'oldSurName');
            oldSurName.classList.remove('errorItem');
          }
        }
        if (this.oldFirstName !== '' ){
          if (!ONLY_RUS_LETTERS.test(this.oldFirstName)){
            if (!this.Errors.find(i => i.name === 'oldFirstName')){
              this.Errors.push({name: 'oldFirstName', text: 'Имя (предыдущее) только русскими буквами'});        
              oldFirstName.classList.add('errorItem');
            }
          }else{
            this.Errors = this.Errors.filter(i => i.name !== 'oldFirstName');
            oldFirstName.classList.remove('errorItem');
          }
        }
      }
      
      
    //Дата Рождения - валидная дата, не позже сегодняшнего числа
    const currentDate = new Date();
    const curentDateYear = currentDate.getFullYear();
    const curentDateMonth = currentDate.getMonth() + 1;
    const curentDateNumber = currentDate.getDate();
    const dataBirth = document.getElementById('databirth');
    if (this.dataBirth !== ''){
      const [y,m,d] = this.dataBirth.split('-');
      if (+y > curentDateYear || +m > curentDateMonth || +d > curentDateNumber){
        if (!this.Errors.find(i => i.name === 'dataBirth')){
          this.Errors.push({name: 'dataBirth', text: 'Дата должна быть меньше текущей'});        
          dataBirth.classList.add('errorItem');
        }
      }else{
        this.Errors = this.Errors.filter(i => i.name !== 'dataBirth');
        dataBirth.classList.remove('errorItem');
      }
    }
    
    //E-mail - валидный почтовый адрес
    const VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = document.getElementById('email');
    if (this.email !== ''){
      if (!VALID_EMAIL.test(this.email)){
        if (!this.Errors.find(i => i.name === 'email')){
          this.Errors.push({name: 'email', text: 'Email должен быть корректным'});        
          email.classList.add('errorItem');
        }
      }else{
        this.Errors = this.Errors.filter(i => i.name !== 'email');
        email.classList.remove('errorItem');
      }
    }

    //Фамилия на латинице и Имя на латинице - только английские буквы
    const ONLY_ENG_LETTERS = /^[A-Za-z]+$/;
    const inoSurName = document.getElementById('inosurname');
    const inoFirstName = document.getElementById('inofirstname');
    if (this.citizenshipCustom !== 'Russia' && this.citizenshipCustom !== ''){
      if (!ONLY_ENG_LETTERS.test(this.inoSurName)){
        if (!this.Errors.find(i => i.name === 'inoSurName')){
          this.Errors.push({name: 'inoSurName', text: 'Фамилия только латинскими буквами при выборе иностранного гражданства'});
          inoSurName.classList.add('errorItem');
        }
      }else{
        this.Errors = this.Errors.filter(i => i.name !== 'inoSurName');
        inoSurName.classList.remove('errorItem');
      }

      if (!ONLY_ENG_LETTERS.test(this.inoFirstName)){
        if (!this.Errors.find(i => i.name === 'inoFirstName')){
          this.Errors.push({name: 'inoFirstName', text: 'Имя только латинскими буквами при выборе иностранного гражданства'});
          inoFirstName.classList.add('errorItem');
        }
      }else{
        this.Errors = this.Errors.filter(i => i.name !== 'inoFirstName');
        inoFirstName.classList.remove('errorItem');
      }

    }

    }
  },
};
</script>

<style>
.form {
  box-sizing: border-box;
}
.personal-data{
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}
.change-surname{
  display: flex;
  justify-content: space-between;
}
.wrapper-russian-passport{
  display: flex;
  justify-content: space-between;
}
.ino-fio{
  display: flex;
  justify-content: space-between;
}
.ino-passport{
  display: flex;
  justify-content: space-between;
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
</style>
