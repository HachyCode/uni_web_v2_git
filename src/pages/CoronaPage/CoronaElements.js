import styled from 'styled-components';
import { Link as Link } from 'react-router-dom';

export const CoronaCard = styled.div`
background: #fff;
height:auto;
`;
export const Text = styled.div`
padding: 10px 50px;
font-size: 1.2rem;
`;
export const BulPoints = styled.div`
padding: 10px 50px;
display: flex;
`;
export const Links = styled(Link)`
padding: 10px 50px;
font-size: 1.2rem;
display: flex;
font-weight: 800;
color: #fff;
font-weight: 800;
font-size: 1.5rem;

&:hover {
    color: #b2dddf;
    transition: 0.2s ease-in-out;
}
`;
export const SubTitle = styled.div`
padding: 10px 50px;
font-weight: 800;
font-size: 1.4rem;
`;
export const MainTitle = styled.div`
text-align: center;
font-size: 3rem;
padding: 50px;
text-decoration: underline;
text-decoration-color: #b2dddf;
`;
export const PDFDWLOD = styled.div`
display: flex;
background: #005c6e;
height: 100px;
align-items: center;
`;
export const Important = styled.div`
padding: 10px 50px;
font-size: 2rem;
font-weight: 800;
background: #f08575;
`;
export const Bul = styled.div`
padding: 0 10px;
`;