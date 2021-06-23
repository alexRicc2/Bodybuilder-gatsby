console.log('oiii')

    export default function valida(evento){

        evento.preventDefault()
    
        const email = document.querySelector('[data-form-email]').value
        const numero = document.querySelector('[data-form-numero]').value
        const cep = document.querySelector('[data-form-zip]').value
    
        const numeroRGEX = /^[(][0-9]{2,3}[)][0-9]{4,5}[-][0-9]{4}$/
        const emailRGEX = /^[a-z0-9.]+[@][a-z0-9]+\.[a-z0-9]+$/
        const cepRGEX = /[0-9]{5}[-][0-9]{3}/
    
        
        const validaEmail = emailRGEX.test(email)
        const validaNumero = numeroRGEX.test(numero)
        const validaCEP = cepRGEX.test(cep)
    
        if(validaNumero && validaEmail &&validaCEP){
            alert('Parabén você foi cadastrado com sucesso')
        }
        else if(!validaEmail){
            alert('O email precisa ser um email valido.\nEx. : nome@gmail.com')
        }
        else if(!validaNumero){
            alert('O número precisa ser um número valido\nEx. : (xx)xxxxx-xxxx')
        }
        else if(!validaCEP){
            alert('O zip precisa ser valido\nEx. : xxxxx-xxx')
        }
    }


