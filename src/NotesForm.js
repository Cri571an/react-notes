import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


const NotesForm = ( {title, description, uptadeField, saveNote} ) => {
  return(
    <React.Fragment>
    <Grid item xs={12}>
      <TextField
      name='value'
      type="text"
      placeholder="Title for this note..."
      margin='normal'
      fullWidth
      onChange={uptadeField('title')}
      value={title}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
      placeholder="Start taking notes..."
      margin='normal'
      multiline //Convierte un imput a un texto
      rows='4'
      fullWidth
      onChange={uptadeField('description')}
      value={description}
      />
    </Grid>
    <Fab color='secondary' onClick={saveNote}>
      <Icon>edit_icon</Icon>
    </Fab>
    </React.Fragment>
  )
};

export default NotesForm;
