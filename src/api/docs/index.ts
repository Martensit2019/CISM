import httpService from '@/services/http.service'
import {ICard } from '@/components/interfaces'

export const getCards = async (search: string) => httpService.get<ICard[]>(`user/docs/?search=${search}`)