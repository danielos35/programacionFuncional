// .................................FUNCIÓN PURA............
    // 1. Cualquier función que no tienen efectos colaterales. 
    // 2. Función que recibiendo los mismos argumentos siempre va a retornar el mismo valor.
    // 3. NO depepende de un contexto de ejecución externo 

    let pura = function(a:number, b:number){
       return a+b;
    }
    
    console.log(pura(2,3));
    



// ...............................FUNCIÓN INPURA..........
    // 1. Es aquella que depende de un contexto de ejecución externo 
    let variableExterna = 12;
    let impura = function(a:number, b:number){
        return variableExterna+=a+b;
    }
    console.log(impura(2,5));
    





//..................................NOTAS.........................
    //1. La programación funcional es un conjunro de practicas 
