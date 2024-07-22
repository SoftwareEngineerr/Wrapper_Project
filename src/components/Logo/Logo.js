import { Link } from 'react-router-dom';
// import LogoDark from '/images/logos/Logo.png';
import { styled } from '@mui/material';
import { useSelector } from 'react-redux';


const Logo = (props) => {
  const url = useSelector((state)=>state.Api.imageServer)
  const WebSrn = localStorage.getItem('WebSrn')

  const LinkStyled = styled(Link)(() => ({
    height: '50px',
    // width: props.width ? props.width : '290px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center'
  }));
  return (
    <LinkStyled>
      <img src={`./images/Logo.png`}   />
    </LinkStyled>
  )
};

export default Logo;
