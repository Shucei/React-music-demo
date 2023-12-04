import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { PlaylistMenuItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'

interface Props {
  children?: ReactNode
  itemData: {
    id: number
    name: string
    picUrl: string
    playCount: number
    copywriter: string
    trackCount: number
  }
}

const PlaylistMenuItem: FC<Props> = (props) => {
  const { itemData } = props

  return (
    <PlaylistMenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </PlaylistMenuItemWrapper>
  )
}

export default memo(PlaylistMenuItem)
