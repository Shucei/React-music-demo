import React, { memo, useEffect } from 'react'
import { useAppDispatch } from '@/store'
import Banner from './components/banner'
import { getTopBannerAction } from './store'
import { RecommendWrapper } from './style'
import HotRecommend from './components/hot/'
interface Props {
  children?: React.ReactNode
}

const Recommend: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [])

  return (
    <RecommendWrapper>
      <Banner></Banner>

      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
