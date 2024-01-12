import {Backdrop, CircularProgress} from '@mui/material'
import {useIsFetching, useIsMutating} from '@tanstack/react-query'
import {useRecoilValue} from 'recoil'
import {loadingAtom} from '~/atoms/loading'

const Loading = () => {
  const _isLoading = useRecoilValue(loadingAtom)
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
    <Backdrop sx={{color: '#28BBFF', zIndex: 9999}} open={_isLoading || Boolean(isMutating) || Boolean(isFetching)}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default Loading
