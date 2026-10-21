//referenciamos un elemento del DOM

const ContenedorProducto = document.getElementById("contenedor-producto")
//console.log(ContenedorProducto)

// ContenedorProducto.textContent= '<h3>producto 1</h3>'  //Solo texto
// ContenedorProducto.innerHTML= '<h3>producto 1</h3>'

ContenedorProducto.innerHTML = `
                <article>
                    <h3>Correa</h3>
                    <picture>
                        <img src="recursos/imagenes/productos/correa-perro.jpg" alt="Perro mediano con correa">
                        <!-- <source media="(min-width: )" srcset="" sizes=""> -->
                    </picture>
                    <p>
                        Coorea grande
                    </p>
                    <ul>
                        <li>
                            Talles S M L
                        </li>
                        <li>
                            Precio $ 5000
                        </li>
                    </ul>
                    <button>Agregar al carro</button>
                </article>
`


let productosHMTL = ''

productosMascotas.forEach((producto) => {
    productosHMTL +=`
    <article>
        <h3>${producto.nombre}</h3>
            <picture>
                <img src=${producto.imagen} alt=${producto.nombre}>
            </picture>
                 <p>
                   ${producto.descripcion}
                 </p>
                 <ul>
                     <li>
                         Talles ${producto.talles[0]}
                     </li>
                     <li>
                          Precio $ ${producto.precio}
                     </li>
                 </ul>
                <button>Agregar al carro</button>
     </article>
 `
});


ContenedorProducto.innerHTML = productosHMTL