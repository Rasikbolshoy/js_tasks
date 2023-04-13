const form = document.forms['my-form'];
const url = "http://localhost:3000/users"

const addUser = async (data) => {
    const options = {
        method: "POST",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(url, options);
    if (response.ok) {
        alert("Добавлено")
        alert("Добавлено")
    } else {
        alert("Ошибка" + response.status);
    }
}

const getformValues =  (event)  => {
    event.preventDefault();
    const values ={};
    let isValid = true;
    for(let field of form){
        let name = field.name;
        if (name){
            if (field.value){
                values[field.name] = field.value;
                field.classList.add('is-valid');
                field.classList.remove('is-valid');
            }else   {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
                isValid = false;
            }
        }
    }

    if (isValid){
        addUser(values);
    }
}
form.addEventListener('submit', getformValues);

