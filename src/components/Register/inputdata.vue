<template>
  <div class="h-screen flex justify-center items-center mx-auto my-auto">
    <Form
      v-slot="$form"
      :resolver="resolver"
      :initialValues="initialValues"
      @submit="onSubmit"
    >
      <div class="p-4">
        <FloatLabel variant="on">
          <label for="name" class="">Name</label>
          <InputText
            type="text"
            id="name"
            name="name"
            v-model="initialValues.name"
          />
        </FloatLabel>
        <Message
          v-if="$form.name?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.name.error?.message }}</Message
        >
        <Message size="small" severity="secondary" variant="simple" v-else=""
          >Enter your username.</Message
        >
      </div>

      <div class="p-4">
        <FloatLabel variant="on">
          <label for="username" class="">Username</label>
          <InputText
            type="text"
            id="username"
            name="username"
            v-model="initialValues.username"
          />
        </FloatLabel>
        <Message
          v-if="$form.username?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.username.error?.message }}</Message
        >
        <Message size="small" severity="secondary" variant="simple" v-else=""
          >Enter your username.</Message
        >
      </div>

      <div class="p-4">
        <FloatLabel variant="on">
          <InputText
            type="email"
            id="Email"
            name="email"
            v-model="initialValues.email"
          />
          <label for="Email">Email</label>
        </FloatLabel>
        <Message
          v-if="$form.email?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.email.error?.message }}</Message
        >
        <Message size="small" severity="secondary" variant="simple" v-else=""
          >Enter your Email.</Message
        >
      </div>

      <div class="p-4">
        <FloatLabel variant="on">
          <InputText
            type="password"
            id="Password"
            name="password"
            v-model="initialValues.password"
          />
          <label for="Passsword">Password</label>
        </FloatLabel>
        <Message
          v-if="$form.password?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.password.error?.message }}</Message
        >
        <Message size="small" severity="secondary" variant="simple" v-else
          >Enter your Password.</Message
        >
      </div>

      <div class="p-4">
        <FloatLabel variant="on">
          <InputText
            type="password"
            id="Password Confirm"
            name="password_confirm"
            v-model="initialValues.password_confirm"
          ></InputText>
          <label for="password_confirm">Password Confirm</label>
        </FloatLabel>
        <Message
          v-if="$form.password_confirm?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.password_confirm.error?.message }}</Message
        >
        <Message size="small" severity="secondary" variant="simple" v-else
          >Enter your password confirm.</Message
        >
      </div>

      <div class="p-4">
        <FloatLabel variant="on">
          <InputText
            id="feel_now"
            name="feel_now"
            v-model="initialValues.feel_now"
          />
          <label for="feel_now">How do you feel now?</label>
        </FloatLabel>
        <Message
          v-if="$form.feel_now?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.feel_now.error?.message }}</Message
        >
        <Message size="small" severity="secondary" variant="simple" v-else
          >Enter your feel now :)</Message
        >
      </div>

      <div class="items-center flex justify-center">
        <Button label="Submit" type="submit" />
      </div>
      <div class="flex items-center justify-center">
        <RouterLink to="/login">
          <Button
          link 
            label="Go login >_<' สวัสดีคราฟผลชื่อดีแม็คไม่มีปัญหา CCCCCCC จริงรึ จริงรึ จริงรึ โม้รึป่าว 55555"
            severity="warn"
            variant="text"
            size="small"
          />
        </RouterLink>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Message from "primevue/message";
import { Form } from "@primevue/forms";
import { ref } from "vue";
import { zodResolver } from "@primevue/forms/resolvers/zod";

import { useToast } from "primevue";
import { z } from "zod";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  feel_now: string;
}

const toast = useToast();

// ค่าเริ่มต้น
const initialValues = ref<FormData>({
  name: "",
  username: "",
  email: "",
  password: "",
  password_confirm: "",
  feel_now: "",
});

// Schema
const resolver = ref(
  zodResolver(
    z
      .object({
        name: z.string().min(1, { message: "Name is Null" }),
        username: z.string().min(1, { message: "Username is Null." }),
        email: z
          .string()
          .min(1, { message: "Email is Null." })
          .email({ message: "Invald email address." }),
        password: z.string().min(1, { message: "Password is Null." }),
        password_confirm: z.string().min(1, {
          message: "Password confirm is Null.",
        }),
        feel_now: z.string().min(1, { message: "Feel Now is Null." }),
      })
      .refine((data) => data.password === data.password_confirm, {
        message: "Passwords do not match.",
        path: ["password_confirm"],
      })
  )
);

// ฟังก์ชัน Submit
const onSubmit = async ({ valid }: { valid: boolean }) => {
  if (!valid) return;
  try {
    const { password_confirm, ...FormData } = initialValues.value;
    const response = await fetch("http://localhost:9999/api-demax/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    });
    if (!response.ok) {
      const errordata = await response.json();
      throw new Error(errordata.message || "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");
    }

    toast.add({
      severity: "success",
      summary: "ลงทะเบียนสำเร็จ",
      life: 3000,
    });
  } catch (error: any) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: error.message,
      life: 4000,
    });
  }
};
</script>

<style scoped></style>
