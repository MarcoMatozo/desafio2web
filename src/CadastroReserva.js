import React, { useState } from 'react';
import './CadastroReserva.css'; // Importando o arquivo CSS
import ListarVagas from './ListarVagas';

const CadastroReserva = () => {
  const [showListarVagas, setShowListarVagas] = useState(false);
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    numeroApartamento: '',
    blocoApartamento: '',
    modeloVeiculo: '',
    corVeiculo: '',
    numeroVaga: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConsultarVagas = () => {
    setShowListarVagas(true);
  };

  const handleSalvar = () => {
    // Aqui você pode implementar a lógica para salvar os dados, se necessário
    console.log(formData);
    alert('Cadastro realizado com sucesso!');
  };

  const handleLimparDados = () => {
    setFormData({
      placa: '',
      proprietario: '',
      numeroApartamento: '',
      blocoApartamento: '',
      modeloVeiculo: '',
      corVeiculo: '',
      numeroVaga: ''
    });
  };

  return (
    <div className="form-container">
      {!showListarVagas ? (
        <div>
          <h2>Cadastro de Reserva</h2>
          <form>
            <label>
              Placa do veículo:
              <input type="text" name="placa" value={formData.placa} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Nome do proprietário:
              <input type="text" name="proprietario" value={formData.proprietario} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Número do apartamento:
              <input type="text" name="numeroApartamento" value={formData.numeroApartamento} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Bloco do apartamento:
              <input type="text" name="blocoApartamento" value={formData.blocoApartamento} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Modelo do veículo:
              <input type="text" name="modeloVeiculo" value={formData.modeloVeiculo} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Cor do veículo:
              <input type="text" name="corVeiculo" value={formData.corVeiculo} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Número da vaga de estacionamento:
              <input type="text" name="numeroVaga" value={formData.numeroVaga} onChange={handleInputChange} />
            </label>
            <br />
          </form>
          {/* Botões lado a lado no final da página */}
          <div className="button-container">
            <button type="button" onClick={handleSalvar}>Salvar</button>
            <button type="button" onClick={handleConsultarVagas}>Consultar Vagas</button>
            <button type="button" onClick={handleLimparDados}>Limpar Dados</button>
            </div>
        </div>
      ) : (
        <ListarVagas formData={formData} setShowListarVagas={setShowListarVagas} />
      )}
    </div>
  );
};

export default CadastroReserva;
