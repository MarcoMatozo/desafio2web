import React from 'react';
import './ListarVagas.css'; // Importando o arquivo CSS

const ListarVagas = ({ formData, setShowListarVagas }) => {
  // Dados fictícios das vagas de estacionamento
  const vagas = [
    { numero: 1, disponivel: true },
    { numero: 2, disponivel: false },
    { numero: 3, disponivel: true },
    { numero: 4, disponivel: false },
    { numero: 5, disponivel: true },
    { numero: 6, disponivel: true },
    { numero: 7, disponivel: false },
    { numero: 8, disponivel: true },
    { numero: 9, disponivel: false },
    { numero: 10, disponivel: true }
  ];

  return (
    <div className="list-container"> {/* Adicionando a classe CSS */}
      <h2>Listagem de Vagas Disponíveis</h2>
      <table>
        <thead>
          <tr>
            <th>Número da Vaga</th>
            <th>Disponível</th>
          </tr>
        </thead>
        <tbody>
          {vagas.map((vaga, index) => (
            <tr key={index}>
              <td>{vaga.numero}</td>
              <td>{vaga.disponivel ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Vaga cadastrada:</td>
          </tr>
          <tr>
            <td>Placa do veículo:</td>
            <td>{formData.placa}</td>
          </tr>
          <tr>
            <td>Nome do proprietário:</td>
            <td>{formData.proprietario}</td>
          </tr>
          <tr>
            <td>Número do apartamento:</td>
            <td>{formData.numeroApartamento}</td>
          </tr>
          <tr>
            <td>Bloco do apartamento:</td>
            <td>{formData.blocoApartamento}</td>
          </tr>
          <tr>
            <td>Modelo do veículo:</td>
            <td>{formData.modeloVeiculo}</td>
          </tr>
          <tr>
            <td>Cor do veículo:</td>
            <td>{formData.corVeiculo}</td>
          </tr>
          <tr>
            <td>Número da vaga de estacionamento:</td>
            <td>{formData.numeroVaga}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setShowListarVagas(false)}>Voltar ao Cadastro</button>
    </div>
  );
};

export default ListarVagas;
