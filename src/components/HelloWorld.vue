<template>
        <div class="hello">
            <h2>Hello World</h2>
            <h3>{{ props }}</h3>
            <div v-for="i in test" :key="i.id">
                <div class="row">
                    <div class="col-auto">Name : <strong>{{ i.name }}</strong></div>
                    <span class="col-2">Phone : <strong>{{ i.phone }}</strong></span>
                    <span class="col-auto">ID : <strong>{{ i._id }}</strong></span>
                </div>
            </div>
            {{ test }}
        </div>
</template>
    
<script setup lang='ts'>
// import axios from 'axios'
import Client from '../services/client.service'
import {ref} from 'vue'
var test = ref({})
const data = {
    // "_id" : 100 ,
    "name" : "ChuCa",
    "email" : "anhtan@gmail.com",
    "address" : "Home" ,
    "phone" : Math.floor(Math.random() * 100) ,
    "favorite" : true
}
const dataUpdate = {
    name : 'ChuBi' ,
    phone : 100 ,
    "favorite" : false
}
const id = '652f81eaf4b7b8dda177e66f' 
async function runService()
{
    // test.value = await Client.deleteAll()
    // test.value = await Client.create(data)
    // test.value = await Client.getByID(id)
    // test.value = await Client.updateByID(id,dataUpdate)
    // test.value = await Client.deleteByID(id)
    // test.value = await Client.getFavorite()
    test.value = await Client.getAll()
    console.log(test.value)
}
runService()
const props = defineProps(['Var'])
</script>
    
<style>
    
</style>