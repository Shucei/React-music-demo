import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1/index'
import { HotRecommendWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import PlaylistMenuItem from '@/components/playlist-menu-item'
interface Props {
  children?: ReactNode
}

// 类型约束，FC是函数组件的意思
const HotRecommend: FC<Props> = () => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqual
  ) // shallowEqual浅层比较，只比较第一层,提高性能
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/playlist"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommend.map((item, index) => {
          return <PlaylistMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
