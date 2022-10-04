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