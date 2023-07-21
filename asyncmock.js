const productos = [
    { nombre: "Kingdom Burguer", precio: 20000, id: "1", stock:10, idCat: "comidas", img: "../img/KingdomBurguer.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Kingdom Duo Burguer", precio: 20000, id: "2", stock:10, idCat: "comidas", img: "../img/KingdomDuoBurguer.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "4 Burguers Méxicanas", precio: 20000, id: "3", stock:10, idCat: "comidas", img: "../img/4BurguerMexicanas.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Todo terreno con tocineta", precio: 20000, id: "4", stock:10, idCat: "comidas", img: "../img/TodoterrenoTocineta.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Carne desmechada", precio: 20000, id: "5", stock:10, idCat: "comidas", img: "../img/CarneDesmechada.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

    { nombre: "Cerveza", precio: 20000, id: "6", stock:10, idCat: "bebidas_alcohol", img: "../img/Cerveza.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Cerveza para compartir", precio: 20000, id: "7", stock:10, idCat: "bebidas_alcohol", img: "../img/CervezasCompartir.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "3 cervezas", precio: 20000, id: "8", stock:10, idCat: "bebidas_alcohol", img: "../img/3Cervezas.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Vodka con naranja", precio: 20000, id: "9", stock:10, idCat: "bebidas_alcohol", img: "../img/VodkaNaranja.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Ron blanco con sandia", precio: 20000, id: "10", stock:10, idCat: "bebidas_alcohol", img: "../img/RonSandia.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Mojito de fresa", precio: 20000, id: "11", stock:10, idCat: "bebidas_alcohol", img: "../img/MojitoFresa.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Coctel para compartir", precio: 20000, id: "12", stock:10, idCat: "bebidas_alcohol", img: "../img/CoctelCompartir.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

    { nombre: "CocaCola", precio: 20000, id: "13", stock:10, idCat: "bebidas_sinalcohol", img: "../img/CocaCola.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Sprite", precio: 20000, id: "14", stock:10, idCat: "bebidas_sinalcohol", img: "../img/Sprite.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Mtn Dew", precio: 20000, id: "15", stock:10, idCat: "bebidas_sinalcohol", img: "../img/MtnDew.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Limonada natural", precio: 20000, id: "16", stock:10, idCat: "bebidas_sinalcohol", img: "../img/LimonadaNatural.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { nombre: "Limonada cerezada", precio: 20000, id: "17", stock:10, idCat: "bebidas_sinalcohol", img: "../img/LimonadaCerezada.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        })
    })
}

//Retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        })
    })
}

//Función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        })
    })
}

