import React from 'react';
import { StyledInput } from './styles';
import PropTypes from 'prop-types';

const Input = (props) => (
    <StyledInput type="text" {...props} />
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Input;