import {Flex, Figure, Img, Figcaption, Heading, Text} from "../../atoms";


export default function StreamerCard({bgColor, imgSrc, headingText, links = [], alt}) {
    return (
        <Flex bgColor={bgColor}>
            <Figure>
                <Img src={imgSrc} layout="fill" alt={alt} />
                <Figcaption><Heading>{headingText}</Heading></Figcaption>
            </Figure>
            {links && (
                <Flex>
                    {links.map((link, index) => <Text key={index}>{link}</Text>)}
                </Flex>
            )}
        </Flex>
    )

} 