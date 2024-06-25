import { Service } from './service';
import { ProfessionalInfo } from './professionalInfo';
import { Profession } from './profession';


export interface User {
  id: string;
  name: string;
  username: string;
  phone: string;
  email: string;
  status: string;
  password: string;
  rol: string;
  from: Date;
  profession?: Profession;
  professionalInfo?: ProfessionalInfo;
  services?: Service[];
  infoService?: string;
  img?: string;
  favoriteServices?: Service[];
}

export const userToJSON = (user: User): string => {
  return JSON.stringify(user);
};

export const userFromJSON = (json: string): User => {
  const obj = JSON.parse(json);
  return {
    id: obj.id,
    name: obj.name,
    username: obj.username,
    phone: obj.phone,
    status: obj.status,
    password: obj.password,
    rol: obj.rol,
    from: new Date(obj.from),
    email: obj.email,
  };
};
