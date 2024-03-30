import { THEME_TYPES } from '../constants'

export const applyThemePreference = (theme: string): void => {
	//almaceno en localStorage el tema seleccionado
	localStorage.setItem('theme', theme)
	//desestructuro los tipos de temas
	const { THEME_DARK, THEME_LIGHT } = THEME_TYPES
	//obtengo el elemento raíz del documento
	const root = window.document.documentElement
	//verifico si el tema es oscuro
	const isDark = theme === THEME_DARK
	//remuevo el tema actual y agrego el nuevo tema
	root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK)
	//agrego el nuevo tema
	root.classList.add(theme)
	//agrego la propiedad color-scheme al elemento raíz
	root.style.setProperty('color-scheme', theme)
}
