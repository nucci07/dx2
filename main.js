function dx2d1(){

    // Campeã de Streaming
    
    var N,      // número de músicas
        x,      // número de vezes que a música foi tocada
        max,    // maior número de vezes que uma música foi tocada
        i;      // contador
    
    const saida = document.querySelector('h1');     // texto de saída
    
    
    // lê número de músicas
    N = prompt("Qual o número de músicas?");
    
    max = 0;    // inicializa maior número de vezes com zero
    i = 1;      // inicializa contador
    
    while (i <= N ) {
        // lê número de vezes que a música foi tocada
        x = prompt("Quantas vezes a música " + i + " foi tocada?"); 
        if (x > max) {
        max = x;     // encontramos um novo máximo
        }
        i++;
    }
    
    // escreve o resultado
    saida.innerHTML = "A música mais tocada tocou: " + max + " vezes!";
    }
    
    // DX2D2
    
    function dx2d2(){
    
    // Melhor Aluno
    
    var N,      // número de alunos
        nome,   // nome de um aluno
        nota,   // nota de um aluno
        melhor, // nome do melhor aluno
        max,    // nota do melhor aluno
        i;      // contador
        
    const saida = document.querySelector('h1');     // texto de saída
    
    // lê número de alunos
    N = prompt("Número de alunos?");
    
    max = 0;      // inicializa melhor nota conhecida até o momento
                  // com um valor menor do que a menor nota possível,
                  // que é 0.0
    i = 0;        // inicializa contador
    
    while (i < N ) {
        // lê nome e nota de um aluno
        nome = prompt("Nome?");
        nota = parseFloat(prompt("Nota?"));
       // nota = parseFloat(nota); 
        if (nota > max) {
        melhor = nome;  // encontramos um aluno com nota
        max = nota;     // maior, armazena esse nome e nota
        }
        i++;
    }
    
    // escreve o resultado
    saida.innerHTML = "A melhor nota foi obtida por: " + melhor;
    }
