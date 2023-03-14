import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';


export default function EditTodo({ openDialog, handClose, todo, editarTodo }) {

  const [editText, setEditText] = React.useState(todo.text);

  const textHandler = () => {
    editarTodo(todo.id, editText)
    handClose();
  }
  return (

    <Dialog
      open={openDialog}
      keepMounted
      onClose={handClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Editando tarefa!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">

          <TextField defaultValue={editText} onChange={(texto) => setEditText(texto.target.value)} />

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handClose}>Cancelar</Button>
        <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>

  );
}
