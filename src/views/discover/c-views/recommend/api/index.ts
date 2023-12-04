import HYRequest from '@/api'

export function getTopBanner() {
  return HYRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit: number) {
  return HYRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
