import HYRequest from '@/api'

export function getTopBanner() {
  return HYRequest.get({
    url: '/banner'
  })
}
