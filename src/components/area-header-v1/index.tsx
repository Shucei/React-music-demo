import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { HeaderV1Wrapper } from './style'

interface Props {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreLink?: string
  moreText?: string
}

// 类型约束，FC是函数组件的意思
const AreaHeaderV1: FC<Props> = (props) => {
  const { title = '默认标题', keywords = [], moreLink = '/', moreText = '更多' } = props
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={index}>
                <a href="/">{item}</a>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaHeaderV1)
