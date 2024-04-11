'use client';
import { Marcellus } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const marcellus = Marcellus({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
});

const theme = createTheme({
  typography: {
    fontFamily: marcellus.style.fontFamily,
  },
});

export default theme;