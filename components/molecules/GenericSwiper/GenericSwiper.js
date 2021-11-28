import { Swiper, Button, Icon } from '../../atoms';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function NavButton({ children, isDisabled, ...props }) {
  return (
    <Button
      hidden={isDisabled}
      position="absolute"
      bottom="50%"
      bg="none"
      fontSize="4xl"
      _hover={{ backgroundColor: 'none' }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default function GenericSwiper({ children, ...props }) {
  return (
    <Swiper
      w="5rem"
      infinite
      onSlideChanged={({ item }) => setActiveIndex(item)}
      renderPrevButton={({ isDisabled }) => (
        <NavButton aria-label="Anterior" isDisabled={isDisabled} left={0}>
          <Icon as={MdKeyboardArrowLeft} />
        </NavButton>
      )}
      renderNextButton={({ isDisabled }) => (
        <NavButton aria-label="Próximo" isDisabled={isDisabled} right={0}>
          <Icon as={MdKeyboardArrowRight} />
        </NavButton>
      )}
      {...props}
    >
      {children}
    </Swiper>
  );
}
