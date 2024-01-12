 import { useEffect, useState } from 'react'
 import { useSetRecoilState } from 'recoil'
 import { getProfile } from '~/services/user.service'
 import './assets/scss/global.scss'
 import { userAtom } from './atoms/user'
 import { editableAtom } from './atoms/editable'
 import Loading from './components/loading'
 import Routes from './routes'
 import TokenService from './services/token.service'
 import { useLocation } from 'react-router-dom'

 function App() {
   const setUserInfo = useSetRecoilState(userAtom)
   const setEditable = useSetRecoilState(editableAtom)
   const user = TokenService.getAuth()
   const [isLogin, setIsLogin] = useState(false)
   const location = useLocation()

   useEffect(() => {
     if (user?.accessToken) {
       onLoadGetAdminProfile()
       setIsLogin(true)
     } else {
       setIsLogin(false)
     }
   }, [user?.accessToken])

   const onLoadGetAdminProfile = async () => {
     try {
       const pro = await getProfile()
       setUserInfo(pro.data)
     } catch (e) {
       console.log(e)
     }
   }

   useEffect(() => {
     setEditable(false)
   }, [location])

   return (
     <>
       <Routes />
       <Loading />
     </>
   )
 }

 export default App
