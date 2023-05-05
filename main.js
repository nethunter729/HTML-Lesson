function getTextValue() {
    alert(document.getElementById("text-demo").value);
}

function getcheckValue() {
    alert(document.getElementById("checkbox-demo").checked)
}

function getcolorValue() {
    alert(document.getElementById("color-demo").value)
}

function getdateValue() {
    alert(document.getElementById("date-demo").value)
}

function getTimeValue() {
    alert(document.getElementById("time-demo").value)
}

function getdatetimeValue() {
    alert(document.getElementById("datetime-demo").value)
}

function getWeekValue() {
    alert(document.getElementById("week-demo").value)
}

function getMonthValue() {
    alert(document.getElementById("month-demo").value)
}

function getemailValue() {
    alert(document.getElementById("email-demo").value)
}

function readfile() {
    var reader = new FileReader();
    var fileElement = document.getElementById("file-demo").files[0];

    reader.onload = function (e) {
        document.getElementById("selected-img-result").src = e.target.result;
    }

    reader.readAsDataURL(fileElement);
}

function getHiddenValue() {
    alert(document.getElementById("hidden-demo").value)
}



function getNumberValue() {
    alert(document.getElementById("number-demo").value)
}

function getPasswordValue() {
    alert(document.getElementById("password-demo").value)
}


function getRadioValue() {
    // radios = Radio Elements
    var radio = document.getElementsByName("gender");

    // number of radios = 2
    var number_of_radios = radio.length;

    for (var i = 0; i < number_of_radios; i++) {
        if (radio[i].checked) {
            alert(radio[i].value);
        }

    }
}

function getRangeValue() {
    alert(document.getElementById("range-demo").value)
}

function getSearchValue() {
    alert(document.getElementById("search-demo").value)
}

function getTelValue() {
    alert(document.getElementById("tel-demo").value)
}

function getUrlValue() {
    alert(document.getElementById("url-demo").value)
}

function buttonFunction() {
    alert(document.getElementById("button-demo").value)
}

function Submit(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
    }
    alert("Name: " + name + "\nEmail: " + email);
}

function Reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

function gtextareaValue() {
    alert(document.getElementById("texarea-demo").value)
}


function getDropValue() {
    alert(document.getElementById("dropdown-demo").value)
}

function getMDropValue() {
    var selectEl = document.getElementById("Mdropdown-demo");
    var selectedValues = [];

    for (var i = 1; i < selectEl.options.length; i++) {
        var option = selectEl.options[i];
        if (option.selected) {
            selectedValues.push(option.value);
        }
    }

    alert(selectedValues.length > 1 ? selectedValues.join(", ") : selectedValues[0]);
}