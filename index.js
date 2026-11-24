let elsoSzamjegySzovege = ""
let masodikSzamjegySzovege = ""
let muvelet = ""

const szamokElemek = document.querySelectorAll(".szam")
const eredmenyMezo = document.querySelector('#bevitel')
const muveletElemek = document.querySelectorAll('.muvelet')
const torlesElem = document.querySelector('.torles')
const egyenloElem = document.querySelector('.egyenlo')

console.log(szamokElemek)

for (let index = 0; index < szamokElemek.length; index++) {
    szamokElemek[index].addEventListener("click", function(){
        console.log(event.target.id)
        eredmenyMezo.value += event.target.id
        console.log(eredmenyMezo)
    })
}

for (let index = 0; index < muveletElemek.length; index++) {
    muveletElemek[index].addEventListener("click", function(){
        console.log(event.target.id)
        eredmenyMezo.value += event.target.id
        elsoSzam = inputElem.value
    })
}

torlesElem.addEventListener("click", function(){
    eredmenyMezo.value = ""
})

egyenloElem.addEventListener("click", function(){

})
