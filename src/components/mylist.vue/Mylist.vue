<template>
  <div
    class="w-[700px] flex flex-col justify-center items-center min-h-screen mx-auto"
  >
    <div class="flex flex-col items-center justify-center min-h-screen h-a">
      <h1 class="sticky top-0 text-2xl mb-4">{{ displaytext }}</h1>
      <InputText
        type="text"
        v-model="value"
        class="w-150"
        @keydown.enter="Add_do"
      />
      <br />
      <Transition>
        <h3 v-if="texth3" class="animate-fadeIn">
          There's no need to schedule it, since life is unpredictable.
        </h3>
      </Transition>
      <br />

      <div class="flex flex-col gap-5">
        <Card v-for="(item, index) in Listdo" :key="index" class="w-150">
          <template #title v-if="editIndexter === index"
            ><InputText v-model="EditText" @keydown.enter="saveEdit(index)"
          /></template>
          <template #title v-else>{{ item.text }}</template>

          <template #content>
            <div class="flex justify-end items-center gap-2.5">
              <p
                class="m-0 flex-1"
                :style="{ color: colorList[index % colorList.length] }"
              >
                {{ item.title }}
              </p>

              <Button label="Edit" @click="Editfion(index, item.text)" />
              <Button label="Delete" @click="deleteter(index)" />
            </div>
          </template>
        </Card>
        <div class=" flex items-center justify-center p-2" v-if="Listdo.length > 0">
          <Button label="Sent" severity="help" rounded  class="p-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from "primevue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { ref, onMounted } from "vue";
const textmain = "I can do it today.";
const displaytext = ref("");
const value = ref("");
const EditText = ref("");
const texth3 = ref(false);
const edit_input = ref(false);
const Listdo = ref<{ text: string; title: string }[]>([]);
const editIndexter = ref<number | null>(null);
const Listmian = ref<string[]>([
  "สู้ๆเว้ยยย!!!",
  "Just do it.",
  "No fear, just do!",
  "ทุบขีดจำกัดซะ!",
  "Go hard or go home!",
  "คว้ามันไว้ เดี๋ยวนี้!",
  "สู้สุดใจเลยย!",
  "ฝันต้องคว้าให้แน่น!",
  "ガンガン行くよ！💥",
  "สู้สุดตัว หรือกลับบ้านไป!",
  "大好き！勝てるよ！💖",
  "全力でいけ！",
  "Мечты? Хватай!",
  "사랑 퐁퐁 터져! 💕",
]);
const colorList = [
  "#FFADAD",
  "#FFD6A5",
  "#FDFFB6",
  "#CAFFBF",
  "#9BF6FF",
  "#A0C4FF",
  "#BDB2FF",
  "#FFC6FF",
  "#FFFFFC",
  "#FFCBCB",
  "#FFF5BA",
  "#D5AAFF",
];

const Add_do = () => {
  if (value.value.trim()) {
    const randomTitle =
      Listmian.value[Math.floor(Math.random() * Listmian.value.length)];
    Listdo.value.push({ text: value.value.trim(), title: randomTitle });
    value.value = "";
  }
};

onMounted(() => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < textmain.length) {
      displaytext.value += textmain[index];
      index++;
    } else {
      clearInterval(interval);
      texth3.value = true;
    }
  }, 150);
});

const Editfion = (index: number, text: string) => {
  editIndexter.value = index;
  EditText.value = text;
};

const saveEdit = (index: number) => {
  if (EditText.value.trim()) {
    Listdo.value[index].text = EditText.value.trim();
    editIndexter.value = null;
    EditText.value = "";
  }
};

const deleteter = (index: number) => {
  Listdo.value.splice(index, 1);
};
</script>

<style scoped>
.p-inputtext {
  border-radius: 22px;
  padding: 8px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
