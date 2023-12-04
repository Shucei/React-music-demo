import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1/index'
import { HotRecommendWrapper } from './style'
interface Props {
  children?: ReactNode
}

// 类型约束，FC是函数组件的意思
const HotRecommend: FC<Props> = () => {
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/playlist"
      ></AreaHeaderV1>
      Hot
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
