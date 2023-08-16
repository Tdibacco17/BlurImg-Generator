import Image from 'next/image'
import styles from './page.module.scss'
import staticBlurDataUrl from '@/utils/blur/staticBlurDataUrl'
import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl'
import data from '@/models/es.json'

interface ImgDataInterface {
  imgSrc: string,
  imgAlt: string,
  imgBlur: string
}

export default async function BannerComponent() {
  const blurHash = await dynamicBlurDataUrl(data.image.imgSrc);

  return (
    <section className={styles['container-outer-banner-image']}>
      <Image
        className={styles['container-inner-banner-image']}
        src={data.image.imgSrc}
        alt={data.image.imgAlt}
        fill
        sizes='100vw, (max-width: 442px) 32vw, (max-width: 768px) 35vw, (max-width: 1024px) 75vw'
        priority
        quality={100}
        placeholder='blur'
        blurDataURL={blurHash || staticBlurDataUrl()}
      />
    </section>
  )
}