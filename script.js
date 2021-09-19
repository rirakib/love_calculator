const btn = document.getElementById('check');
const reset = document.getElementById('reset');


btn.addEventListener('click',function(){
    
    var name = document.getElementById('name');
    var lname = document.getElementById('lname');
    var username = document.getElementById('username');
    var userLoveName = document.getElementById('userLoveName');
    var percentNumber = document.getElementById('percentNumber');
    var rand = Math.random() * 100;
    var randVal = Math.floor(rand);
    var nameVal = name.value;
        if(nameVal == ""){
            alert('please enter your name');
        }
        else if(lname.value == ""){
            alert('please inter your love name');
        }
        else if(!isNaN(name.value)){
            alert('name not to be number');
        }
        else if(!isNaN(lname.value)){
            alert('love name not to be number');
        }
        else if(name.value.length <=2){
            alert('name not to be less then 3 Charechter')
        }
        else if(lname.value.length <=2){
            alert('love name not to be less then 3 Charechter')
        }
        else{
            nameVal = name.value;
            lnameVal = lname.value;
            username.innerHTML = `Your Name ${nameVal}`;
            userLoveName.innerHTML = `Your Love Name ${lnameVal}`;
            percentNumber.innerHTML = `${randVal}%`; 
            
        }
       

    }
)

reset.addEventListener('click',function(){
    location.reload();
})

    
 
   

