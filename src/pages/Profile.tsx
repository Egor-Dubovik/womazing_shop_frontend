import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from 'types/constants';

const Profile: FC = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate(ADMIN_ROUTE)}>open Admin panel</Button>
    </>
  );
});

export default Profile;
