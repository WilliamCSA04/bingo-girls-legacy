import { Flex, Figure, Img, Figcaption, Heading, Text, Box } from '../../atoms';

export default function StreamerCard({
  bgColor,
  imgSrc,
  headingText,
  links = [],
  alt,
}) {
  return (
    <Flex bgColor={bgColor}>
      <Figure>
        <Box p="relative">
          <Img src={imgSrc} layout="fill" alt={alt} />
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
