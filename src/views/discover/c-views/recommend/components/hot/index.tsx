import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface Props {
  children?: ReactNode
}

// 类型约束，FC是函数组件的意思
const HotRecommend: FC<Props> = () => {
  return <div>热门</div>
}

export default memo(HotRecommend)
