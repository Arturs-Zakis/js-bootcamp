// Global scope ()
    // Local Scope ()
        // Local Scope(name)
    // Local Scope


// let name = 'Andrew'
if(true){
    // let name = 'Mike';
    if(true){
        let name = 'Jem'; // bez let izveidos global mainigo let name = 'jem'
        console.log(name);
    }
}
if(true){
    console.log(name);
}