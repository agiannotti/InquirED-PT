import React from 'react';
import { FilterProps } from '../../types/types';
import '../stylesheets/filter.css';
import Form from 'react-bootstrap/Form';
import { CheckboxComponent } from './Checkbox';

const Filter = (props: FilterProps): JSX.Element => {
  const {
    handleChangeDistrict,
    districtInput,
    handleChangeCheckbox,
    isChecked,
  } = props;

  return (
    <div className='filter'>
      <label htmlFor='district'>Filter by District </label>
      <Form.Select
        name='district'
        value={districtInput}
        onChange={handleChangeDistrict}
      >
        <option value={0}>Select a District</option>
        <option value={1}>District One</option>
        <option value={2}>District Two</option>
        <option value={3}>District Three</option>
        <option value={4}>District Four</option>
      </Form.Select>
      <CheckboxComponent
        checked={isChecked}
        handleChangeCheckbox={handleChangeCheckbox}
      />
    </div>
  );
};

export default Filter;
