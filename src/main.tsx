import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute.tsx'

createRoot(document.getElementById('root')!).render(
    <AppRoute />
)
