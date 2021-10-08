import PropTypes from 'prop-types';
import {
  Flex,
  Figure,
  Img,
  Figcaption,
  Heading,
  Text,
  Box,
  SocialIcon,
  Link,
  SimpleGrid,
} from '../../atoms';

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
        <SimpleGrid columns={2} spacing={10} p={4}>
          {links.map(({ link, text }, index) => (
            <Link key={index} href={link}>
              <a>
                <SocialIcon url={link} mr={1} />
                {text}
              </a>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
}

StreamerCard.protoTypes = {
  alt: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  headingText: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
