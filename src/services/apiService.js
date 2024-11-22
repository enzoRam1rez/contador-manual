import axios from 'axios';

const API_BASE_URL = 'https://ikcount.com/iklab/ikcount/api/counting/command';
const ACCESS_TOKEN = 'ZW56by5yYW1pcmV6czpBUElfS0VZQDY2NTFlZTVhODM0Zjk4MzE5ZDIxYmQ1YTcxY2Q0MTQyODk5OGZhZGJmNTkzYjVjYTdjNTAyMGI2NDFiOTY3YmQ5ZmJmMWI1NGQ3YjczMGEwNmYyYmZjZTUyMGQzMmM4OWQwOTc2Yjg2YThhNDg3ODgzOWU5OTBiMGY1ZWMwZjJiOklLTEFCMDA1';

export const updateCounter = async (command, quantity) => {
  console.log(`[API] Ejecutando comando: ${command}, cantidad: ${quantity}`);
  try {
    const response = await axios.post(
      `${API_BASE_URL}?atoken=${ACCESS_TOKEN}`,
      {
        type: command,
        quantity,
        client: 'DEMO001',
        location: 'DEMO001A1L1',
        mac_address: 'DEMO001A1L1Z1MC5',
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (!response.data || response.data.cod !== 200) {
      console.error('[API] Respuesta inesperada:', response.data);
      throw new Error('Respuesta de la API inválida');
    }

    console.log(`[API] Respuesta exitosa:`, response.data);
    return response.data;
  } catch (error) {
    console.error('[API] Error al interactuar con el servidor:', error.response || error);
    throw error;
  }
};
