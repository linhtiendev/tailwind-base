import {
  AdvertisementResponse,
  CateAdvertisementPositionResponse,
} from 'types/advertisement/advertisement.type'

import { BannerEnum } from 'enums'

// Copied from admin: src/app/modules/advertisement/common/types.ts
export const getBannerEnum = (type: BannerEnum, data: Array<CateAdvertisementPositionResponse>) => {
  if (type === BannerEnum.HomeMainBanner) {
    const mainBanner = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.HomeMainBanner
    )
    return mainBanner[0]
  }
  if (type === BannerEnum.HomeRightBanner01) {
    const rightBanner01 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.HomeRightBanner01
    )
    return rightBanner01[0]
  }
  if (type === BannerEnum.HomeRightBanner02) {
    const rightBanner02 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.HomeRightBanner02
    )
    return rightBanner02[0]
  }
  if (type === BannerEnum.HomeExtraBanner01) {
    const extraBanner01 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.HomeExtraBanner01
    )
    return extraBanner01[0]
  }
  if (type === BannerEnum.HomeExtraBanner02) {
    const extraBanner02 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.HomeExtraBanner02
    )
    return extraBanner02[0]
  }
  if (type === BannerEnum.HomeExtraBanner03) {
    const extraBanner03 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.HomeExtraBanner03
    )
    return extraBanner03[0]
  }
  if (type === BannerEnum.HomeExtraBanner04) {
    const extraBanner04 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.HomeExtraBanner04
    )
    return extraBanner04[0]
  }
  if (type === BannerEnum.CategoryBanner01) {
    const categoryBanner01 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.CategoryBanner01
    )
    return categoryBanner01[0]
  }
  if (type === BannerEnum.CategoryBanner02) {
    const categoryBanner02 = data.filter(
      (item: CateAdvertisementPositionResponse) => item.Code === BannerEnum.CategoryBanner02
    )
    return categoryBanner02[0]
  }

  return null
}

// Copied from admin: src/app/modules/advertisement/common/types.ts
export const parseAdvertisementImage = (
  bannerData: Array<AdvertisementResponse>,
  positionBanner: Array<CateAdvertisementPositionResponse>,
  type: BannerEnum
) => {
  const infoBanner = getBannerEnum(type, positionBanner)
  const bannerFilterByIdList = bannerData
    .filter((item: AdvertisementResponse) => item.CateAdvertisementPositionId === infoBanner?.Id)
    .filter((item: AdvertisementResponse) => {
      const now = Date.now()
      const end = new Date(item.EndDate).getTime()
      const condition = end - now
      if (condition > 0) {
        return item
      }
      return undefined
    })

  return { bannerFilterByIdList, infoBanner }
}
