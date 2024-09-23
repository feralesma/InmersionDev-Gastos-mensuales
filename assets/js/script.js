let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];


// Esta función se invoca al momento en que el usuario hace
//clic al botón.
function clickBoton() {

    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;

    console.log(nombreGasto);
    console.log(descripcionGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos)

    if (!nombreGasto || !descripcionGasto || !valorGasto) {
      alert("Debe completar todos los campos!!.");
      return; // salir de la función
    }

    listaNombresGastos.push(nombreGasto);
    listaDescripcionGastos.push(descripcionGasto)
    listaValoresGastos.push(valorGasto);
    //En los arreglos (arrays) el primer elemento tiene la posición 0
    console.log(listaNombresGastos);
    console.log(listaDescripcionGastos)
    console.log(listaValoresGastos);
    //alert("Click de usuario");

    if (valorGasto > 150) {
        alert("Atención!! El gasto registrado es mayor a 150$")
    }
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos")
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        //console.log(elemento);
        //console.log(posicion);
        //Podemos construir un html / crear elementos html
        const valorGasto = Number(listaValoresGastos[posicion])
        const descripcionGasto = listaDescripcionGastos[posicion];


        htmlLista += `<li>${elemento} - ${descripcionGasto} - USD ${valorGasto.toFixed(2)}
            <div>
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
            <button onclick="modificarGasto(${posicion});">Modificar</button>
            </div>
            </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto); // tal vez no sea necesario Number
        //console.log(totalGastos)
    });
    //console.log(htmlLista);
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();

}

function limpiar() {
    document.getElementById("nombreGasto").value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById("valorGasto").value = '';
    
}

function eliminarGasto(posicion) {
    console.log(posicion);
    listaNombresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    console.log("Modificar posición: "+posicion);

    let nombreGasto = listaNombresGastos[posicion];
    let descripcionGasto = listaDescripcionGastos[posicion];
    let valorGasto = listaValoresGastos[posicion];

    document.getElementById('nombreGasto').value = nombreGasto;
    document.getElementById('descripcionGasto').value = descripcionGasto;
    document.getElementById('valorGasto').value = valorGasto;

    document.getElementById('botonFormulario').innerHTML = 'Guardar Cambios';
    document.getElementById('botonFormulario').onclick = function () { guardarCambios(posicion); };
    
    //console.log(document.getElementById("botonFormulario").onclick.value);
}

function guardarCambios(posicion) {
    console.log("Guardar en posicion: " + posicion);

    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;

    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcionGasto)

    listaNombresGastos[posicion] = nombreGasto;
    listaDescripcionGastos[posicion] = descripcionGasto;
    listaValoresGastos[posicion] = valorGasto;

    actualizarListaGastos();
    limpiar();

    document.getElementById('botonFormulario').innerHTML = 'Agregar Gasto';
    document.getElementById('botonFormulario').onclick = function () { clickBoton(); };

}