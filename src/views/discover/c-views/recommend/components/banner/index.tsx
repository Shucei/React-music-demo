import { useAppSelector } from '@/store'
import React, { memo, useRef, useState } from 'react'
import type { ElementRef } from 'react'
import { shallowEqual } from 'react-redux'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { Carousel } from 'antd'
import classNames from 'classnames'
interface Props {
  children?: React.ReactNode
}

const Banner: React.FC = () => {
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { topBanners } = useAppSelector(
    (state) => ({
      topBanners: state.recommend.topBanners
    }),
    shallowEqual
  ) // shallowEqual浅层比较，只比较第一层,提高性能
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  /** 事件处理函数 */
  function handleBeforeChange() {
    // setCurrentIndex(-1)
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  /** 获取背景图片 */
  let bgImageUrl
  if (currentIndex >= 0 && topBanners.length > 0) {
    bgImageUrl = topBanners[currentIndex].imageUrl + '?imageView&blur=40x20&quot'
  }

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={1500}
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
