import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

interface IProps {
    handleChange: (e: any) => void,
    name: string;
    options: string[];
    label: string;
    value: string | number;
}

const Dropdown: React.FC<IProps> = ({
  label,
  name,
  options,
  handleChange,
  value,
}) => (
  <>
    <Select
      labelId="demo-simple-select-label"
      name={name}
      label={label}
      onChange={handleChange}
      defaultValue={value}
      fullWidth
    >
      {options.map((item: string) => <MenuItem value={item}>{item}</MenuItem>)}
    </Select>
  </>
);

export default Dropdown;
