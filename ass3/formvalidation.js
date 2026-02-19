
function submitt(){
    event.preventDefault();
    namefield=document.querySelector('input').value;
    agefield=document.querySelector("#age").value;
    phonefield=document.querySelector("#phone").value;
    if(namefield=='' || agefield==''){
        alert("enter sth bro");
    }
    else{
    
    if(agefield<18){
        alert("too young");
    }
    else{
        if(phonefield.length!=10){
            alert("enter a valid phone number");
        }
        else{
        alert("good job");}
    }
}
}