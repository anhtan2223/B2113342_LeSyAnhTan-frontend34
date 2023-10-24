<template>
    <div class="input-group">
           <input type="text"
           class = "form-control"
           placeholder = "Ô Tìm Kiếm"
           @input = "$emit('update:modelValue',$event.target.value)"
           @keyup.enter = "$emit('submit')">
           <div class="input-group-append">
                  <button class="btn btn-outline-secondary"
                  @click = "$emit('submit')">
                         <i class="fas fa-search"></i>
                  </button>
           </div>
    </div>
</template>
    
<script setup lang='ts'>
    defineProps(['modelValue'])
    defineEmits(['submit','update:modelValue'])
</script>
    
<style>
    
</style>