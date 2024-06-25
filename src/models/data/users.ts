import { SkillLevel } from '../skill';
import { User } from '../user';
import { professions } from "./professions";
import { services } from './services';
const avatar = "https://i.pravatar.cc/150?u="

export const users: User[] = [
  {

    id:'1',
    name: 'Mateo Once',
    // lastname: 'Once',
    username: 'Mateo11oc',
    phone: '979140623',
    status: 'Activo',
    email: 'mateoonce2002@gmail.com',
    password: '1234',
    rol: 'Cliente',
    from: new Date('2020-03-03'),
    favoriteServices: [services[1]],
  },
  {

    id:'2',
    name: 'Belen Sarmiento',
    // lastname: 'Sarmiento',
    username: 'Belu1',
    phone: '979140623',
    status: 'Activo',
    email: 'belu@gmail.com',
    password: '1234',
    rol: 'Administrador', 
    from: new Date('2020-03-03'),
    favoriteServices: [],

  },
  {

    id:'3',
    name: 'Jonathan Ortega',
    // lastname: 'Ortega',
    username: 'JOrtega',
    phone: '979140623',
    status: 'Activo',
    email: 'ortega@gmail.com',
    password: '1234',
    rol: 'Vendedor',
    profession: professions[2],
    from: new Date('2020-03-03'),
    favoriteServices: [services[2], services[1]],
    professionalInfo: {
      description: 'Ingeniero especializado en backend',
      skills: [
        {
          name: 'Flutter',
          level: SkillLevel.AVANZADO
        },
        {
          name: 'React',
          level: SkillLevel.INTERMEDIO
        },
        
      ]
    },
    infoService: 'Ofrezco servicios relacionados con software y hardware de computadores',
    img: avatar+"jonathan"
  },
  {

    id:'4',
    name: 'Romina Quezada',
    // lastname: 'Ortega',
    username: 'romiq',
    phone: '979140623',
    status: 'Activo',
    email: 'romi@gmail.com',
    password: '1234',
    rol: 'Vendedor',
    profession: professions[0],
    from: new Date('2020-03-03'),
    professionalInfo: {
      description: 'Profesora con más de 10 años de experiencia',
      skills: [
        {
          name: 'Resolución de problemas',
          level: SkillLevel.AVANZADO
        },
        
      ]
    },
    infoService: 'Ofrezco clases particulares a domicilio o por zoom para colegio y universidad ',
    img: avatar+"Romina"
  },
]