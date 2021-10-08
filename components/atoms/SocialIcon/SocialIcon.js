import PropTypes from 'prop-types';
import { Icon } from '@chakra-ui/react';
import {
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { FaTwitch, FaTiktok } from 'react-icons/fa';

const REGEX = {
  youtube: /youtube/i,
  twitch: /twitch/i,
  instagram: /instagram/i,
  tiktok: /tiktok/i,
  twitter: /twitter/i,
};

export default function SocialIcon({ url = '', color, ...props }) {
  if (REGEX.instagram.test(url)) {
    return (
      <Icon as={AiOutlineInstagram} color={color || 'instagram'} {...props} />
    );
  }
  if (REGEX.tiktok.test(url)) {
    return <Icon as={FaTiktok} color={color || 'tiktok'} {...props} />;
  }
  if (REGEX.twitch.test(url)) {
    return <Icon as={FaTwitch} color={color || 'twitch'} {...props} />;
  }
  if (REGEX.twitter.test(url)) {
    return <Icon as={AiOutlineTwitter} color={color || 'twitter'} {...props} />;
  }
  if (REGEX.youtube.test(url)) {
    return <Icon as={AiOutlineYoutube} color={color || 'youtube'} {...props} />;
  }
  return <Icon as={AiOutlineLink} {...props} />;
}

SocialIcon.propTypes = {
  url: PropTypes.string,
  props: PropTypes.shape({
    w: PropTypes.number,
    h: PropTypes.number,
    color: PropTypes.string,
  }),
};
