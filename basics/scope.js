// lexical scope (static scope)
// Global scope - defind outside of all code blocks
// Local scope - definde inside a code block

// in a scope you can access variables defined in that scope, or in any parent scope.

// Global scope (varOne)
    // Local Scope(varTwo)
        // Local Scope(varFour)
    // Local Scope(varThree)

let varOne = 'varOne';

if(true){
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if(true){
        let varFour = 'varFour';
        console.log(varOne)
    }
}

if(true){
    let varThree = 'varThree';
}

