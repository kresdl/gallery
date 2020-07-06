import { useContext } from 'react'
import StoreContext from './components/StoreContext'

export const useStore = () => useContext(StoreContext)