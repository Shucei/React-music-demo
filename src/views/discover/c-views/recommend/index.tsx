import React, { memo, useEffect } from 'react'
import { useAppDispatch } from '@/store'
import Banner from './components/banner'
import { getTopBannerAction } from './store'
interface Props {
  children?: React.ReactNode
}

const Recommend: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [])

  return (
    <div>
      <Banner></Banner>
      <h2>Recommend</h2>
    </div>
  )
}

export default memo(Recommend)
