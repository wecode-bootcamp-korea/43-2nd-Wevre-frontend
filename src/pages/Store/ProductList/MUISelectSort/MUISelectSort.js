import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useNavigate } from 'react-router-dom';

export default function MUISelectSort({ setSearchSortValue, categoryId }) {
  const navigate = useNavigate();
  const handleChange = event => {
    setSearchSortValue(event.target.value);
    navigate(`/store/${categoryId}?offset=0&limit=1`);
  };

  return (
    <FormControl variant="standard" sx={{ m: 2.6, minWidth: 120 }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        정렬
      </InputLabel>
      <NativeSelect
        defaultValue="price"
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
  { id: 1, standard: 'price', text: '가격낮은순' },
  { id: 2, standard: '-price', text: '가격높은순' },
  { id: 3, standard: 'productionYear', text: '제작연도순' },
  { id: 4, standard: 'author', text: '작가이름순' },
];
