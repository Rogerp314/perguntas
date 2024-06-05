let div = document.querySelector("#imagens")

function negativo(event){
    const tecla = event.key
    tecla === 'n'

    let div = document.querySelector('#imagens')
    let pegadinha = document.querySelector('#nao')
    let res = document.querySelector('#resposta')
    let img = document.querySelector("#img")
    let p = document.querySelector('#texto')

    


    if (tecla == 'n'){
        pegadinha.innerHTML='Pressione (S) para <span id="feliz">SIM</span>'
        res.innerHTML='<p>Pensou que tinha escolha? hahaha!!! <br> Você é só minhaaaa!!!!</p>'
        res.style.color='white'
        img.src = 'img/haha.jpg'
        div.appendChild(img)
        p.innerHTML=''
    }
}

function feliz(event){
    const tecla = event.key
    tecla === 's'

    let res = document.querySelector('#resposta')
    let img = document.querySelector('#img')
    let link = document.querySelector('#link')
    let p = document.querySelector('#texto')
    let div = document.querySelector("#imagens")

    if(tecla == 's'){
        res.innerHTML = '<p>EBAAAAAAAAAAAAAAAAAAAAAAA SOU O HOMEM MAIS FELIZ DO UNIVERSO!!!!!</p>'
        res.style.color='#ff287e'
        img.src='img/felicidade.png'
        div.appendChild(img)
        link.src='#'
        p.innerHTML='Clique aqui para seguir caminho!'
        link.appendChild(p)
    }
}