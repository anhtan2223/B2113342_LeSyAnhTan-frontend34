<template>
    <div class="page row">
        <div class="col-md-10">
            <Search
            v-model="searchValue"
            @submit="submitSearch"
            ></Search>
        </div>
        <div class="col-md-6 mt-3" > <!-- Margintop 3 ; col = 6  -->
            <h4 class="text-start">
                Danh Bạ
                <i class="fas fa-address-book"></i>
            </h4>

            <List
            v-if="isHaveContact"
            :contact-list="contactList"
            :selected-index="selectedIndex"
            @update:selected-index="(index,value)=>{selectedIndex=index , selectedContact=value }"
            ></List>
            
            <h5 v-else>Chưa Có Thông Tin Liên Hệ Nào</h5>
            <div class="mt-3 d-flex justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary"
                @click="getContactList">
                        <i class="fas fa-redo"></i>
                        Làm Mới
                </button>
                <router-link to="add">
                    <button class="btn btn-sm btn-success">
                        <i class="fas fa-plus"></i>
                        Thêm Mới
                    </button>
                </router-link>
                <button class="btn btn-sm btn-danger" 
                v-if="isHaveContact"
                @click="deleteALL">
                    <i class="fas fa-trash"></i>
                    Xoá Tất Cả
                </button>
            </div>
        </div>

        <div class="col-md-4 mt-3">
            <h4>Chi Tiết Liên Hệ
                <i class="fas fa-address-card"></i>
            </h4>
            <Card 
            :selected-contact="selectedContact"
            ></Card>

            <div class="mt-3 d-flex justify-content-left align-items-center" v-if="selectedContact.name">
                <router-link :to="'update/'+selectedContact['_id']">
                    <button class="btn btn-sm btn-warning">
                        <i class="fas fa-pen-to-square"></i>
                        Hiệu Chỉnh 
                    </button>
                </router-link>
            </div>
        </div>
    </div>
    
</template>
    
<script setup lang="ts">
    import Search from "../components/InputSearch.vue"
    import List from "../components/ContactList.vue"
    import Card from "../components/ContactCard.vue"
    import clientService from "../services/client.service"
    import {ref,computed,watch} from "vue"
    import boDau from '../services/utils'
    const searchValue = ref("")
    const selectedIndex = ref(-1)
    const selectedContact = ref({})
    const contactList = ref([])
    
    // contactList.value = []
    async function getContactList() {
        contactList.value = await clientService.getAll()
    }
    
    async function deleteALL() {
        const msg = await clientService.deleteAll()
        alert(msg.message)
        getContactList()
    }
    
    getContactList()
    const isHaveContact = computed(()=> contactList.value.length !== 0)
    async function submitSearch()
    {
        console.log(searchValue.value)
        await getContactList()
        if(searchValue.length !== 0)
            contactList.value = contactList.value.filter((value)=> 
            boDau(value.name.toLowerCase())
            .includes(boDau(searchValue.value.toLowerCase())))
    }
    watch(searchValue , submitSearch)
</script>
    
<style>
.page {
text-align: left;
max-width: 750px;
}
</style>