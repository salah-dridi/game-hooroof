import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
export default function BoxSxColorCh({ main, dark, text, Icon,textCol}) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: main,
            dark: dark,
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 5,
          bgcolor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'red',
          transition: 'all 0.3s ease-in-out', // تأثير ناعم
          boxShadow: `0 0 10px ${main}`, // ضوء خفيف في الحالة العادية
          '&:hover': {
            bgcolor: 'primary.dark',
            boxShadow: `0 0 25px 5px ${dark}`, // يشع أكثر وقت hover
            transform: 'scale(1.05)', // تكبر شوية عند المرور
          },
        }}
      >
        {Icon && <Icon style={{ color: textCol, fontSize: 40 }} />}
        <p style={{ color: textCol, margin: 0 }}>{text}</p>
      </Box>
    </ThemeProvider>
  );
}
