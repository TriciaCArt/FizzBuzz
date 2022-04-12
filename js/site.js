// Step One - get -controller accept requrests
function getValues() {
    // First get the fizz and buzz values
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbvalues = fizzBuzzA(fizzValue, buzzValue);
        displayValues(fbvalues);
    } else {
        alert("You must enter integers!")
    }

}

// business logic layer - Model
function fizzBuzzA(fizz, buzz) {
    let fbvalues = [];

    for (let i = 1; i < 101; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            fbvalues.push("FizzBuzz");
        } else if (i % fizz == 0) {
            fbvalues.push("fizz");
        } else if (i % buzz == 0) {
            fbvalues.push("buzz");
        } else {
            fbvalues.push(i);
        }

    }
    return fbvalues;
}

function fizzbuzzB(fizz, buzz) {
    let fbvalues = [];

    let isFizz = false;
    let isBuzz = false;

    for (let i = 1; i < 101; i++) {

        isFizz = (i % fizz == 0);
        isBuzz = (i % buzz == 0);

        switch (true) {
            case isFizz && isBuzz: {
                fbvalues.push('FizzBuzz');
                break;
            }
            case isFizz: {
                fbvalues.push('Fizz');
                break;
            }
            case isBuzz: {
                fbvalues.push('Buzz');
                break;
            }
            default: {
                fbvalues.push(i);
                break;
            }
        }
    }
    return fbvalues
}

// ternary function
function fizzBuzzC(fizz, buzz) {
    let fbvalues = [];

    for (let i = 1; i < 101; i++) {
        let value = ((i % fizz == 0 ? 'Fizz' : '') + (i % buzz == 0 ? 'Buzz' : '') || i);
        fbvalues.push(value);

    }

    return fbvalues;
}

function displayValues(fbvalues) {
    let element = document.getElementById('results');
    element.innerHTML = "";

    for (let index = 0; index < fbvalues.length; index++) {

        let item = document.createElement("div");
        item.classList.add("col");

        item.innerHTML = fbvalues[index];

        if (fbvalues[index] == 'fizz') {
            item.classList.add("fizz");
        } else if (fbvalues[index] == 'buzz') {
            item.classList.add('buzz');

        } else if (fbvalues[index] == 'FizzBuzz') {
            item.classList.add('fizzbuzz');
        }
        element.appendChild(item);

    }
}