import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { usuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class emailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: usuarioRepository) {}
  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const usuarioEmailExiste = await this.usuarioRepository.existeEmail(value);
    return !usuarioEmailExiste;
  }
  defaultMessage() {
    return 'Email já cadastrado';
  }
}

export const emailUnico = (opcoesDeValidacao: ValidationOptions) => {
  return (object: object, propriedade: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: emailUnicoValidator,
    });
  };
};
