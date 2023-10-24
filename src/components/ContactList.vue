<template>
<ul class="list-group">
    <li class="list-group-item text-start" 
    v-for="(value,index) in contactList"
    @click="$emit('update:selectedIndex',index,value)"
    :key="value._id"
    :class="{'active' : index === selectedIndex}">
    {{value.name}}
    </li>
</ul>
</template>

<script setup lang='ts'>
defineProps(['selectedIndex','contactList'])
defineEmits(['update:selectedIndex']) //UseFor v-model
/**
ContactList
Nhiệm Vụ :
    Liệt Kê Danh Sách Các Khách Hàng bằng UL
    ứng với một listItem khi click vào sẽ 
    trả lên cho Index đã click vào
    Index ứng với li nào đang được selected sẽ có
    class là 
    active -> So sánh index is equal SelectedIndex

    Kịch Bản sẽ như thế này :
    Khởi tạo : 
    Nhận Vào ContactList /
    Render ListContact với selectedIndex = -1 /
    Là không chọn ai và SelectedCus = null  /
    Khi Click vào một li sẽ trả về : 
           SelectedCus , SelectedIndex
    Sau đó đem SelectedCus đi sử dụng
    -> Connect 2 chieu SelectedIndex
    Còn SelectedIndex sẽ cập nhật lại để biết đang chọn ai

Liệt Kê tất cả các khách có trong danh sách được
truyền vào

-> Props : 
    contact -> Danh Sách các liên hệ
           -> Một item ứng với một user
    activeIndex -> Number : Cho biết ai đang selected

*/
</script>

<style>

</style>