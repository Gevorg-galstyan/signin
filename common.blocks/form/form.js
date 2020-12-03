/**
 * Created by gevor on 02.12.2020.
 */
bool = false;

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(document.getElementsByClassName('form__input_email')[0].value.toLowerCase())){
        bool = true;
        return (true)
    }
    bool = false;
    return (false)
}
document.getElementsByClassName('form__input_email')[0].addEventListener('keyup', function(){
    validateEmail();
    if(bool === true){
        document.getElementsByClassName('form__input_password')[0].removeAttribute("disabled");
        document.getElementsByClassName('form__input_alert')[0].removeAttribute("data-class")
    }
});

document.getElementsByClassName('form__input_email')[0].addEventListener('blur', function(){
    if(bool === true){
        document.getElementsByClassName('form__input_password')[0].removeAttribute("disabled");
        document.getElementsByClassName('form__input_alert')[0].removeAttribute("data-class")
    }else{

        document.getElementsByClassName('form__input_password')[0].setAttribute("disabled", true);
        document.getElementsByClassName('form__input_alert')[0].setAttribute("data-class", "active")
    }
})