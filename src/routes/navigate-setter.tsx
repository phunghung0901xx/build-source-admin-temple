import { useNavigate } from 'react-router-dom'
import History from '~/services/navigate.service'

const NavigateSetter = () => {
  History.navigate = useNavigate()

  return null
}

export default NavigateSetter
