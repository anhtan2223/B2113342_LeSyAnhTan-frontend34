
<template>
    <div class="card">
        <div class="card-header text-center">
            <h3 >
                <slot></slot>
            </h3>
        </div>
        <div class="card-body">
            <Form :validation-schema="schema" @submit="$emit('submit',$props.contact)">
              <div class="form-group text-center row mb-3">
                  <label for="name" class="col-2 text-start">Tên</label>
                  <Field name="name" type="text" 
                  v-model="$props.contact.name"
                  class="from-control col-5"
                  />
                  <ErrorMessage name="name" class="error-feedback col-auto" />
              </div>
              <div class="form-group text-center row mb-3">
                  <label for="email" class='col-2 text-start'>Email</label>
                  <Field name="email" type="email"
                  v-model="$props.contact.email"
                  class="from-control col-5"
                  />
                  <ErrorMessage name="email" class="error-feedback col-auto" />
              </div>
              <div class="form-group text-center row mb-3">
                  <label for="phone" class='col-2 text-start'>Số Điện Thoại </label>
                  <Field name="phone" type='tel'
                  v-model="$props.contact.phone"
                  class="from-control col-5"
                  />
                  <ErrorMessage name="phone" class="error-feedback col-auto" />
              </div>
          
              <div class="form-group row mb-3">
                  <label for="address" class='text-start col-2'>Địa Chỉ</label>
                  <Field name="address"
                  v-model="$props.contact.address"
                  class="from-control col-5"
                  />
                  <ErrorMessage name="address" class="error-feedback col-auto"  />
              </div>
          
              <div class="form-group row mb-3">
                <label for="favorite" class='text-start col-auto'>
                    <strong>
                        Liên Hệ Yêu Thích
                    </strong>
                </label>
                  <input name="favorite"
                  class="from-control col-5"
                  type='checkbox'
                  v-model="$props.contact.favorite"
                  />
              </div>
              <div class="form-group d-flex justify-content-around">
                  <button class="btn btn-outline-primary">Lưu</button>

                  <button
                  v-show="$props.contact.name !== undefined"
                  type="button"
                  class="ml-2 btn btn-outline-danger"
                  @click="deleteContact"
                  >
                  Xóa
                </button>
                <router-link to="/">
                    <button class="btn btn-outline-warning">Quay Về</button>
                </router-link>
              </div>
            </Form>
        </div>
    </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import {useRouter } from 'vue-router'
import clientService from '../services/client.service';

const props = defineProps(['contact'])
defineEmits(['submit'])
const router = useRouter()

const schema = yup.object({
    name: yup.string().required("Vui Lòng Nhập Tên"),
    email: yup.string().email("Email Không Đúng").required("Vui Lòng Nhập Email"),
    address : yup.string().required("Vui Lòng Nhập Địa Chỉ").min(5,"Phải Lớn Hơn 5 Ký Tự") ,
    phone : yup.string().required("Vui Lòng Nhập Số Điện Thoại")
        .min(10,"Số Điện Thoại Phải Lớn Hơn 10 Số")
        .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g,"Số điện thoại không hợp lệ.")
});
async function deleteContact()
{
    const msg = await clientService.deleteByID(props.contact._id)
    console.log(msg)
    alert(msg.message)
    router.push('/')
}
</script>

<style scoped>
.error-feedback {
    color: red;
}
</style>
