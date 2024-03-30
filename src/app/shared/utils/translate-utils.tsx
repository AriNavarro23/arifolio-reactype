import { useTranslateStore } from '../stores/useTranslateStore.ts'

export const switchLanguage = (lang: string) => {
	//guardo y obtengo el idioma actual
	const lang_ = useTranslateStore.getState().lang
	//obtengo la función para cambiar el idioma del store
	const setLang = useTranslateStore.getState().setLang
	//verifico si el idioma actual es diferente al idioma seleccionado
	if (lang !== lang_) {
		//cambio el idioma del store
		setLang(lang)
		//almaceno en localStorage el idioma seleccionado
		localStorage.setItem('lang', lang)
	}
}
