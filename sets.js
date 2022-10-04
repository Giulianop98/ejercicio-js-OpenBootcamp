const lista = ['hola', 'chau', 'bueno', 'hola']

const listaSet= new Set (lista)

listaSet.add('javascript')

//objetos

const obj={
    nombre:'Giuliano',
    apellido:'Pimenta',
    edad:24,
    isDeveloper: false,
}

const prop= 'nombre'

console.log(obj[prop])

//fechas
console.log(new Date())
console.log(new Date(1998,4,1,6,30))
const fecha = new Date()
const fecha2= new Date(1998, 4, 1, 8, 30, 20, 160)
const fechas= fecha>fecha2
const dia= fecha2.getDay()
const mes= fecha2.getMonth()
const año= fecha2.getFullYear()



