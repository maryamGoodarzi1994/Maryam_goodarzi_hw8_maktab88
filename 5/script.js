function validateForm (){
    const addButton = document.getElementById('add');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const confirmPasswordInput = document.getElementById('confirm-password-input');
    const emailSpan = document.getElementById('email-span');
    const passwordSpan = document.getElementById('password-span');
    const confirmPasswordSpan = document.getElementById('confirm-password-span');
    let includeChar = null;
    let includeNumber = null;

addButton.onclick= function(){
    if(!emailInput.value){
        emailSpan.textContent = 'required';
        emailInput.style.borderColor = 'red';
        
    }
   if(!passwordInput.value){
    
    passwordSpan.textContent = 'required.';
    passwordInput.style.borderColor = 'red';
    

   }
   if(passwordInput.value && passwordInput.value.length < 8){
    passwordSpan.textContent = ' password length should be at least 8.';

   }
   includeChar = passwordInput.value.split('').some(char => char.charCodeAt() > 65 && char.charCodeAt()< 120);
   includeNumber = /[0-9]/.test(passwordInput.value);
   
   if(passwordInput.value && (!includeChar || !includeNumber)) {
     passwordSpan.textContent = ' password should contain at least 1 character and 1 number.';
   }
   if(!confirmPasswordInput.value){
    confirmPasswordSpan.textContent = 'required.';
    confirmPasswordInput.style.borderColor = 'red';
    
    
   }
   
   if (passwordInput.value !== confirmPasswordInput.value){
    confirmPasswordSpan.textContent = ' password and confirm password should be the same'
   }
}
}
validateForm()