import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './provider/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
     <RouterProvider router={router} />
  </ThemeProvider>,
)
