const usuarios = [
  {
    id: 1,
    nome: "Mariana Santos",
    email: "mariana.santos@example.com",
    senha: "senhaSegura123",
    expirado: false
  },
  {
    id: 2,
    nome: "Heitor Oliveira",
    email: "holiveira.expirado@example.com",
    senha: "my@pass789",
    expirado: true // Este usuário está com o acesso expirado
  },
  {
    id: 3,
    nome: "Catarina Souza",
    email: "catarina.souza@example.com",
    senha: "mudar@2024",
    expirado: false
  }
];


export function encontrarUsuarioPorEmail(emailInformado) {
  // Percorrendo o vetor
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === emailInformado) {
      return usuarios[i]; // Se achou, retorna o objeto e para o loop
    }
  }
  return null; // Se terminou o loop e não achou nada, retorna null
}

export function efetuarLogin(email, senha) {
  const usuario = encontrarUsuarioPorEmail(email);

  // Se o usuário não existe ou a senha está errada
  if (!usuario || usuario.senha !== senha) {
    return "Credenciais incorretas.";
  }
  // Se achou e a senha está certa, mas a conta expirou
  if (usuario.expirado) {
    return "As credenciais expiraram. Renove suas credenciais";
  }
  // Se passou por tudo, sucesso!
  return `Login realizado com sucesso! Olá, ${usuario.nome}.`;
}
