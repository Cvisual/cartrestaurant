import React, { FC, PropsWithChildren } from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


interface ModalProps {
  title?: string;
  open: boolean;
  children: React.ReactNode;
  
  //Methods
  onClose?: () => void;
  
}


export const ModalSimple:FC<PropsWithChildren<ModalProps>> = ({ title, children, open, onClose }) => {        

  return (
    <Dialog aria-labelledby="customized-dialog-title" open={open}>       
      <div 
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%"
        }}
      >
      <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      </div>
      <DialogContent>
        { children }
      </DialogContent>        
    </Dialog>
  )
}