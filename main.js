const cpf = document.querySelector('#cpf')
const rg = document.querySelector('#rg')

cpf.addEventListener('keypress', () => {
    const inputlength = cpf.value.length

   if (inputlength === 3 || inputlength === 7) {
        cpf.value += '.'
   }else if (inputlength === 11) {
    cpf.value += '-'
   
}
});

rg.addEventListener('keypress', () => {
    const inputlength = rg.value.length

   if (inputlength === 2 || inputlength === 6) {
        rg.value += '.'
   }else if (inputlength === 10) {
        rg.value += '-'
   
}
});

