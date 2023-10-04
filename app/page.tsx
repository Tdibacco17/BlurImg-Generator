import Image from 'next/image'
import styles from './page.module.scss'
import staticBlurDataUrl from '@/utils/blur/staticBlurDataUrl'
import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl'
import data from '@/models/es.json'

interface ImgDataInterface {
  imgId: number,
  imgSrc: string,
  imgAlt: string,
}

// CHEKIAR SIEMPRE 
//const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://localhost:3001';
export default async function BannerComponent() {
  return (
    <div className={styles['container']}>
      {
        data.images.map(async (image: ImgDataInterface, index: number) => {
          const blurHash = await dynamicBlurDataUrl(image.imgSrc);

          return (
            <section key={index} className={styles['container-outer-banner-image']}>
              <Image
                key={image.imgId}
                className={styles['container-inner-banner-image']}
                src={image.imgSrc}
                alt={image.imgAlt}
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
        )
      }
    </div >
  )
}