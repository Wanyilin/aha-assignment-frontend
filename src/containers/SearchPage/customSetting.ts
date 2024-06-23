import 'styles/variables.scss';

export const customSlider = {
  // width: 'calc(100vw - 40px)',
  padding: '0px',
  height: '8px',
  color: '#FFFFFF80',
  '& .MuiSlider-mark': {
    color: 'transparent',
    backgroundColor: 'transparent',
  },
  '& .MuiSlider-track': {
    height: 8,
    border: 'none',
    padding: '0 2px',
    backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
  },
  '& .MuiSlider-markLabel': {
    color: '#fff',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#000',
    border: '6px solid #FFD25F',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
};

export const customTextField = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--text-field-color)',
      borderWidth: '3px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--text-field-color-focused)',
      borderWidth: '3px',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'var(--text-field-color)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'var(--text-field-color-focused)',
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
};

