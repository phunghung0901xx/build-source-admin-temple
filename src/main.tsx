import { ThemeProvider } from '@mui/material'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import theme from './constants/theme'
import NavigateSetter from './routes/navigate-setter'
import { RecoilRoot } from 'recoil'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DataError } from './types/common.interface'
import Toastconfig from './services/toast.service'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const queryCache = new QueryCache()
const queryClient = new QueryClient({
  queryCache: queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (err) => {
        Toastconfig.error(
          ((err as any)?.error?.data?.error as DataError)?.message ||
            '서버 애러가 발생했습니다. \n 잠시 후 다시 시도해 주세요.',
        )
      },
    },
    mutations: {
      onError: (err) =>
        Toastconfig.error(
          ((err as any)?.error?.data?.error as DataError)?.message ||
            '서버 애러가 발생했습니다. \n 잠시 후 다시 시도해 주세요.',
        ),
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
