import { StyledCardContainer } from './Card.styled';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return <StyledCardContainer {...rest}>{children}</StyledCardContainer>;
};

export default Card;
