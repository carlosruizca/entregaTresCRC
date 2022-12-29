const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".container-login")
const logout = document.querySelector("#logout")
const contenedorProductos = document.querySelector(".container-productos")
const tabla = document.querySelector("table")

const datosUsuario = {
    user: "carlos",
    password: "ceruizc123"
}

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        logout.style.display = "block"      
        contenedorProductos.style.display = "none"        
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
        contenedorProductos.style.display = "flex"
    }
}

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"
        contenedorProductos.style.display = "none"        
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block"
        contenedorProductos.style.display = "flex"        
    }
}

validarLogin(obtenerDelLs("login"))

logout.onclick = () => {
    localStorage.removeItem( "login" )
    console.log("me hacen click")
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
}

function productosAHtml ( array ) {
    const arrayProductos = array.reduce( ( acc, elemento ) => {
        return  acc + `
        <tbody>
            <tr>
                <td>
                    ${elemento.id}
                </td>
                <td>
                    ${elemento.nombreProducto}
                </td>
                <td>
                    ${elemento.precio}
                </td>
                <td>
                    ${elemento.presentacion}
                </td>
                <td>
                    ${elemento.categoria}
                </td>
            </tr>
        </tbody>       
        `
    },`
    <thead>
    <tr>
        <th>
            ID
        </th>
        <th>
            Nombre
        </th>
        <th>
            Precio
        </th>
        <th>
            Presentacion
        </th>
        <th>
            Categoria
        </th>
        <tr>
    </thead>
    `)
    tabla.innerHTML = arrayProductos
}

productosAHtml(productos)


// 01. Función aplicar descuento.
// Verifica si un producto tiene oferta, en caso de ser así, se informará que tiene descuento

// console.log(productos)

// function verificarOferta ( array )
// {
//     for ( let i = 0; i <array.length; i++)
//     {    
//         if ( array[i].oferta === true)
//         {
//             console.log(`El producto ${array[i].nombreProducto} tiene un 5% de descuento`)
//         }
//     }
// }



// 02. Organizar la lista de productos
// Mediante un prompt, se le pregunta al usuario cómo desea ordenar la lista de productos, entre las opciones A-Z o Z-A. La lista de productos se organizará siguiento la opción elegida por el usuario.
// Subfunciones organizarAZ organizarZA

// function organizarProductos ( array )
// {
//     let formaOrganizar = prompt("Cómo desea organizar sus productos? A:Desde la A, Z:desde la Z")
//     {
//         if (formaOrganizar === "A")
//         {
//             const productosAZ = [...productos].sort((a,b) =>
//             {
//                 if (a.nombreProducto < b.nombreProducto)
//                     {
//                         return -1
//                     }
//                 else if (a.nombreProducto > b.nombreProducto)
//                     {
//                         return 1
//                     }
//                 else return 0
//             })
//             console.log(productosAZ)
//         }
//         else if(formaOrganizar === "Z")
//         {
//             const productosZA = [...productos].sort((a,b) => 
//             {
//                 if (a.nombreProducto < b.nombreProducto)
//                     {
//                         return 1
//                     }
//                 else if (a.nombreProducto > b.nombreProducto)
//                     {
//                         return -1
//                     }
//                 else return 0
//             })

// console.log(productosZA)
//         }
//         else {
//             console.log("Elija por favor una opción entre A o Z")
//         }
//     }
// }



// 03. Buscar ofertas
// Mediante un prompt, se le pregunta al usuario si quiere revisar los productos con ofertas disponibles.


// function buscarOfertas ( array )
// {
//     let revisarOfertas = prompt ("Desea revisar los productos en oferta? S/N")
//     {
//         if (revisarOfertas === "S")
//         {
//             const productosOferta = [...productos].filter((elemento) => 
//             {
//              return elemento.oferta === true
//             })
//             console.log(productosOferta)
//         }
//     }
// }

// buscarOfertas(productos)

// // 04. Buscar producto
// Mediante un prompt, se le pregunta al usuario por el nombre del producto que desea encontrar. De estar incluido en el listado, se le informa al respecto

// function buscarProducto ( array )
// {
//     let productoBuscado = prompt("Favor ingrese el producto que desea buscar")
//     for (i = 0; i < productos.length; i++)
//     {
//         if ( productos[i].nombreProducto === productoBuscado)
//             {
//                 console.log("Sí manejamos el producto")
//                 break;

//             }
//         else
//             {
//                 console.log("No hay")
//             }
//     }
// }

// buscarProducto(productos)