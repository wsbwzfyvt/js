import { Injectable } from '@nestjs/common';

@Injectable() //providers
export class usuarioRepository {
  private usuarios = [];
  async salvar(usuario) {
    this.usuarios.push(usuario);
  }
  async lista() {
    return this.usuarios;
  }

  async existeEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario !== undefined;
  }
}