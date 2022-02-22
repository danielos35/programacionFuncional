// .............................RECURSOS.......................
    let arr = [1,2,3,4]






// ......................FUNCION DE PRIMER ORDEN...................
    // 1. Es una función que es tratada como una variable y puede ser pasada como parametro
    
    
// ......................FUNCIONES DE ORDEN SUPERIOR...............
    // Es una función que recibe otra función como parametros
        
    arr.map( //..........Función de orden superior
            function(res)//.................función de primer orden
            {
    
            }
        )
    

//...........................TIPAR FUNCIONES................

// ...........Interface,limita los datos que tendrá un objeto
    interface Beer{
        name:string;
        alcohol:number
    }


    const data:Beer[] =[
        {name:"cerveza1",
            alcohol:7.5
        },
        {name:"cerveza2",
            alcohol:7.5
        },
        {name:"cerveza3",
            alcohol:7.5
        },
    ]


// ..........................CREAR FUNCIÓN DE ORDEN SUPERIOR......................

    // 1. Primer argumento: recibe un arreglo de Beer.
    // 2. Argumento: recibe una función de primer orden, que recibe un arreglo de string, y no retorna nada (void);
    function traerInfo(beers:Beer[], funcionPrimerOrden:(parametro:string[])=>void){
        
        const nuevasCervezas = beers.map(elemento=>`Cerveza ${elemento.name} con ${elemento.alcohol}`);
        funcionPrimerOrden(nuevasCervezas)
    }

// .........................CREAR FUNCIÓN DE ORDEN SUPERIOR........................
    
    // 1.Es una función que va poder ser usada como variable y/o argumento

 function funcPrimerOrdenMinusculas(beer:string[]):void{
    beer.forEach(elemento=>console.log(elemento.toLowerCase())
    )
 }
 function funcPrimerOrdenMayus(beer:string[]):void{
    beer.forEach(elemento=>console.log(elemento.toUpperCase())
    )
 }




// EJECUTAR FUNCIÓN DE ORDËN SUPERIOR JUNTO A FUNCIÓN DE PRIMER ORDEN
    // NO colocar parentesis ya que la función se está comportando como una variable
    traerInfo(data, funcPrimerOrdenMinusculas)
    traerInfo(data, funcPrimerOrdenMayus)


    // La programación funcional permite generar cambios en el comportamiento de la aplicación, simplemente cambiondo la función que envio
    // Por ejemplo podria que la función anterior no me retornara los eleementos en mayusculas, sino por el contrario en minusculas 

    





// NOTAS...................................
// En la programación funcional no se modifican los elementos externos