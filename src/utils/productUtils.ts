// import { errorImage as emptyImage } from 'constants/image.constant'
// import { ProductFilterString } from 'types/product/productRequest.type'
// import { ProductImageType } from 'types/product/productResponse.type'

// import { ProductFilterEnum } from 'enums'

// export const getProductThumbnail = (images: ProductImageType[]): string => {
//   if (images?.length) {
//     const productThumbnail = images.find((image) => image.IsThumbnail)
//     if (productThumbnail) {
//       return productThumbnail.ThumbnailUrl ?? emptyImage
//     }
//     return images[0].ImageUrl ?? emptyImage
//   }

//   return emptyImage
// }

// export const convertProductTypeToFilter = (type: ProductFilterEnum = 0): ProductFilterString => {
//   switch (type) {
//     case ProductFilterEnum.POPULAR:
//       return 'popular'
//     case ProductFilterEnum.NEWEST:
//       return 'newest'
//     case ProductFilterEnum.BEST_SELLER:
//       return 'sales'
//     case ProductFilterEnum.LOW_TO_HIGH:
//       return 'low'
//     case ProductFilterEnum.HIGH_TO_LOW:
//       return 'high'
//     default:
//       return 'popular'
//   }
// }

// export const convertProductFilterToType = (filter: ProductFilterString): number => {
//   switch (filter) {
//     case 'popular':
//       return ProductFilterEnum.POPULAR
//     case 'newest':
//       return ProductFilterEnum.NEWEST
//     case 'sales':
//       return ProductFilterEnum.BEST_SELLER
//     case 'low':
//       return ProductFilterEnum.LOW_TO_HIGH
//     case 'high':
//       return ProductFilterEnum.HIGH_TO_LOW
//     default:
//       return ProductFilterEnum.POPULAR
//   }
// }

// export const getPageQuery = (pageString: string | string[] | undefined) => {
//   const pageNumber = Number(pageString)
//   if (!Number.isNaN(pageNumber) && pageNumber > 0) {
//     return pageNumber
//   }
//   return 1
// }
