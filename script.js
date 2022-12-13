function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var forAno = document.getElementById('txtano');
    var result = document.getElementById('res');
    if (forAno.value.length == 0 || Number(forAno.value) > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(forAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
               img.setAttribute('src', 'foto-crianca-f.png') 
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulta-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        } else if(fsex[1].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'foto-crianca-m.png')
            }else if(idade <21){
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${genero}, com <strong> ${idade} </strong> anos!<br>`
        result.style.paddingBottom = '10px'
        result.appendChild(img)
    }
        
}