import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props) => {
  const {
    name, label, onChange, defaultOption, value, error, options,
  } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          className="form__select"
          value={value}
          onChange={onChange}
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <div className="form__input__error">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  defaultOption: null,
  value: '',
  error: null,
};

export default SelectInput;
