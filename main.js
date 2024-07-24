
let carrito = []
let totalProductos = 0
let bandera = true
let cantidad = 1
const condimentos = ["oregano", "pimenton", "provenzal"]
const escabeches = ["vizcacha", "pollo" , "conejo", "ciervo", "jabali"]
let stringApartirDeunArray = escabeches.join ("\n")

function sumarAtotal (precio,nombre, cantidad = 1) {
    totalProductos += precio * cantidad
    carrito.push(nombre + "x" + cantidad)
}

function paraCarrito (producto){
    let cantidad = 1
    switch(producto){
        case "vizcacha":
            cantidad = prompt("¿Cuantos Escabeches de Vizcacha te gustaria llevar?")
            confirm("¿Te gustaria agregar Escabeche de Vizcacha a Tu carrito?")
            sumarAtotal (5500, producto, cantidad)
            break
        case "pollo":
            cantidad = prompt("¿Cuantos Escabeches de Pollo te gustaria llevar?")
            confirm("¿Te gustaria agregar Escabeche de Pollo a Tu carrito?")
            sumarAtotal (5000, producto, cantidad)
            break  
        case "conejo":
            cantidad = prompt("¿Cuantos Escabeches de Conejo te gustaria llevar?")
            confirm("¿Te gustaria agregar Escabeche de Conejo a Tu carrito?")
            sumarAtotal (5000, producto, cantidad)
            break  
        case "ciervo":
            cantidad = prompt("¿Cuantos Escabeches de Ciervo te gustaria llevar?")
            confirm("¿Te gustaria agregar Escabeche de Ciervo a Tu carrito?")
            sumarAtotal (5500, producto, cantidad)
            break    
        case "jabali":
            cantidad = prompt("¿Cuantos Escabeches de Jabali te gustaria llevar?")
            confirm("¿Te gustaria agregar Jabali a Tu carrito?")
            sumarAtotal (5000, producto, cantidad)
            break 
         case "oregano":
            cantidad = prompt("¿Cuantos Oregano x 25grs te gustaria llevar?")
            confirm("¿Te gustaria agregar Oregano x 25grs a Tu carrito?")
            sumarAtotal (1500, producto, cantidad)
            break 
        case "pimenton":
            cantidad = prompt("¿Cuantos Pimenton x 25grs te gustaria llevar?")
            confirm("¿Te gustaria agregar Pimenton x 25grs a Tu carrito?")
            sumarAtotal (1500, producto, cantidad)
            break 
        case "provenzal":
            cantidad = prompt("¿Cuantos Provenzal x 25grs te gustaria llevar?")
            confirm("¿Te gustaria agregar Provenzal x 25grs a Tu carrito?")
            sumarAtotal (1500, producto, cantidad)
            break 
        default:
            alert("no tenemos ese producto, pero voy a tratar de conseguirlo para vos!")
            break 
    }
}

while(bandera){
    let respuesta = prompt("¿Que escabeche te gustaria comprar? \n" + stringApartirDeunArray)
    paraCarrito(respuesta)
    console.log(respuesta)
    bandera = confirm("¿Te gustaria comprar algo mas?")
}

alert(totalProductos)
alert(carrito.join("\n "))
bandera = true 

while(bandera){
    const ventaCondimentos = prompt("¿Algun condimento para preparar la cena de esta noche? \n" + condimentos.join ("\n "))
    paraCarrito(ventaCondimentos)
    console.log(ventaCondimentos)
    bandera = confirm("¿Te gustaria comprar algo mas?")
}

alert(totalProductos)
alert(carrito.join("\n "))
bandera = true
