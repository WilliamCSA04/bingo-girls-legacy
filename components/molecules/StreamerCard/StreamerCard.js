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
      borderRadius="sm"
    >
      <Figure>
        <Box position="relative" height={60} overflow="hidden">
          <Img
            src={imgSrc}
            layout="fill"
            objectFit="cover"
            alt={alt}
            borderTopRadius="sm"
          />
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
