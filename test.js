function testDateBirth(form) {
    var TestVar = form.inputbox.value;
    if ((typeof Number(TestVar) == "number") && (TestVar < 2014) && (TestVar > 1900)) {
        alert("Данные введены корректно");
    }
     else {
         alert("Введите, пожалуйста, корректные данные")
    }
}

function testEmail(form){
    var TestVar = form.inputbox.value;
    if ((TestVar.indexOf("@") > -1) && (TestVar.indexOf("a") > -1)) {
        alert("Данные введены корректно");
    }
     else {
         alert("Введите, пожалуйста, корректные данные");

    }
}


function checkCheckBox(f){
if (f.agree.checked == false )
{
alert('Без Вашего согласия участие в конкурсе невозможно');
return false;
}else
return true;
}
