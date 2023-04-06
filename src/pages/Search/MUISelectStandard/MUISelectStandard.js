import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function MUISelectStandard({ setSearchStandardValue }) {
  const handleChange = event => {
    setSearchStandardValue(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 2.6, minWidth: 120 }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        검색기준
      </InputLabel>
      <NativeSelect
        defaultValue="itemName"
        inputProps={{
          name: 'search',
          id: 'uncontrolled-native',
        }}
        onChange={handleChange}
      >
        {SEARCH_STANDARD.map(standard => (
          <option key={standard.id} value={standard.standard}>
            <MenuItem>{standard.text}</MenuItem>
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

const SEARCH_STANDARD = [
  { id: 1, standard: 'itemName', text: '작품명' },
  { id: 2, standard: 'authorName', text: '작가명' },
];
