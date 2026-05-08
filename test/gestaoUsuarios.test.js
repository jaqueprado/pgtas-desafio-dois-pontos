import { efetuarLogin } from '../src/gestaoUsuarios.js';
import assert from 'node:assert';


describe('Testando Funções de Gestão de Usuários', () => {

  it('Deve permitir o login com credenciais válidas', () => {
    const resultado = efetuarLogin("mariana.santos@example.com", "senhaSegura123");
    assert.equal(resultado, "Login realizado com sucesso! Olá, Mariana Santos.");
  });

  it('Deve avisar quando o usuário está expirado', () => {
    const resultado = efetuarLogin("holiveira.expirado@example.com", "my@pass789");
    assert.equal(resultado, "As credenciais expiraram. Renove suas credenciais");
  });

  it('Deve retornar erro para e-mail inexistente', () => {
    const resultado = efetuarLogin("fantasma@email.com", "123456");
    assert.equal(resultado, "Credenciais incorretas.");
  });

  it('Deve retornar erro para senha inválida de usuário existente', () => {
    const resultado = efetuarLogin("catarina.souza@example.com", "senha_errada_123");
    assert.equal(resultado, "Credenciais incorretas.");
  });

});