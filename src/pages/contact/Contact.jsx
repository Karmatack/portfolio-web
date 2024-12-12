import React from 'react';
import { TextField, Button } from '@mui/material';

function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800">Contacto</h2>
      <form className="mt-4 space-y-4">
        <TextField fullWidth label="Nombre" variant="outlined" />
        <TextField fullWidth label="Correo" variant="outlined" />
        <TextField
          fullWidth
          label="Mensaje"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Contact;
