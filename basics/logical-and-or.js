let temp = 55;

if(temp >= 60 && temp <= 90){
    console.log('Its really nice outside');
} else if(temp <= 0 || temp >= 120){
    console.log('Dont go outside');
} else{
    console.log('Eh. Do what u want');
}

// challenge

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Offer only vegan dishes');
} else if(isGuestTwoVegan || isGuestOneVegan){
    console.log('Offer vegan and non-vegan dishes');
} else{
    console.log('Offer anything on the menu');
}