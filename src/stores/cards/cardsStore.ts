import { defineStore } from 'pinia'
import { getCards } from '@/api/docs'
import { ICard } from '@/components/interfaces'
import { ref, computed } from 'vue'

export const useCardsStore = defineStore('cardsStore', () => {
  const isLoading = ref<boolean>(false)
  const cards = ref<ICard[]>([])
  const selectedCard = ref<ICard | null>(null)
  const setSelectedCard = (card: ICard) => selectedCard.value = card

  const selectedCardId = computed(() => selectedCard.value?.id || 0)

  const fetchCards = async (search: string) => {
    if (search === '') return
    isLoading.value = true
    cards.value = []
    selectedCard.value = null
    getCards(search).then((res) => {
      if (res?.data) cards.value = res.data
    }).finally(() => isLoading.value = false)

  }
  return {
    cards,
    selectedCard,
    selectedCardId,
    isLoading,
    setSelectedCard,
    fetchCards
  }
})
