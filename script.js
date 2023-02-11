function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var resul = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano ){
        window.alert ('[ERRO] Verifique os dados novamente !')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 11){
                //criança
                img.setAttribute('src', 'images/foto-bebe-m.png')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src', 'images/foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'images/foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'images/foto-idoso-m.png')
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 11){
                //criança
                img.setAttribute('src', 'images/foto-bebe-f.png')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src', 'images/foto-jovem-f.png')
            }else if(idade < 50){
                //adulta
                img.setAttribute('src', 'images/foto-adulto-f.png')
            }else{
                //idosa
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        resul.style.textAlign = 'Center'
        resul.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resul.appendChild(img)
    }
}