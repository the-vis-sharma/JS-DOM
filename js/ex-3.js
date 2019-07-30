let url_string = window.location.href;
let url = new URL(url_string);
let c = url.searchParams.get("fname");
if (c != null) {
    alert(c + " your details are saved.");
}

function validate(index) {
    
    let regexs = { "first_name": /^[a-zA-Z]+$/, "last_name": /^[a-zA-Z]+$/,  // first name and last name
        "dob": /^([0-2][0-9]|[3][0-1])[\/]([0][0-9]|[1][0-2])[\/][0-9]{4}$/,  // dob
        "email": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,  // email
        "mobile": /^[9876][0-9]{9}$/, "building": /^[a-zA-Z0-9][a-zA-Z0-9\/\,\ ]*$/, "street": /^[a-zA-Z0-9][a-zA-Z0-9\/\,\ ]*$/,  // mobile, building, stree
        "area": /^[a-zA-Z0-9][a-zA-Z0-9\/\,\ ]*$/, "city": /^[a-zA-Z][a-zA-Z\ ]*$/, "state": /^[a-zA-Z0-9][a-zA-Z0-9\/\,\ ]*$/, // area, city, state
        "pin": /^[0-9]{6}$/
    };

    let inputs = Array.from(document.getElementsByTagName("input"));

    let btnSub = document.getElementById('submit');
    let err_msg = document.getElementById('err_msg');

    // let isAllValid = true;
    // for (let i = 0; i <= index; i++) {

    //     if (i == 3 || i == 4) {
    //         if (!inputs[3].checked && !inputs[4].checked) {
    //             err_msg.innerHTML = "Choose gender.";
    //             isAllValid = false;   
    //             btnSub.disabled = true;
    //             break;
    //         }
    //     }
    //     else {
    //         // console.log("reg: " + regexs.first_name);
    //         if (!regexs[inputs[i].id].test(inputs[i].value)) {
    //             err_msg.innerHTML = inputs[i].id + " is Not valid.";
    //             isAllValid = false;   
    //             btnSub.disabled = true;
    //             break;
    //         }
    //     }
    // }

    // console.log("is Valid: " + isAllValid);
    // if (isAllValid) {
    //     btnSub.disabled = false;
    // }


    //done above logic with simple map function.
    let invalidIds = inputs.map(input => {
        //console.log(input.id);
        if (input.id != "male" && input.id != "female" && !regexs[input.id].test(input.value)) {
            return input.id;
        }
    }).filter(id => id !== undefined);

    let isGenderSelected = inputs.filter(input => input.id === "male" || input.id === "female")
        .reduce((isSelected, input) => console.log(input.id) || (!isSelected || false) && !input.checked ? false : true);

    if (!isGenderSelected) {
        invalidIds.push("Gender");
    }

    if (invalidIds.length > 0) {
        err_msg.innerHTML = invalidIds.toString() + " are not valid.";
        btnSub.disabled = true;
    }
    else {
        err_msg.innerHTML = "";
        btnSub.disabled = false;
    }
}