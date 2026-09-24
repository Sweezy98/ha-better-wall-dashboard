import { useRef } from 'react';
import { StyledPopupScroll } from './Popup.styled';
import { useDragScroll } from '../../../hooks/useDragScroll';

/** The scrolling part of a popup opened with `fixedBody`. */
const PopupScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useDragScroll(ref);
  return <StyledPopupScroll ref={ref}>{children}</StyledPopupScroll>;
};

export default PopupScroll;
