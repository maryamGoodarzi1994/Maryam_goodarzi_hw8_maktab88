let textInput = document.getElementById('text-input');

// textInput.onkeydown = function(){
//     console.log(this.onkeydown.code);
// }
document.addEventListener(
    "keydown",
    function(event) {
        if(event.key === '-' || event.key === '.'){
            console.log('hi');
            textInput.value.replace('-','_');
        }
      console.log(event.key);
    },
  );