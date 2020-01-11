let isAccountLocked = false;
let userRole = 'user';

 if(isAccountLocked){
     console.log('Account is locked');
 } else if(userRole === 'admin'){
    console.log('Welcome Admin');
 } else{
    console.log('Welcome');
 }

 // challenge

 let temp = 120;

 if(temp <= 32){
     console.log('Its freezing outside');
 } else if(temp >= 110){
     console.log('Its way too hot outside');
 } else{
     console.log('Go for it. Its pretty nice outside.');
 }