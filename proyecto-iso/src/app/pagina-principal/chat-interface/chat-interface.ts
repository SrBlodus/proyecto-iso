import { Component, signal } from '@angular/core';
import { ChatApiService } from '../services/chat-api';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.html',
  standalone: false,
  styleUrl: './chat-interface.css'
})
export class ChatInterface {
  // Control de estado: true = bienvenida, false = chat
  mostrarBienvenida = signal(true);
  
  // Control del menú desplegable
  menuAbierto = signal(false);
  
  // Texto que escribe el usuario
  textoUsuario = signal('');
  
  // Historial de mensajes del chat
  mensajes = signal<any[]>([]);

  // Inyectar el servicio de API
  constructor(private chatApiService: ChatApiService) {}

  // Función para abrir/cerrar menú
  toggleMenu() {
    this.menuAbierto.update(estado => !estado);
  }

  // Función para limpiar chat
  limpiarChat() {
    this.mensajes.set([]);
    this.mostrarBienvenida.set(true);
    this.menuAbierto.set(false);
  }

  // Función para enviar mensaje 
  enviarMensaje() {
    const texto = this.textoUsuario();
    if (texto.trim()) {
      // Cambiar a vista de chat
      this.mostrarBienvenida.set(false);
      
      // Agregar mensaje del usuario al historial
      this.mensajes.update(msgs => [...msgs, { 
        tipo: 'usuario', 
        texto: texto,
        timestamp: new Date() 
      }]);
      
      // Limpiar input
      this.textoUsuario.set('');
      
      // ENVIAR AL BACKEND REAL
      this.enviarAlBackend(texto);
    }
  }

  // Nueva función para enviar al backend real
  private enviarAlBackend(url: string) {
    this.chatApiService.enviarUrl(url).subscribe({
      next: (respuesta) => {
        // Éxito: agregar respuesta del backend
        this.mensajes.update(msgs => [...msgs, {
          tipo: 'sistema',
          texto: 'Respuesta del backend: ' + JSON.stringify(respuesta),
          timestamp: new Date()
        }]);
      },
      error: (error) => {
        // Error: mostrar que no se pudo conectar
        this.mensajes.update(msgs => [...msgs, {
          tipo: 'sistema',
          texto: 'Error: No se pudo conectar al backend',
          timestamp: new Date()
        }]);
        console.error('Error al enviar URL:', error);
      }
    });
  }
}