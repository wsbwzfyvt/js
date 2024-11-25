import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { usuarioRepository } from './usuario.repository';
import { emailUnicoValidator } from './validacao/emailUnico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [usuarioRepository, emailUnicoValidator],
})
export class UsuarioModule {}
