import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Side = ({ children, orientation }) => {
  return (
    <StyledSideElement orientation={orientation}>
      <TransitionGroup component={null}>
        <CSSTransition classNames="fade" timeout={500}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </StyledSideElement>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string,
};

export default Side;
