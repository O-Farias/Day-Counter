import React, { useState, useEffect } from "react";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [inputDays, setInputDays] = useState("");
  const [error, setError] = useState("");
  const [record, setRecord] = useState(0);

  useEffect(() => {
    // Carregar o estado inicial do localStorage
    const savedDays = localStorage.getItem("days");
    const savedRecord = localStorage.getItem("record");
    if (savedDays) {
      setDays(parseInt(savedDays, 10));
    }
    if (savedRecord) {
      setRecord(parseInt(savedRecord, 10));
    }

    // Incrementar o contador a cada 24 horas
    const interval = setInterval(() => {
      setDays((prevDays) => prevDays + 1);
    }, 86400000); // Atualiza a cada 24 horas

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Salvar o estado no localStorage sempre que mudar
    localStorage.setItem("days", days);
    // Atualizar o recorde se o contador atual exceder o recorde salvo
    if (days > record) {
      setRecord(days);
      localStorage.setItem("record", days);
    }
  }, [days, record]);

  const handleInputChange = (event) => {
    setInputDays(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const daysValue = parseInt(inputDays, 10);
    if (isNaN(daysValue) || daysValue < 0) {
      setError("Por favor, insira um número válido de dias.");
    } else {
      setDays(daysValue);
      setError("");
    }
    setInputDays("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full text-center p-8 bg-gray-800 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-bold mb-4 font-poppins">
          Estamos a {days} dias sem codar.
        </h1>
        <h2 className="text-xl mb-4">Nosso recorde é: {record} dias</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-4 space-y-4"
        >
          <input
            type="number"
            value={inputDays}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            placeholder="Insira o número de dias"
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Atualizar Contador
            </button>
            <button
              onClick={() => setDays(0)}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Resetar Contador
            </button>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Counter;
