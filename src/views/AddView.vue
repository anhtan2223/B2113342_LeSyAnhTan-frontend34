<template>
       <Form :contact='newContact' @submit="onSubmit">Thêm Mới Khách Hàng</Form> 
</template>
    
<script setup lang='ts'>
    import Form from '../components/Form.vue'
    import clientService from '../services/client.service'
    import {useRouter } from 'vue-router'
    import {ref , watch} from 'vue'

const router = useRouter()
const newContact = {
    name : undefined , 
    email : undefined , 
    address : undefined , 
    favorite : undefined , 
}
async function onSubmit(e)
    {
        const data = await clientService.create(e)
        alert(data.message)
        router.push('/')
    }
</script>
    
<style>
    
</style>