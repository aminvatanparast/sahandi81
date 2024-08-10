import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { sendOtp, verifyOtp } from '../../../apis/auth';
import { useDispatch } from 'react-redux';
import { toggleAuth } from '../../../store/user/user.reducer';
import { afterAuthRoutes } from '../../../configs/routes.js';


const Otp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const { msisdn } = state || {};

  async function handleSubmit(event) {
    event?.preventDefault();
    setLoading(true);

    verifyOtp(msisdn, otp)
      .then((res) => {
        dispatch(toggleAuth({ ...res }));
        navigate(afterAuthRoutes.dashboard);
      })
      .finally(() => setLoading(false));
  }


  return (
    <div>
      {"dfhgdfg"}
    </div>
  );
};

export default Otp;
