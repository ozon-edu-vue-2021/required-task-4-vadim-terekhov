export default class ValidationClass{
 
  static RUSPassportSerialNumber(context){
    //Серия паспорта - 4 цифры
    //Номер паспорта - 6 цифр для гражданства Россия и любое значение для других гражданств
    const serialPassport = document.getElementById('serialpassport');
    const numberPassport = document.getElementById('numberpassport');
    if (context.formData.citizenshipCustom === 'Russia'){
      if (context.formData.serialPassport.length !== 4){
        if (!context.Errors.find(i => i.name === 'serialPassport')){
          context.Errors.push({name: 'serialPassport', text: 'Серия паспорта должна быть 4 цифры'});
          serialPassport.classList.add('errorItem');
        }        
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'serialPassport');
        serialPassport.classList.remove('errorItem');
      }

      if (context.formData.numberPassport.length !== 6){
        if (!context.Errors.find(i => i.name === 'numberPassport')){
          context.Errors.push({name: 'numberPassport', text: 'Номер паспорта должна быть 6 цифр'});
          numberPassport.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'numberPassport');
        numberPassport.classList.remove('errorItem');
      }
    }else{
      context.Errors = context.Errors.filter(i => i.name !== 'serialPassport');
      context.Errors = context.Errors.filter(i => i.name !== 'numberPassport');
    }
  }

  static OnlyRUSLetters(context){
    //Фамилия, Имя, Отчество, Предыдущая Фамилия, Предыдущее Имя- только русские буквы
    const ONLY_RUS_LETTERS = /^[А-Яа-я]+$/;
    const surName = document.getElementById('surname');
    const firstName = document.getElementById('firstname');
    const middleName = document.getElementById('middlename');

    if (context.formData.surName !==''){
      if (!ONLY_RUS_LETTERS.test(context.formData.surName)){
        if (!context.Errors.find(i => i.name === 'surName')){
          context.Errors.push({name: 'surName', text: 'Фамилия только русскими буквами'});
          surName.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'surName');
        surName.classList.remove('errorItem');
      }
    }

    if (context.formData.firstName !== ''){
      if (!ONLY_RUS_LETTERS.test(context.formData.firstName)){
        if (!context.Errors.find(i => i.name === 'firstName')){
          context.Errors.push({name: 'firstName', text: 'Имя только русскими буквами'});        
          firstName.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'firstName');
        firstName.classList.remove('errorItem');
      }
    }

    if (context.formData.middleName !== ''){
      if (!ONLY_RUS_LETTERS.test(context.formData.middleName)){
        if (!context.Errors.find(i => i.name === 'middleName')){
          context.Errors.push({name: 'middleName', text: 'Отчество только русскими буквами'});        
          middleName.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'middleName');
        middleName.classList.remove('errorItem');
      }
    }
    
    if(context.formData.changeSurname === 'yes'){
      const oldSurName = document.getElementById('oldsurname');
      const oldFirstName = document.getElementById('firstsurname');
      if (context.formData.oldSurName !== ''){      
        if (!ONLY_RUS_LETTERS.test(context.formData.oldSurName)){
          if (!context.Errors.find(i => i.name === 'oldSurName')){
            context.Errors.push({name: 'oldSurName', text: 'Фамилия (предыдущая) только русскими буквами'});        
            oldSurName.classList.add('errorItem');
          }
        }else{
          context.Errors = context.Errors.filter(i => i.name !== 'oldSurName');
          oldSurName.classList.remove('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'oldSurName');
        oldSurName.classList.remove('errorItem')
      }
      if (context.formData.oldFirstName !== ''){
        if (!ONLY_RUS_LETTERS.test(context.formData.oldFirstName)){
          if (!context.Errors.find(i => i.name === 'oldFirstName')){
            context.Errors.push({name: 'oldFirstName', text: 'Имя (предыдущее) только русскими буквами'});        
            oldFirstName.classList.add('errorItem');
          }
        }else{
          context.Errors = context.Errors.filter(i => i.name !== 'oldFirstName');
          oldFirstName.classList.remove('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'oldFirstName');
        oldFirstName.classList.remove('errorItem');
      }
    }
  }

  static BirthDate(context){
    //Дата Рождения - валидная дата, не позже сегодняшнего числа
    const currentDate = new Date();
    const curentDateYear = currentDate.getFullYear();
    const curentDateMonth = currentDate.getMonth() + 1;
    const curentDateNumber = currentDate.getDate();
    const dataBirth = document.getElementById('databirth');
    if (context.formData.dataBirth !== ''){
      const [y,m,d] = context.formData.dataBirth.split('-');
      if (+y > curentDateYear || +m > curentDateMonth || +d > curentDateNumber){
        if (!context.Errors.find(i => i.name === 'dataBirth')){
          context.Errors.push({name: 'dataBirth', text: 'Дата должна быть меньше текущей'});        
          dataBirth.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'dataBirth');
        dataBirth.classList.remove('errorItem');
      }
    }
  }

  static Email(context){
    //E-mail - валидный почтовый адрес
    const VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = document.getElementById('email');
    if (context.formData.email !== ''){
      if (!VALID_EMAIL.test(context.formData.email)){
        if (!context.Errors.find(i => i.name === 'email')){
          context.Errors.push({name: 'email', text: 'Email должен быть корректным'});        
          email.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'email');
        email.classList.remove('errorItem');
      }
    }
  }

  static OnlyENGLetters(context){
    //Фамилия на латинице и Имя на латинице - только английские буквы
    const ONLY_ENG_LETTERS = /^[A-Za-z]+$/;
    const inoSurName = document.getElementById('inosurname');
    const inoFirstName = document.getElementById('inofirstname');
    if (context.formData.citizenshipCustom !== 'Russia' && context.formData.citizenshipCustom !== ''){
      if (!ONLY_ENG_LETTERS.test(context.formData.inoSurName)){
        if (!context.Errors.find(i => i.name === 'inoSurName')){
          context.Errors.push({name: 'inoSurName', text: 'Фамилия только латинскими буквами при выборе иностранного гражданства'});
          inoSurName.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'inoSurName');
        inoSurName.classList.remove('errorItem');
      }

      if (!ONLY_ENG_LETTERS.test(context.formData.inoFirstName)){
        if (!context.Errors.find(i => i.name === 'inoFirstName')){
          context.Errors.push({name: 'inoFirstName', text: 'Имя только латинскими буквами при выборе иностранного гражданства'});
          inoFirstName.classList.add('errorItem');
        }
      }else{
        context.Errors = context.Errors.filter(i => i.name !== 'inoFirstName');
        inoFirstName.classList.remove('errorItem');
      }
    }else{
      context.Errors = context.Errors.filter(i => i.name !== 'inoSurName');
      context.Errors = context.Errors.filter(i => i.name !== 'inoFirstName');
      //inoSurName.classList.remove('errorItem');
      //inoFirstName.classList.remove('errorItem');
    }
  }
}