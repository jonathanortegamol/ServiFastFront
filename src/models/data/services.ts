import { Service } from "../service";
import { categories } from "./categories";
export const services: Service[] = [
  {
    id: '1',
    title: 'Formateo computadores',
    qualification: 4.5,
    price: 20,
    description: 'Se ofrece el formateo de computadores con el mismo sistema operativo de Windows y configuración del sistema operativo desde cero.',
    category: categories[2].name,
    imgUrl: "https://picsum.photos/id/860/536/354.jpg?grayscale&blur=1"
  },
  {
    id: '2',
    title: 'Diseño de página web',
    qualification: 4.0,
    price: 20,
    description: 'Diseño de página web personalizada de acuerdo a los requerimientos en tiempo record.',
    category: categories[2].name,
    imgUrl: "https://picsum.photos/id/870/536/354.jpg"

  },
  {
    id: '3',
    title: 'Limpieza y mantenimiento de computadores',
    qualification: 4.5,
    price: 20,
    description: 'Mantenimiento del hardware del computador, cambio de paste térmica y limpieza completa.',
    category: categories[2].name,
    imgUrl: "https://picsum.photos/id/871/536/354.jpg"

  },
  {
    id: '4',
    title: 'Clases particulares de Matemática',
    qualification: 4.5,
    price: 20,
    description: 'Resolución de problemas y explicación a estudiantes de colegio y universidad ',
    category: categories[1].name,
    imgUrl: "https://picsum.photos/id/872/536/354.jpg"

  }
]