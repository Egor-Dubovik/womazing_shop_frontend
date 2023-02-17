import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE } from 'types/constants';

const Profile: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(ADMIN_ROUTE)}>open Admin panel</Button>
    </div>
  );
};

export default Profile;
