import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import { shallowEqual } from 'react-redux'

interface Props {
  children?: React.ReactNode
}
const Banner: React.FC = () => {
  const { topBanners } = useAppSelector(
    (state) => ({
      topBanners: state.recommend.topBanners
    }),
    shallowEqual
  ) // shallowEqual浅层比较，只比较第一层,提高性能

  return <div>Banner</div>
}

export default memo(Banner)
