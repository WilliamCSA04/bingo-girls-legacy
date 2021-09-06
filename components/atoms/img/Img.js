import Image from 'next/image'

export default function Img({alt, ...props}) {
    return <Image alt={alt ? "" : alt} {...props} />
}