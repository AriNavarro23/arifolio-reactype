import { create } from 'zustand'

interface ITranslateStore {
	lang: string
	setLang: (lang: string) => void
	showTranslateToggle: boolean
	setShowTranslateToggle: (showToggle: boolean) => void
}

//uso zustand para crear un store de traduccion, con un estado de idioma y una funcion para cambiarlo
//uso localstorage para guardar el idioma seleccionado, si no hay idioma seleccionado, uso el ingles
//uso la funcion setLang para cambiar el idioma
export const useTranslateStore = create<ITranslateStore>(set => ({
	lang: localStorage.getItem('lang') || 'en',
	setLang: (lang: string) => set(() => ({ lang })),
	showTranslateToggle: false,
	setShowTranslateToggle: (showToggle: boolean) =>
		set(() => ({ showTranslateToggle: showToggle })),
}))
