<template>
  <aside class="aside" :style="{paddingRight: cards.length > 4 ? '7px' : '25px'}">
    <div class="title">Поиск документа</div>
    <form @submit.prevent="onSearch">
    <Input id="input_search" placeholder="Введите ID документа" v-model="search" />
    </form>
    <div v-if="isLoading" class="search-block">
      <div class="preloader">
        <Loader />
      </div>
    </div>
    <div v-else class="search-block">
      <div class="title">Результаты</div>
      <div v-if="cards.length" class="search-block__body">
        <Card v-for="card in cards" :card="card" :key="card.id" />
      </div>
      <div v-else>Ничего не найдено</div>

    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import Input from '@/components/IU/Input/Input.vue'
import Card from '@/components/Card/Card.vue'
import Loader from '@/components/IU/Loader/Loader.vue'
import { useCardsStore } from '../../stores/cards/cardsStore'

const cardsStore = useCardsStore()

const { cards, isLoading } = storeToRefs(cardsStore)
const search = ref<string>('')

const onSearch = ()=>{
  cards.value = []
  cardsStore.fetchCards(search.value)
}
console.log(import.meta.env.VITE_API_URL)
</script>

<style lang="scss" scoped>
@import 'aside.scss';
</style>
