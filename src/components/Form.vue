<template>
  <div class="wrapper-form">
    <form class="form">
      <h4>Личные данные</h4>
      <my-input v-model.trim="formData.surName" :config="{id:'surname',type:'text',label:'Фамилия'}" />
      <my-input v-model.trim="formData.firstName" :config="{id:'firstname',type:'text',label:'Имя'}" />
      <my-input v-model.trim="formData.middletName" :config="{id:'middlename',type:'text',label:'Отчество'}" />
      <my-input v-model.trim="formData.dataBirth" :config="{id:'databirth',type:'date',label:'Дата рождения',placeholder:'дд.мм.гггг'}" />
      <my-input v-model.trim="formData.email" :config="{id:'email',type:'text',label:'E-mail'}" />

      <my-radio 
        :config="[
          {id:'male',type:'radio',label:'Мужской',name:'gender',checked: true,value: 'male'},
          {id:'female',type:'radio',label:'Женский',name:'gender',checked: false, value: 'female'}
        ]"
        v-model.trim="formData.gender"
      >Пол</my-radio>

      <my-radio 
        :config="[
          {id:'no',type:'radio',label:'Нет',name:'changeSurname',checked: true,value: 'no'},
          {id:'yes',type:'radio',label:'Да',name:'changeSurname',checked: false, value: 'yes'}
        ]"
        v-model.trim="formData.changeSurname"
      >Меняли ли фамилию или имя?</my-radio>

    </form>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue';
import MyRadio from '@/components/MyRadio.vue';

export default {
  components: {
    MyInput,
    MyRadio
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
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.form {
}
</style>
