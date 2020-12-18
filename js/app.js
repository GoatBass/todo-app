let changeThemeToLight = document.querySelector('#theme-changer-light')
let changeThemeToDark = document.querySelector('#theme-changer-dark')
let showButton = document.querySelector('#theme-changer-dark')
let hideButton = document.querySelector('#theme-changer-light')
let div = document.querySelectorAll('#bg-color-theme-change')
let addTodo = document.querySelector('#addTodo')
let checkboxes = document.querySelectorAll('input[type=checkbox]')
let labels = document.querySelectorAll('label')


changeThemeToDark.addEventListener('click', function() {
    
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    showButton.style.display = 'none'
    hideButton.style.display = 'inherit'
    div[0].classList.remove('bg-color-light')
    div[1].classList.remove('bg-color-light')
    div[0].classList.add('bg-color-dark')
    div[1].classList.add('bg-color-dark')
})

changeThemeToLight.addEventListener('click', function() {

    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    showButton.style.display = 'inherit'
    hideButton.style.display = 'none'
    div[0].classList.remove('bg-color-dark')
    div[1].classList.remove('bg-color-dark')
    div[0].classList.add('bg-color-light')
    div[1].classList.add('bg-color-light')
})


let contador = 2;
addTodo.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
        if(!addTodo.value){
            alert("Error! Not allowed empty tasks")
        } else {
            let text = addTodo.value
            div[1].innerHTML += `<div class="task-input border-bottom"><input type="checkbox" id="${contador}"><label for="${contador}"> ${text} </label></div>`;
            addTodo.value = "";
            contador++;
            checkboxes = document.querySelectorAll('input[type=checkbox]')
        }
	}
});


checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
        let idCh = parseInt(checkbox.id)
        labels[idCh].classList.add('checked-tasks')
    })
})