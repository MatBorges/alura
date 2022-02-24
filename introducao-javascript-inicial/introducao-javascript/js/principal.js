pacientes = document.querySelectorAll('.paciente')
for (var i = 0; i < pacientes.length; i++) {    
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    if (peso <= 0 || peso >= 300) {
        paciente.querySelector('.info-imc').textContent = 'Peso inválido';
        paciente.classList.add('dados-invalidos');
    } else {
        if (altura <= 0 || altura >= 2.5) {
            paciente.querySelector('.info-imc').textContent = 'Altura inválida';
            paciente.classList.add('dados-invalidos');
        } else {
            paciente.querySelector('.info-imc').textContent = (peso / (altura * altura)).toFixed(2);    
        } 
    }    
}
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var paciente = document.createElement('tr');    

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');    

    nomeTd.textContent = form.nome.value;
    pesoTd.textContent = form.peso.value;
    alturaTd.textContent = form.altura.value;
    gorduraTd.textContent = form.gordura.value;
    imcTd.textContent = (pesoTd.textContent / (alturaTd.textContent * alturaTd.textContent)).toFixed(2);      

    paciente.appendChild(nomeTd);
    paciente.appendChild(pesoTd);
    paciente.appendChild(alturaTd);
    paciente.appendChild(gorduraTd);
    paciente.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(paciente);
})