export default function staticBlurDataUrl() {
    const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'>
    <filter id='b' color-interpolation-filters='sRGB'>
    <feGaussianBlur stdDeviation='20'/>
    <feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/>
    <feFlood x='0' y='0' width='100%' height='100%'/>
    <feComposite operator='out' in='s'/>
    <feComposite in2='SourceGraphic'/>
    <feGaussianBlur stdDeviation='20'/>
    </filter>
    <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='none' style='filter: url(#b);' href='data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoIAAUAAkA4JZwAApworfgA/vGhFWtdMUpD+zgOU+EC8nFkR6a0j3GYdOcdBp3YAAA='
    />
    </svg>
    `

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str)

    return `data:image/svg+xml;base64,${toBase64(blurSvg)}`
}