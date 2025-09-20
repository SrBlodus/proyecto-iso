import { Component, signal } from '@angular/core';

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

  // Función para abrir/cerrar menú
  toggleMenu() {
    this.menuAbierto.update(estado => !estado);
  }

  // Función para limpiar chat
  limpiarChat() {
    this.mensajes.set([]);
    this.mostrarBienvenida.set(true);
    this.menuAbierto.set(false); // Cerrar menú después de limpiar
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
      
      // Simular respuesta del backend
      this.simularRespuestaBackend();
    }
  }

  // Simular respuesta del backend
  private simularRespuestaBackend() {
    setTimeout(() => {
      this.mensajes.update(msgs => [...msgs, {
        tipo: 'sistema',
        texto: '¡Hola! Recibí tu mensaje. Por ahora es una respuesta simulada.',
        timestamp: new Date()
      }]);
    }, 1000);
  }
}