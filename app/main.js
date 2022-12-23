window.onload = () => {
    const mailerform = document.getElementById('mailer-form')
    mailerform.onsubmit= async (e) => {
        e.preventDefault()
        const error = document.getElementById('error')
        error.innerHTML = ''
        // codigo para transformar los datos que //
        // estan dentro campos dentro del formulario en un objeto //
        const formData = new FormData(mailerform)
        const data = Object.fromEntries(formData.entries())
        // fin codigo objeto //
        const response = await fetch('/send',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const responseText = await response.text()
        if(response.status > 300) {
            error.innerHTML = responseText
            return
        }

        mailerform.reset()
        alert('correo enviado con exito')
    }
}