function calculate(){
    const dob=document.getElementById("dob").value;
    const today=new Date();
    const yourBirthDay=new Date(dob);
    let currYear=today.getFullYear();
    let yourBirthYear=yourBirthDay.getFullYear();
    let age=currYear-yourBirthYear;
    // if(age<0){
    //     age=0;
    // }

if(dob==''){
    document.getElementById("outPut").innerText="Please enter your date of birth";
}else if(age<0){
    document.getElementById("outPut").innerText="Please enter a valid date of birth";
}
else {
    document.getElementById("outPut").innerText="You are "+age+" years old";
}

}