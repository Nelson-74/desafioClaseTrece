let textoA ='comision-20025';
let textoB = 'Nelson-Andrada';

console.log('Mi clase es :  ' + textoA + '  y mi nombre es:   ' + textoB);

// DOM
// selectores
const titulo = document.getElementById('titulo')
//const titulo = document.getElementsByClassName('titulo')[0]
 console.log(titulo)

//titulo.innerText = "Desafio de clase nueve"
titulo.innerHTML = "<strong>Desafio de la clase doce</strong>"

//titulo.className = "font-big"
titulo.classList.add('font-big', 'font-small')
titulo.classList.remove('font-small')

const contenedorProductos = document.getElementById('contenedor_productos')

// const producto1 = {id: 1,
//      nombre: "Frutillas",
//      desc: "Una fruta", 
//      precio: 400,
//       img:'../img/frutillas.png'
// }

stockProductos.forEach((producto) => {
const article = document.createElement('article')
article.classList.add('shadow','card', 'col-3', 'm-2')
article.id = `${producto.id}`
article.innerHTML =`
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.desc}</p>
        <p class="card-text font-small"> Precio : $ ${producto.precio}</p>
        <a href="#" class="btn btn-info $teal-400">Cargar al carrito</a>
        </div>
    `
    contenedorProductos.appendChild(article)

})
// Json 
const productos = [
    {id: 1, nombre: "Frutillas", desc: "Frutillas de Tucuman", precio: 400, img:'./img/frutillas.png'},
    {id: 2, nombre: "Arandanos", desc: "Arandanos de Salta", precio: 600, img:'./img/arandanos.png'},
    {id: 3, nombre: "Frambuesas", desc: "Frambuesas de Rio Negro", precio: 700, img:'./img/frambuesas.png'},
    {id: 4, nombre: "Mango", desc: " Mangos de Formosa", precio: 200, img:'./img/mango.png'},
    {id: 5, nombre: "Bananas", desc: "Bananas Ecuatorianas", precio: 280, img:'./img/bananas.png'},
    {id: 6, nombre: "Durazno", desc: "Duraznos de Mendoza", precio: 300, img:'./img/durazno.png'},
    {id: 7, nombre: "Manzana", desc: "Manzanas de Rio Negro", precio: 220, img:'./img/manzana.png'},
    {id: 8, nombre: "Naranjas", desc: "Naranjas de Entre Rios", precio: 250, img:'./img/naranjas.png'},
    {id: 9, nombre: "Brocoli", desc: "Brocolis de Santa Fe", precio: 420, img:'./img/brocoli.png'},
    {id: 10, nombre: "Choclo", desc: "Choclos de Buenos Aires", precio: 360, img:'./img/choclo.png'},
    {id: 11, nombre: "Lechuga", desc: "Lechugas de Cordoba", precio: 490, img:'./img/lechuga.png'},
    {id: 12, nombre: "Garbanzos", desc: "Garbanzos de Santiago del Estero", precio: 500, img:'./img/garbanzos.png'},
    {id: 13, nombre: "Sesamo", desc: "Semillas de sesamo de Córdoba", precio: 280, img:'./img/sesamo.png'},
]
// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }

// guardarLocal("listaProductos", JSON.stringify(productos));
// console.log("Item 1: " + localStorage.getItem("1"));
// console.log("Item 3: " + localStorage.getItem("3"));
// console.log("Item 2: " + localStorage.getItem("2"));
// console.log("Lista Productos: " + localStorage.getItem("listaProductos"));

// let prods = JSON.parse(localStorage.getItem("listaProductos"));
// console.log(prods);
// console.log("Producto: " + prods[2].producto + " - Precio: $" + prods[2].precio);


// Almacenar Array en objetos
// const guardaLocal = (clave,valor) => { localStorage.setItem(clave, valor)
// };
// for (const producto of productos) {
//     guardaLocal (producto.id, JSON.stringify(producto));
//     console.log (guardaLocal);
// }
// guardaLocal('listaProductos', JSON.stringify(productos));

/*$(document) .ready(function() {
    $('.btnComprar').click(function (e){
    let hijos = $ (e.target).parent().children();
    console.log (hijos[0].value);
});
})*/

 // Cambio de titulo con Jquery
 $(document).ready(function (){
     $('#titulo').html('Desafio clase trece')
 });
// Animación con Jquery
 var resultado = $('article')
 $(document).ready(function (){
     $('.btn-info').click(function(){
     resultado.animate({
         left :'250px',
         opacity:'0.5',
         height: '+=150px',
         width:'+=150px'
     },3000, function(){
         resultado.animate({
         left :'-50px',
         opacity:'1.5',
         height: '-=10px',
         width:'-=10px'
     }, 2000)
     });
     })
 });
// Animacion JQuery ocultar
/*$(document).ready(function(){
     $('.btn-info').click(function(){
         $('*').hide();
    });
 });*/

$("p").css("background-color", "pink");
$("p").css("width", "8rem");

$(".titulo").css({  "color": "#B667F1", 
                    "font-size": "40px", 
                    "borderLeft": "5px solid #ccc",
                    "padding": "50px" });
$("#estilo1").css({"font-weight":"bold"});
$(document).ready(function(){
    $('body').prepend('<h4 style="display:none"> ¡Bienvenido  de nuevo a nuestro mejor cliente!');
    $('h4').show(3000);
})
 $(document).ready(function(){
    $('body').prepend('<h4 style="display:none"> ¡Bienvenido  de nuevo a nuestro mejor cliente!');
     $('h4').hide(4000);
 })







//  console.log(contenedorProductos)
