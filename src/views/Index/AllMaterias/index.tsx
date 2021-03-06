import { motion } from "framer-motion";
import { MateriaContainer, Container } from './style'
import Materia from './materia'
import Link from "next/link";
import materias from '../../../data/materias.json'
import AnimationInView from '../../../components/AnimationInView'

export default function AllMateriaView() {

  return (
    <Container>
      <AnimationInView>
        <h1 className='title'>Matérias</h1>
      </AnimationInView>
      <MateriaContainer>
        {materias.array.map((materia, i) => (
          <Materia materia={materia.slug} key={i} icon={materia.icon}>{materia.title}</Materia>
        ))}
      </MateriaContainer>
    </Container>
  );
};
