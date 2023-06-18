import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 
export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="inherit">Inherit</Button>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="info">Info</Button>
      <Button variant="contained" color="warning">Warning</Button>
   </Stack>
  );
}

// color must be one of below
// inherit, primary, secondary, success, error, info, warning