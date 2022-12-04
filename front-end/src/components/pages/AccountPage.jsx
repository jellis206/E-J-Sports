import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Modal, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { attemptDeleteUser } from '../../services/delete.service';
import { serverCodes } from '../../services/server-codes.enum';
import { checkValidity } from '../../services/server-instance.service';
import { attemptUpdateUser } from '../../services/update-user.service';
import { useUserStore } from '../../services/user-store';
import { UpdateUserSchema } from '../../validation/login-schemas';
import './styles.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const inputStyle = {
  marginTop: '8px',
};

const buttonStyle = {
  width: '50%',
  alignSelf: 'center'
};

export default function AccountPage() {
  const userState = useUserStore();
  const navigate = useNavigate();
  const [ userProp, setUserProp ] = useState('');
  const [ open, setOpen ] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(UpdateUserSchema) });

  const submitForm = async (data) => {
    const changes = { type: userProp, value: data[ userProp ] };
    const response = await attemptUpdateUser({ changes: changes, user: userState });
    if (checkValidity(response) === serverCodes.Good) {
      handleClose();
      userState.signUserIn(response.data.user);
    }
    reset();
  };

  const logOut = () => {
    userState.logUserOut();
    navigate('/');
  };

  const deleteUser = async () => {
    const user = { name: userState.name, email: userState.email, password: userState.password };
    const response = await attemptDeleteUser(user);
    if (checkValidity(response) === serverCodes.Good) {
      logOut();
    }
  };

  return (
    <div className='row-2'>
      <MDBContainer>
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol>
                    <MDBCardText className="text-muted">
                      { userState.name }
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol>
                    <Button
                      className="mx-2" variant='contained'
                      onClick={ () => {
                        setUserProp('name');
                        handleOpen();
                      } }
                    >
                      Edit
                    </Button>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol>
                    <MDBCardText className="text-muted">
                      { userState.email }
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol>
                    <Button
                      className="mx-2" variant='contained'
                      onClick={ () => {
                        setUserProp('email');
                        handleOpen();
                      } }
                    >
                      Edit
                    </Button>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <Button
                      className="mx-2"
                      variant='contained'
                      onClick={ () => {
                        setUserProp('password');
                        handleOpen();
                      } }
                    >
                      Edit
                    </Button>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3" className='my-1'>
                    <MDBCardText>Account</MDBCardText>
                  </MDBCol>
                  <MDBCol>
                    <Button onClick={ logOut }
                      className="mx-2 my-1" variant='contained' color='primary'>
                      Logout
                    </Button>
                  </MDBCol>
                  <MDBCol>
                    <Button onClick={ deleteUser }
                      className="mx-2 my-1" variant='outlined' color='error'>
                      Delete
                    </Button>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer >

      <Modal
        open={ open }
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ style } >
          <form
            style={ formStyle }
            onSubmit={ handleSubmit(submitForm) }>
            <TextField
              style={ inputStyle }
              type={ userProp } label={ userProp }
              variant="outlined"
              { ...register(userProp) } />
            { userProp === 'password' && (
              <TextField
                style={ inputStyle }
                type={ userProp }
                label='confirm password'
                variant="outlined"
                { ...register('confirmPassword') } />
            ) }
            <Button
              style={ buttonStyle }
              className='my-2'
              variant='contained' type='submit'>Submit</Button>
          </form>
        </Box>
      </Modal>
    </div >
  );
}
