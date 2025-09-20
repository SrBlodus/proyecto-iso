// CONFIGURACIÓN CENTRALIZADA DE LA API
export const API_CONFIG = {
  // URL base del backend (cambiar cuando tengas el backend real)
  BASE_URL: 'http://localhost:3001',
  
  // Endpoints específicos
  ENDPOINTS: {
    PROCESS_URL: '/api/process-url'
  },
  
  // Headers por defecto
  HEADERS: {
    'Content-Type': 'application/json', //<-- te estoy enviando JSON
    'Accept': 'application/json'        //<-- respondeme en JSON
  }
};

// ESTRUCTURA DEL JSON QUE SE ENVÍA
//  AQUÍ PUEDES MODIFICAR FÁCILMENTE LO QUE SE ENVÍA 
export const CHAT_REQUEST_TEMPLATE = {
  url: '' // Se reemplazará con la URL del usuario
};

// Función para crear el request con la URL del usuario
export function createChatRequest(userUrl: string): any {
  return {
    ...CHAT_REQUEST_TEMPLATE,
    url: userUrl
  };
}


