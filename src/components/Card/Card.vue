<template>
  <div :class="['card', { selected: card.id === selectedCardId }]" :key="card.id"
    @click="cardsStore.setSelectedCard(card)">
    <div class="card__img">
      <img v-if="card.image" :src="card.image" :alt="card.name" />
      <img v-else src="../../assets/images/noimage.jpg" alt="изображение не найдено" />
    </div>
    <div class="card__content">
      <div class="card__title">{{ card.name }}</div>
      <div class="card__volume">12 MB</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICard } from '@/components/interfaces'
import { storeToRefs } from 'pinia'
import { useCardsStore } from '@/stores/cards/cardsStore'
const cardsStore = useCardsStore()
const { selectedCardId } = storeToRefs(cardsStore)

interface IProps {
  card: ICard
}
defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import 'card.scss';
</style>
