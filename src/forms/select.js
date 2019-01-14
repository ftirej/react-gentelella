import React from 'react';
import PropTypes from 'prop-types';
import { prepareProps, retrieveValue } from './field'
import { FormGroup, HelpBlock } from 'react-bootstrap'

const Select = props => {
  const { name, label, required, layout, children } = props;
  const requiredTag = required ? <span className="required">*</span> : '';
  const touched = retrieveValue('touched', props);
  const error = retrieveValue('error', props);
  const isInvalid = touched && error;
  const validationState = isInvalid ? 'error' : null;
  const inputClass = isInvalid ? 'form-control parsley-error' : 'form-control';

  const labelRender = label
    ? (<label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={ name }>{ label } { requiredTag }</label>)
    : '';

  const layoutClass = layout === 'centered'
    ? 'col-md-6 col-sm-6 col-xs-12'
    : layout === 'vertical'
      ? ''
      : 'col-md-9 col-sm-9 col-xs-12';

  const selectProps = prepareProps(props);
  return (

    <FormGroup validationState={ validationState }>
      { labelRender }
      <div className={ label ? layoutClass : ''}>
        <select
          id={ name }
          name={ name }
          required={ required }
          className={ inputClass }
          { ...selectProps }
        >
          { children }
        </select>
        { isInvalid
          ? <HelpBlock>{ error }</HelpBlock>
          : ''
        }
      </div>
    </FormGroup>
  );

};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool.isRequired,
  formProps: PropTypes.object,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'centered']).isRequired,
};

Select.defaultProps = {
  required: false,
  formProps: undefined,
  label: '',
  layout: 'horizontal'
};

export default Select;