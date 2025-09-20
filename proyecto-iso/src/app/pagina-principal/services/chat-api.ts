import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG, createChatRequest } from '../../core/config/api-config';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  constructor(private http: HttpClient) { }

  // Función para enviar URL al backend
  enviarUrl(url: string): Observable<any> {                   //Observable<any> → Devuelve la respuesta del backend
    // 1. Crear el JSON usando la configuración
    const requestBody = createChatRequest(url);
    
    // 2. URL completa del endpoint
    const fullUrl = API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.PROCESS_URL;
    
    // 3. Hacer la petición POST
    return this.http.post(fullUrl, requestBody, {
      headers: API_CONFIG.HEADERS
    });
  }
}