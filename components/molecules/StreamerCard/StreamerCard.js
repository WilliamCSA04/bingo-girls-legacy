import { Flex, Figure, Img, Figcaption, Heading, Text, Box } from '../../atoms';

export default function StreamerCard({
  bgColor,
  imgSrc,
  headingText,
  links = [],
  alt,
}) {
  return (
    <Flex
      bgColor={bgColor}
      w={60}
      direction="column"
      textAlign="center"
      color="white"
    >
      <Figure>
        <Box position="relative" height={60}>
          <Img src={imgSrc} layout="fill" objectFit="cover" alt={alt} />
        </Box>
        <Figcaption>
          <Heading>{headingText}</Heading>
        </Figcaption>
      </Figure>
      {links && (
        <Flex>
          {links.map((link, index) => (
            <Text key={index}>{link}</Text>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
