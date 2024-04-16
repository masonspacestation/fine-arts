



export class Artwork {
  constructor(data) {
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.originalLink = data.originalLink

    this.full = data.imgUrls.full
    this.regular = data.imgUrls.regular
    this.small = data.imgUrls.small

    this.description = data.description
    this.altDescription = data.altDescription
    this.attribution = data.attribution
    this.color = data.color
    this.admirers = data.admirers
    this.cached = data.cached
  }
}



/**
 *   constructor(data) {
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.originalLink = data.originalLink
    this.imgUrls = [
      this.raw = data.raw,
      this.full = data.full,
      this.regular = data.regular,
      this.small = data.small,
      this.thumb = data.thumb,
      this.small_s3 = data.small_s3
    ],
      this.description = data.description
    this.altDescription = data.altDescription
    this.attribution = data.attribution
    this.color = data.color
    this.admirers = data.admirers
    this.cached = data.cached
  }


 {
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.originalLink = data.originalLink
    this.imgUrls = data.imgUrls
        this.raw = data.raw
        this.full = data.full
        this.regular = data.regular
        this.small = data.small
        this.thumb = data.thumb
        this.small_s3 = data.small_s3
    },
    this.description = data.description
    this.altDescription = data.altDescription
    this.attribution = data.attribution
    this.color = data.color
    this.admirers = data.admirers
    this.cached = data.cached
}



 */