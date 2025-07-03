<template>
    
    <div class="h-screen flex justify-center items-center mx-auto my-auto">
        <Form 
        v-slot="$form"
        :resolver="Message_login"
            :initialValues="loginForm"
            @submit ="onSubmit">
            <div class="p-4">
                <FloatLabel variant="on">
                    <label for="username">Username</label>
                    <InputText id="username" name="username" v-model="loginForm.username" />
                </FloatLabel>
                <Message v-if="$form.username?.invalid" size="small" variant="simple" severity="error">{{$form.username.error?.message}}</Message>
                <Message v-else variant="simple" severity="secondary" size="small">Enter your username.</Message>
            </div>

            <div class="p-4">
                <FloatLabel>
                    <label for="password">Password</label>
                    <InputText id="password" name="password" v-model="loginForm.password" type="password"/>    
                </FloatLabel>
                <Message v-if="$form.password?.invalid" size="small" variant="simple" severity="error">{{$form.password.error?.message}}</Message>
                <Message v-else variant="simple" severity="secondary" size="small">Enter your password.</Message>
            </div>

            <div class="flex justify-center items-center ">
                <Button type="submit" label="Submit" />
            </div>
        </Form>
    </div>
</template>


<script setup lang="ts">
import { Form } from '@primevue/forms';
import { Button, FloatLabel, InputText, Message, useToast } from 'primevue';

import { zodResolver } from "@primevue/forms/resolvers/zod";
import { ref } from 'vue';
import {  z } from 'zod';





interface FormLogin {
    username: string;
    password: string;
}

const toast = useToast();
const loginForm = ref<FormLogin>({
    username: "",
    password: "",
})

const Message_login = ref(zodResolver(z.object({
    username: z.string().min(1 , {message: "Username is null."}),
    password: z.string().min(1 , {message: "Password is null."})
})))


const onSubmit = async ({valid} : {valid: boolean}) => {
    if (!valid) return
    try {
        const response = await fetch("http://localhost:9999/api-demax/login" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginForm.value)
        });
        if (!response.ok) {
            const errordata = await response.json();
            throw new Error(errordata.message || "เกิดข้อผิดพลาดเซิฟเวอร์")
            
        }
        toast.add({
            severity: "success",
            summary: "ล็อกอินสำเร็จ",
            life: 3000 ,
        })
        
    } catch (error : any) {
        console.log(error)
        toast.add({
            severity:"error",
            summary:`Error - ${error}`,
            life: 3000,
        })
    }
}

</script>
<style scoped>


    
</style>