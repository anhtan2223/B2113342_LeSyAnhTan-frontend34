<template>
    <div class="card text-start" >
           <div class="p-1">
                  <strong>Tên</strong>
                  {{ selectedContact.name }}
           </div>
           <div class="p-1">
                  <strong>Email</strong>
                  {{ selectedContact.email }}
           </div>
           <div class="p-1">
                  <strong>Điện Thoại</strong>
                  {{ selectedContact.phone }}
           </div>
           <div class="p-1">
                  <strong>Địa Chỉ</strong>
                  {{ selectedContact.address }}
           </div>
           <div class="p-1">
                  <strong>Liên hệ yêu thích </strong>
                  <i v-if="selectedContact.favorite" class="fas fa-check"></i>
                  <i v-else class="fas fa-times"></i>
           </div>
    </div>
</template>
    
<script setup lang='ts'>
defineProps(['selectedContact'])
/**
    Mục tiêu : Hiển Thị Thông Tin của khách Hàng
    
    Kịch Bản : 
           Nhận vào contactList -> một user
           Hiển Thị Thông Tin của user bao gồm :
                  Tên : name
                  Email : email
                  Điện Thoại : phone
                  Địa Chỉ : address
                  Liên Hệ Yêu Thích : Checkbox
*/
</script>
    
<style>
    
</style>