import { chakra } from '@chakra-ui/system'
import Image from 'next/image'

const NextImage = chakra(Image);

export default function Img({alt, ...props}) {
    return <NextImage alt={alt ? alt : ""} {...props} />
}