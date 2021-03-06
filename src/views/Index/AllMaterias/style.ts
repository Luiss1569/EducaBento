import { motion } from "framer-motion";
import styled from "styled-components";

export const MateriaContainer = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  gap: 8%;

  @media screen and (max-width: 1024px) {
    width:95%;
  }

  @media screen and (max-width: 767px) {
    width:99%;
  }
`

export const Container = styled.div`
 background-image: url(//www.toptal.com/designers/subtlepatterns/patterns/symphony.png);
  background-position: bottom;
  animation: 10s linear 0s infinite bp;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px){
    animation: none;
  }

@keyframes bp {
  from {
    background-position:  198px 0;
  }

  to {
    background-position:  0 198px;
  }
}


`

interface MateriaInterface {
  materia: string;
  icon: string;
}

const MateriaDiv = styled(motion.div).attrs((props: MateriaInterface) => {
  materia: props.materia;
  icon: props.icon
}) <MateriaInterface>`
  background-color: ${props => props.theme.colors.material[props.materia]}
`;

export const Materia = styled(MateriaDiv)`
  width:19%;
  border-radius:45px 25px 25px 20px;
  height: clamp(70px, 10vh + 50px, 160px);
  margin-bottom: 8%;
  cursor: pointer;

   @media screen and (max-width: 1024px) {
    width:20%;
     margin-bottom: 80px;
     height: clamp(70px,10vh + 70px,160px)
  }

   @media screen and (max-width: 768px) {
    width:40%;
    margin-bottom: clamp(30px, 12%, 150px);
    height: clamp(75px, 12vh, 150px)
  }

  @media screen and (max-width: 280px) {
    width:80%;
    margin-bottom: 40px;
    height: clamp(140px, 7vh, 150px)
  }

  h2{
    color: ${props => props.theme.colors.title};
    font-family: 'Philosopher', sans-serif;
    font-size: clamp(26px, 2vw + 5px , 35px);
    text-align: center;
    margin-top: 5px;
    transition: 1s;

    @media screen and (max-width: 767px) {
    font-size: clamp(20px, 2vw + 10px , 35px);
    }

    @media screen and (max-width: 280px) {
     font-size: clamp(26px, 2vw + 10px , 35px);
    }
  }`

  export const ImageContainer = styled(motion.div)`
    width: 60%;
    margin: auto;

     @media screen and (max-width: 1200px){
      width: 60%
     }
     @media screen and (max-width: 768px){
      width: 60%
     }
  `


