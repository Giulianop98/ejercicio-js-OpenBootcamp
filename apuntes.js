//teoria/apuntes
//sets
//a diferencia de un  array solo utiliza elementos unicos

//ejemplo

const  array = [1,2,3,4,5,6,1,2]

const miSet= new Set (array)

console.log(array)
//si yo agrego un elemento repetido igual se imprime 
console.log(miSet)
//pero si agrego un elemento repetido aca no se ejecuta

//metodos
//metodo .add()
//para agregar elementos a un set se usa esto
//ejemplo
miSet.add(9)
console.log(miSet)
miSet.add(10)
console.log(miSet)
//no agrega elementos repetidos

//metodo .delete()
//elimina un elemento en concreto
//ejemplo
miSet.delete(3)
console.log(miSet)

//.clear()
//elimina todos los metodos del set
//ejemplo
//miSet.clear()
//console.log(miSet)

//.has()
//sirve para confirmar si hay cierto elemento
//ejemplo
console.log(miSet.has(1))
//si esta ejecuta un true y si no un false

//propiedad .size
//sirve para saber el tamaño del set
console.log(miSet.size)

//iterar set
//se usa el .forEach
miSet.forEach(valor => {
    console.log(valor)
})

//transformarlo en ojbjeto iterador
const it_miSet = miSet.values()
console.log(it_miSet)

//transformarlo a array de objetos unicos
const ar_miSet = [...miSet]
console.log(ar_miSet)

//////////////////////////////////////////////

//objetos
//ejemplo
const obj = {
    id: 4,
    nombre:'Giuliano',
    apellidos: 'Pimenta',
    isDeveloper: false,
    Juegos_favoritos: ['Pes 6','RDR2'],
    "2-juegos": [1,2]
    //con las comillas se puede agregar un valor
}

//formas de acceder a valores del objeto
console.log(obj.Juegos_favoritos)
//la mas usada es esta con el punto
console.log(obj["2-juegos"])

//acceder a prpiedades a traves de variables
const prop = 'isDeveloper'
console.log(obj[prop])

//duplicar objeto y poder modiciar el duplicado sin afectar al original

const obj2 = {...obj}

console.log(obj.nombre)
console.log(obj2.nombre)

obj2.nombre = 'Martin'

console.log(obj2.nombre)
console.log(obj.nombre)

//solo se modifica obj2

//ordenar listas en funcion de una propiedad

const listaPeliculas = [
    {titulo : 'The Batman', anyo: 2022},
    {titulo:'shrek', anyo: 2001},
    {titulo: 'Scarface', anyo:1984}
]

console.log(listaPeliculas)

//ordenarlas de mas antigua a mas nueva
//.sort() esto muta el valor de la lista original

listaPeliculas.sort((a, b )=> a.anyo - b.anyo)
console.log(listaPeliculas)

//////////////////////////////////////
//fechas
//se usa el .new Date

const fecha = new Date()

console.log(fecha)

//por año, mes, dia, hora, minutos, segundos y milisegundos especificos 
//los meses arrancan de 0, mayo seria mes 4
const fecha2= new Date(1998, 4, 1, 8, 30, 20, 160)
console.log(fecha2)

//las fechas se manejan con milisegundos

const fecha3= new Date(1000000000)
console.log(fecha3)

//definir fecha con strings
const fecha4= new Date ('may 1, 1998 8:45:20')

console.log(fecha4)

//comparar fechas 
//cuando son distintas 
console.log(fecha>fecha2)
//> posterior < anterior

//si son iguales hay que pasar a milisegundos
const fecha5 = new Date(1998, 4, 1, 8, 30, 20, 160)

console.log(fecha5)
 //con .getTime() pasas las fechas a milisegundos
  console.log(fecha2 .getTime()===fecha5 .getTime())

  //obtener dia, mes y año
  //dia
  console.log(fecha2 .getDate())
  //mes
  console.log(fecha2 .getMonth())
  //recordatorio: en js los meses arrancan desde 0 mayo es el mes 4
  //año
  console.log(fecha2 .getFullYear())

  //mostrar fecha en string usando .toLocalDateString()
  console.log(fecha2.toLocaleDateString('en-US'))



  ///////////////////////////////////////////////////////

//funciones
//entre los parentesis van losm parametros
//entre las llaves la accion
//ejemplo

saludar('Giuliano')
//el parametro puede ser cualquier objeto
//si no pones nada sale undefined
function saludar (nombre){
    console.log(`Hola ${nombre}`)
}
//////////////////////////////////
let nombre2= 'martin'
console.log(nombre2)
despedir (nombre2)

function despedir(nombre){
    nombre = 'Pepe'
    console.log(`chau ${nombre}`)
}
//si modificas el parametro dentro de la funcion no afecta a la variable

/////////////////////////////////////////
//en los objetos si se modifica 
//ejemplo
let persona = {nombre:'Giuliano', apellido:'Pimenta'}
saludarPersona(persona)
console.log(persona)
function saludarPersona(objeto){
    objeto.nombre='Martin'
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}
//si modificamos dentro de la fucnion se mdofica todo

//parametros opcionales

function Numero (Numero=8){
    console.log(Numero)
}
Numero()
 //si le pones algun valor si se modifica 
//si al nombrar la funcion no le pasas ningun valor siemre te va a imprimer el numero 8

//Listas en una funcion
function imprimir (...parametros){
    console.log(parametros)
}
imprimir(1,2,3,4,'hola',{id:8})

//sumar valores
//se usa el reduce
function suma (...nums){
    return nums.reduce((a, b)=>a+b)
}
//con el return podemos mostrar el valor en pantalla

const s= suma(1,2,3,4,5)

console.log(s)

///////////////////////////////////

//funciones tipo flecha
const lista = [2,4,6,8,10]
//la idea seria multipicar sus valores
const lista2= lista.map((valor)=>valor * 2)
//funcion flecha anonima
console.log(lista2)
//funcion flecha declarada
const doble = valor=>valor*2

const lista3= lista.map(doble)

console.log(lista3)

//carga y sobrecarga de funciones
function saludo(){
    hola()
}

function hola(){
    console.log('hola')
}

saludo()

//La funcion saludo busca a la funcion hola y luego la ejecuta al declararla

//la sobrecarga es cuando llamas a una fucnion dentro de la otra con el mismo nombre

//funciones asincronas 
//hace llamadas a datos externos

function asinc(){

}

//se usan las promess

const promess =new Promise ((resolve, reject)=>{
   const i = Math.floor(Math.random()*2)
    if(i!==0){
        resolve()
    }
    else{
        reject()
    }
})

promess
.then(()=>console.log('salio bien'))
.catch(()=>cosole.log('error'))

.finally(()=>console.log('se ejecuta siempre'))



////////////
//funciones generadoras
function* generaId(){
    let id= 0;
    while(true){
        id++
        if(id===10){
            return id
        }
        yield id
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//////////////
//errores
//utilizar throw
const miFuncion = val => {
    if (typeof val === 'number'){
        return 2 * val
    }
    throw new Error ('el valor debe ser numerico')
}

//const doble= miFuncion('ala')
//esto es un error
// si falla se usa el try y catch

try{
    //el codigo puede fallar 
    console.log('se esta ejecutando bien')
    const doble = miFuncion(num)
    console.log(doble)
}catch(e){
    //en caso de que falle
    console.log('error')
}
finally{
    console.log('se ejectua haya error o no')
}
//dara error si no se da un numero
//gestion de registros en node js





