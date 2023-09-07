// var let const -> variaveis
var processoAtual = null;

function criarProcesso(id, tempo_cpu){
    // retonar uma estrutura de dados que sera o meu processo
    //id identificaor
    //tempoCpu
    return {
        id: id,
        tempo_cpu : tempo_cpu,
    }
}

function so(processo){
    //processo pronto
    document.write(`<br> O PROCESSO ${processo.id} está pronto para execução. <br>`);
    //processo em execução
    while(processo.tempo_cpu > 0){
        document.write(`<br> ${processo.id} está em execução em ${processo.tempo_cpu} tempo.<br>`);
        processo.tempo_cpu = processo.tempo_cpu - 1;
        //processo.tempo_cpu--;
    }
//processo concluido
document.write(`Processo ${processo.id} foi concluído.`);
}

// usar no final
// lista de processos
var processo1 = criarProcesso(1, 5);
var processo2 = criarProcesso(2, 3);

//executar o processo
so(processo1);
so(processo2);