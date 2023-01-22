const form = document.querySelector('form')
const nlwSteup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form. addEventListener('change', save)

function add (){

    const today = new Date().toLocaleDateString("pt-br").slice(0,-5)

    const dayExists=nlwSteup.dayExists(today)

    if (dayExists){
        alert('Dia incluso')
        return
    }
    alert('dia adcionado com sucesso ✔')

    nlwSteup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSteup.data))

}
 const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSteup.setData(data)
nlwSteup.load()