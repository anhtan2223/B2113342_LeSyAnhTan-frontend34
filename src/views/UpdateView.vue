
    
<script setup lang='ts'>
    import FormVue from '../components/Form.vue'
    import {ref} from 'vue'
    import {useRouter} from 'vue-router'
    import clientService from '../services/client.service'

    const props = defineProps(['id'])
    var contact = ref('Start State')
    const router = useRouter()

    async function getByID(id)
    {
        contact.value = (await clientService.getByID(id))[0]
    }
    async function updateData(id,data) 
    {
        const msg = await clientService.updateByID(id,data)
        alert("Cập Nhật Thành Công")
        router.push('/')
    }
    
    getByID(props.id)  
</script>

<template>
    <FormVue 
    :contact="contact"
    @submit="e => updateData(props.id,e)">
        Chỉnh Sửa Thông Tin
    </FormVue>
</template>
    
<style>
    
</style>