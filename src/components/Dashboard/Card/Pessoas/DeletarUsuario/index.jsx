import React from 'react';
import { BiTrash } from 'react-icons/bi'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './styles.css'

function DeletarUsuario({ index, props }) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const listagemUsuarios = props.listagemUsuarios;
  const setListagemUsuarios = props.setListagemUsuarios;
  const indice = index;

  const handleExcluirUsuario = () => {
    const idUsuario = listagemUsuarios.splice(indice, 1)
    setListagemUsuarios(
      listagemUsuarios.filter(function filterByID(obj) {
        if ("id" in obj && obj.id !== idUsuario.id) {
          return true;
        } else {
          return false;
        }
      })
    )
    handleClose();
  }

  return (
    <div>
      <div onClick={handleClickOpen} className='botao-excluir'>
        <Tooltip TransitionComponent={Zoom} title="Deletar usuário" arrow>
          <IconButton>
            <BiTrash size={20} color='#db0404'/>
          </IconButton>
        </Tooltip>
      </div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Excluir</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Você tem certeza que deseja excluir esse usuário?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleExcluirUsuario}>excluir</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default DeletarUsuario;