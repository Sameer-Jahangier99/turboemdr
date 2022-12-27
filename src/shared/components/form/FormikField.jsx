/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import propTypes from 'prop-types';
import { useField } from 'formik';

// utilities
import { DEFAULT_FIELD_MAX_WORDS } from 'utilities/constants';

// STYLES
import styles from 'styles/components/formik-field.module.scss';

function FormikField({
  type,
  fullWidth,
  name,
  className,
  placeholder,
  wordsCounter,
  onChange,
  onBlur,
  disabled,
  maxWords,
}) {
  const [showPassword, setShowPassoword] = useState(false);
  const [innerValue, setInnerValue] = useState('');

  const [field, meta] = useField(name || '');

  // eslint-disable-next-line no-unused-vars
  const { onChange: onValueChange, onBlur: onFieldBlur, value, ...rest } = field;
  const { touched, error } = meta;

  // fields type flag
  const isNumber = type === 'number';
  const isPrice = type === 'price';
  const isDays = type === 'days';

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setInnerValue(value);
    } else {
      setInnerValue('');
    }
  }, [value]);

  const handleShowPassword = () => {
    setShowPassoword(!showPassword);
  };

  const handleChange = useCallback(
    e => {
      const modifiedValue = e.target.value;
      if ((isNumber || isPrice || isDays) && modifiedValue >= 0) {
        setInnerValue(modifiedValue);
        onValueChange(e);
        if (onChange) onChange(modifiedValue, name);
      }
      if (modifiedValue.length <= maxWords && !(isNumber || isPrice || isDays)) {
        // Restricting the value according to max words
        setInnerValue(modifiedValue);
        onValueChange(e);
        if (onChange) onChange(modifiedValue, name);
      }
    },
    [value]
  );

  const handleBlur = useCallback(
    event => {
      onFieldBlur(event);
      if (onBlur) onBlur(event.target.value, name);
    },
    [value, onBlur]
  );

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {type === 'password' ? (
        <div className={`${styles.formGroup} my-2 d-flex flex-column`} style={{ maxWidth: fullWidth ? '100%' : '400px' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name={name}
            className={`${styles.customPasswordField} ${className}`}
            placeholder={placeholder}
            style={{ borderColor: error && touched ? 'red' : '#e3d6d1' }}
            value={innerValue}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
          />

          {showPassword ? (
            <button
              type="button"
              className={`${styles.showHideIcon} ${styles.showHideText} text-muted bg-transparent border-0`}
              onClick={handleShowPassword}
            >
              Hide
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.showHideIcon} ${styles.showHideText} text-muted bg-transparent border-0`}
              onClick={handleShowPassword}
            >
              Show
            </button>
          )}

          {error && touched && <div className={`text-danger ${styles.fieldError}`}>{error}</div>}
        </div>
      ) : type === 'price' ? (
        <div className={`${styles.formGroup}`} style={{ maxWidth: fullWidth ? '100%' : '400px' }}>
          <div className="position-relative">
            <input
              type="number"
              name={name}
              disabled={disabled}
              className={`${styles.customPriceField} w-100 ${className}`}
              placeholder={placeholder}
              style={{ borderColor: error && touched ? 'red' : '#e3d6d1' }}
              value={innerValue}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className={styles.priceIcon}>$</span>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-1">
            {error && touched && <div className={`text-danger ${styles.fieldError}`}>{error}</div>}

            {wordsCounter && (
              <span
                className={`${styles.wordsCounter} flex-grow-1 text-end`}
                style={{ fontSize: '10px', fontFamily: 'Poppins, sans-serif' }}
              >
                {`${innerValue.length}/30 character`}
              </span>
            )}
          </div>
        </div>
      ) : type === 'textarea' ? (
        <div className={`${styles.formGroup}`} style={{ maxWidth: fullWidth ? '100%' : '400px' }}>
          <textarea
            disabled={disabled}
            type="text"
            name={name}
            className={`${styles.customTextField} w-100 ${className}`}
            placeholder={placeholder}
            style={{ borderColor: error && touched ? 'red' : '#e3d6d1', resize: 'none' }}
            value={innerValue}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
          />
          <div className="d-flex align-items-center justify-content-between mt-1">
            {error && touched && <div className={`text-danger ${styles.fieldError}`}>{error}</div>}

            {wordsCounter && (
              <span
                className={`${styles.wordsCounter} flex-grow-1 text-end`}
                style={{ fontSize: '10px', fontFamily: 'Poppins, sans-serif' }}
              >
                {`${innerValue.length}/${maxWords} character`}
              </span>
            )}
          </div>
        </div>
      ) : type === 'days' ? (
        <div className={`${styles.formGroup}`} style={{ maxWidth: fullWidth ? '100%' : '400px' }}>
          <div className="position-relative">
            <input
              type="number"
              name={name}
              disabled={disabled}
              className={`${styles.customDaysField} w-100 ${className}`}
              placeholder={placeholder}
              style={{ borderColor: error && touched ? 'red' : '#e3d6d1' }}
              value={innerValue}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className={styles.daysIcon}>Days</span>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-1">
            {error && touched && <div className={`text-danger ${styles.fieldError}`}>{error}</div>}

            {wordsCounter && (
              <span
                className={`${styles.wordsCounter} flex-grow-1 text-end`}
                style={{ fontSize: '10px', fontFamily: 'Poppins, sans-serif' }}
              >
                {`${innerValue.length}/30 character`}
              </span>
            )}
          </div>
        </div>
      ) : type === 'months' ? (
        <div className={`${styles.formGroup}`} style={{ maxWidth: fullWidth ? '100%' : '400px' }}>
          <div className="position-relative">
            <input
              type="number"
              name={name}
              disabled={disabled}
              className={`${styles.customDaysField} w-100 ${className}`}
              placeholder={placeholder}
              style={{ borderColor: error && touched ? 'red' : '#e3d6d1' }}
              value={innerValue}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className={styles.daysIcon}>Months</span>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-1">
            {error && touched && <div className={`text-danger ${styles.fieldError}`}>{error}</div>}

            {wordsCounter && (
              <span
                className={`${styles.wordsCounter} flex-grow-1 text-end`}
                style={{ fontSize: '10px', fontFamily: 'Poppins, sans-serif' }}
              >
                {`${innerValue.length}/30 character`}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className={`${styles.formGroup}`} style={{ maxWidth: fullWidth ? '100%' : '400px' }}>
          <input
            type={type}
            name={name}
            className={`${styles.customTextField} w-100 ${className}`}
            placeholder={placeholder}
            style={{ borderColor: error && touched ? 'red' : '#e3d6d1' }}
            value={innerValue}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
          />
          <div className="d-flex align-items-center justify-content-between mt-1">
            {error && touched && <div className={`text-danger ${styles.fieldError}`}>{error}</div>}

            {wordsCounter && (
              <span
                className={`${styles.wordsCounter} flex-grow-1 text-end`}
                style={{ fontSize: '10px', fontFamily: 'Poppins, sans-serif' }}
              >
                {`${innerValue.length}/${maxWords} character`}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

FormikField.propTypes = {
  type: propTypes.string,
  fullWidth: propTypes.bool,
  disabled: propTypes.bool,
  name: propTypes.string,
  maxWords: propTypes.number,
  className: propTypes.string,
  placeholder: propTypes.string,
  wordsCounter: propTypes.bool,
  onChange: propTypes.func,
  onBlur: propTypes.func,
};

FormikField.defaultProps = {
  type: '',
  fullWidth: false,
  disabled: false,
  name: '',
  maxWords: DEFAULT_FIELD_MAX_WORDS,
  className: '',
  placeholder: '',
  wordsCounter: false,
  onChange: () => {},
  onBlur: () => {},
};

export default FormikField;
