import { Header as HeaderAtom } from '../../atoms';
import { ColorModeSwitch } from '../../molecules';

export default function Header(props) {
  return (
    <HeaderAtom {...props}>
      <ColorModeSwitch />
    </HeaderAtom>
  );
}
