import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { emailUnico } from '../validacao/emailUnico.validator';

export class CriaUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'nao pode ser vazio' })
  nome: string;
  @IsEmail({}, { message: 'email invalido' })
  @IsNotEmpty({ message: 'nao pode ser vazio' })
  @emailUnico({ message: 'email ja cadastrado' })
  email: string;
  @MinLength(6)
  @IsNotEmpty({ message: 'nao pode ser vazio' })
  senha: string;
}
