import { create } from 'zustand'
import { THEME_TYPES } from '../constants'

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES

interface IThemeStore {
	theme: string
	toggleTheme: () => void
}

//uso matchMedia para saber si el tema del sistema es oscuro
const isDark = matchMedia('(prefers-color-scheme: dark)').matches

//uso zustand para crear un store de tema, con un estado de tema y una funcion para cambiarlo
//uso localstorage para guardar el tema seleccionado, si no hay tema seleccionado, uso el tema del sistema
//uso la funcion toggleTheme para cambiar el tema, si el tema es claro, lo cambio a oscuro y viceversa
export const useThemeStore = create<IThemeStore>(set => ({
	theme: localStorage.getItem('theme') || (isDark ? THEME_DARK : THEME_LIGHT),
	toggleTheme: () =>
		set(state => ({
			theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
		})),
}))
