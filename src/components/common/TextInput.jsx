import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    name, label, onChange, placeHolder, value, error,
  } = props;

  let wrapperClass = 'form-group';
  if (error && error.length > 0) wrapperClass += ' has-error';

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form__input"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="form__input__error">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  placeHolder: '',
  value: '',
  error: null,
};

export default TextInput;
