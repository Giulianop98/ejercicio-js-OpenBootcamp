/*const nombre = 'Giuliano'

const edad = 24

const soyDesarrolador = false

const nacimiento = new Date (1998, 04, 01)

const peliculaFavorita = {
    nombre :'Batman inicia',
    director: 'Christopher Nolan',
    estreno: [10,06,2005],
    duracion: '140 minutos'
}

console.log(nombre)
console.log(edad)
console.log(soyDesarrolador)
console.log(nacimiento)
console.log(peliculaFavorita)*/



const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.info('hola')
logger.error('esto es un error')
logger.debug('holaaa')