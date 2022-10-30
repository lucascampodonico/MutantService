'use strict'
require ('dotenv').config({path: './.env'});
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const mongoose = require('mongoose');
const mutantController = (require('../controllers/mutantController'));

//TEST AUTOMATICOS

beforeAll(()=>{
     mongoose.connect(process.env.MONGODB_URI)
})
afterAll(()=>{
    mongoose.disconnect(process.env.MONGODB_URI)
})

describe('Test de mutantes', ()=>{
    test('si existe la ruta /mutation y no se envia un json correcto', async ()=>{
        await api.post('/mutation').send().expect(400)
    })

    test('si es mutante retorna true', async ()=>{
        const nuevoDna = {
            "dna": ["ATGTGA","CAGTGC","TGGTGT","AGATCG","CATCTA","TCACAG"]
        }
        const response = await api.post('/mutation').send(nuevoDna);
        expect(response.body).toBe(true)
    })

    test('si NO es mutante retorna false', async ()=>{
        const nuevoDna = {
            "dna": ["ATGTGA","CAGTGC","TGGCGT","AGATCG","CATCTA","TCACAG"]
        }
        const response = await api.post('/mutation').send(nuevoDna);
        expect(response.body).toBe(false)
    })
});
describe('Test de estadisticas', ()=>{
    test('si existe la ruta /stats devuelve 200', async ()=>{
        await api.get('/stats').expect(200)
    })
    
    test('si existe la ruta devuelve un json', async ()=>{
        const jsonEsperado = {
            count_mutations: expect.any(Number),
            count_no_mutations: expect.any(Number),
            ratio: expect.any(Number)
        }
        const response = await api.get('/stats').expect(200);
        expect(response.body).toEqual(expect.objectContaining(jsonEsperado))
    })
})


// test('', async ()=>{
//     app.
// })