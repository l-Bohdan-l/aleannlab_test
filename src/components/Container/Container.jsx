import { Div } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

Container.propTypes = {
  children: PropTypes.node,
};