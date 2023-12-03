import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/app/thunks';
import { AppLayout } from '../layout/AppLayout';

export const AppPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.app );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <AppLayout>
      
      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }


      <IconButton
        onClick={ onClickNewNote }
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </AppLayout>
  )
}
