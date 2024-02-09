import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ onSelect, children }) {
    return (
        <button onClick={onSelect}>{children}</button>
    )
}

Button.propTypes = {
    onSelect: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };