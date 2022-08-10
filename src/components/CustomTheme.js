import { createTheme } from '@mui/material/styles';
// Palette: #B68D40, #F4EBD0, #122620, #D6AD60
// https://www.canva.com/colors/color-palettes/emerald-entrance/

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#122620',
    },
    secondary: {
      light: '#0066ff',
      main: '#F4EBD0',
      contrastText: '#ffcc00',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    divider: 'rgba(0,0,0,0.33)',
  },
});

export default CustomTheme;
