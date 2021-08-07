import React from 'react';
import '../stylesheets/filter.css';

interface CheckboxProps {
  checked: boolean;
  handleChangeCheckbox: React.ChangeEventHandler;
}

export const CheckboxComponent: React.FC<CheckboxProps> = (
  props: CheckboxProps
) => {
  const { checked, handleChangeCheckbox } = props;

  return (
    <form>
      <div className='__checkbox'>
        Active User
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChangeCheckbox}
        ></input>
      </div>
    </form>
  );
};
