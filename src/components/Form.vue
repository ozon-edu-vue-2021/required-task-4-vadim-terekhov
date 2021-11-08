<template>
  <div class="form">
    <form action="">
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
        <citizenship v-model.trim="citizenship"/>
        <div v-show="citizenship">
          <div class="wrapper-russian-passport" v-if="(citizenship === 'Russia') ? true : false">
            <serial-passport v-model.trim="serialPassport"/>
            <number-passport v-model.trim="numberPassport"/>
            <data-issue-passport v-model.trim="dataIssuePassport"/>
          </div>
          <div class="wrapper-ino-passport" v-else>
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
import Citizenship from './Passport Data/Citizenship.vue';
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

export default {
  components: { 
    FirstName,
    SurName, MiddleName, DataBirth, Email, Gender,
    Citizenship, Question, OldSurName, OldFirstName,
    SerialPassport, NumberPassport, DataIssuePassport,
    InoSurName, InoFirstName, InoNumberPassport, InoCountryIssue,
    InoTypePassport
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
    }
  },
  methods: {
  },
};
</script>

<style scoped>
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
</style>
