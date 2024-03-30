import { create } from 'zustand'

interface ITranslateStore {
	lang: string
	setLang: (lang: string) => void
	showTranslateToggle: boolean
	setShowTranslateToggle: (showToggle: boolean) => void
}

//uso zustand para crear un store de traduccion, con un estado de idioma y una funcion para cambiarlo
export const useTranslateStore = create<ITranslateStore>(set => ({
	//uso localstorage para guardar el idioma seleccionado, si no hay idioma seleccionado, uso el ingles
	lang: localStorage.getItem('lang') || 'en',
	//uso la funcion setLang para cambiar el idioma
	setLang: (lang: string) => set(() => ({ lang })),
	//estado inicial del toggle de traduccion
	showTranslateToggle: false,
	//funcion para cambiar el estado del toggle de traduccion
	setShowTranslateToggle: (showToggle: boolean) =>
		set(() => ({ showTranslateToggle: showToggle })),
}))
