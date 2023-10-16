<template>
  <div v-if="selectedCard" class="content">
    <div class="content__img">
      <img v-if="selectedCard.image" :src="selectedCard.image" alt="" />
      <img v-else src="@/assets/images/noimage.jpg" alt="" />
    </div>
    <div class="content__body">
      <div class="title">{{ selectedCard.name }}</div>
      <div class="btns">
        <Button label="Скачать" rounded @click="download" />
        <Button label="Удалить" color="danger" rounded :disabled="isDisabled" />
      </div>
      <div class="title">Описание:</div>
      <div class="description">{{ selectedCard.description }} </div>
    </div>
  </div>
  <div v-else class="content">
    <div class="empty">Выберите документ, чтобы посмотреть его содержиое</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import Button from '@/components/IU/Button/Button.vue'
import { useCardsStore } from '@/stores/cards/cardsStore'
import {createTxtFile} from '@/services/download'

const cardsStore = useCardsStore()
const { selectedCard } = storeToRefs(cardsStore)

const isDisabled = computed(() => !Boolean(selectedCard?.value?.image))

const download = () => {
  if (!selectedCard?.value?.description || !selectedCard?.value?.name) return
  createTxtFile(selectedCard.value.description, selectedCard.value.name)
}
</script>

<style lang="scss" scoped>
@import 'content.scss'
</style>
