import { Body, Controller, Get, Post } from '@nestjs/common';
import { usuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: usuarioRepository) {}
  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    await this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.lista();
  }
}
