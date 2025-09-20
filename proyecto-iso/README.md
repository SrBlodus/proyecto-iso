#  Verificador de Noticias - Frontend Angular

Una aplicación web moderna para verificar la veracidad de noticias mediante inteligencia artificial. Interfaz de chat intuitiva similar a ChatGPT para una experiencia de usuario óptima.

##  Tabla de Contenidos

- [🎯 Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [⚡ Inicio Rápido](#-inicio-rápido)
- [🐳 Docker](#-docker)
- [🔧 Configuración](#-configuración)
- [📱 Uso](#-uso)
- [🏗️ Arquitectura](#️-arquitectura)
- [🚀 Desarrollo](#-desarrollo)
- [📡 API](#-api)
- [🤝 Contribuir](#-contribuir)

## 🎯 Características

- **Interfaz tipo Chat**: Experiencia similar a ChatGPT/Claude
- **Verificación de URLs**: Envía enlaces de noticias para verificar su veracidad
- **Respuestas en tiempo real**: Procesamiento inmediato de solicitudes
- **Diseño responsive**: Funciona en desktop y móviles
- **Menú desplegable**: Acceso rápido a configuraciones
- **Fondo personalizable**: Interfaz visualmente atractiva
- **Dockerizado**: Fácil despliegue en cualquier entorno

## 🛠️ Tecnologías

- **Framework**: Angular 20.3.2
- **Lenguaje**: TypeScript 5.9.2
- **Estilos**: CSS3 con animaciones personalizadas
- **HTTP Client**: Angular HttpClient
- **Containerización**: Docker
- **Arquitectura**: Módulos tradicionales (no standalone)

## ⚡ Inicio Rápido

### Prerrequisitos
- Node.js 20+ 
- Docker (opcional)
- Git

### 🚀 Instalación Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/proyecto-iso.git
cd proyecto-iso

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
ng serve --port 5678

# 4. Abrir navegador
# http://localhost:5678
```

## 🐳 Docker

### Ejecutar con Docker (Recomendado)

```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/proyecto-iso.git
cd proyecto-iso

# 2. Construir imagen
docker build -t angular-chat-app .

# 3. Ejecutar contenedor  
docker run -p 5678:5678 angular-chat-app

# 4. Abrir navegador
# http://localhost:5678
```

### Docker Compose (Opcional)

```bash
# Ejecutar con docker-compose
docker-compose up -d

# Detener
docker-compose down
```

## 🔧 Configuración

### Configuración de API

Editar `src/app/core/config/api-config.ts`:

```typescript
export const API_CONFIG = {
  // Cambiar por tu URL de backend
  BASE_URL: 'http://localhost:3001',
  
  ENDPOINTS: {
    PROCESS_URL: '/verificar'
  },
  
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};
```

### Personalizar Puerto

Modificar `angular.json`:
```json
"serve": {
  "builder": "@angular/build:dev-server",
  "options": {
    "port": 5678
  }
}
```

### Cambiar Fondo

Reemplazar imagen en `public/fondo-chat.jpg` y actualizar CSS:
```css
background-image: url('/tu-imagen.jpg');
```

## 📱 Uso

### 1. Pantalla de Bienvenida
- Introduce una URL de noticia
- Click en "Enviar" o presiona Enter

### 2. Vista de Chat  
- Los mensajes aparecen en tiempo real
- Mensajes del usuario 
- Respuestas del sistema 

### 3. Menú de Opciones
- Click en el engranaje (⚙️) superior derecho
- Opciones: Panel Admin, Configuración, Limpiar Chat

## 🏗️ Arquitectura

### Estructura de Carpetas
```
src/app/
├── core/
│   ├── config/
│   │   └── api-config.ts       # Configuración API
│   └── services/
├── pagina-principal/
│   ├── chat-interface/         # Componente principal
│   ├── services/
│   │   └── chat-api.ts # Servicio API
│   └── pagina-principal-module.ts
└── panel-administrativo/       # Futuras funcionalidades
```

### Flujo de Datos
```
Usuario → Chat Interface → Chat API Service → Backend API
      ←                 ←                   ←
```

## 🚀 Desarrollo

### Comandos útiles

```bash
# Desarrollo
npm start                    # ng serve --port 5678
npm run build               # Construir para producción
npm run test                # Ejecutar tests

# Docker
docker build -t angular-chat-app .
docker run -p 5678:5678 angular-chat-app

# Generar componentes
ng generate component nombre-componente
ng generate service nombre-servicio
```

### Variables de Entorno

Configurar en `src/environments/`:

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3001'
};
```

## 📡 API

### Esquema de Request

```json
POST /verificar
{
  "url": "https://ejemplo.com/noticia"
}
```

### Esquema de Response

```json
{
  "label": "Verdadero",
  "confianza": 0.86,
  "fiabilidad_fuente": "Media", 
  "evidencias": [
    {
      "titulo": "Fuente oficial...",
      "snippet": "Extracto relevante...",
      "url": "https://fuente-oficial.com"
    }
  ]
}
```

## 🔄 Estados de la Aplicación

| Estado | Descripción | Vista |
|--------|-------------|--------|
| `mostrarBienvenida: true` | Pantalla inicial | Logo + Input grande |
| `mostrarBienvenida: false` | Chat activo | Historial + Input chat |
| `menuAbierto: true` | Menú desplegable | Opciones visibles |

## 🎨 Personalización

### Colores de Mensajes
```css
/* Usuario */
.mensaje.usuario {
  background: #007bff;  /* Azul */
}

/* Sistema */  
.mensaje.sistema {
  background: #f8f9fa;  /* Gris claro */
  border-left: 3px solid #28a745;  /* Verde */
}
```

### Animaciones
```css
@keyframes aparecer {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 🚧 Roadmap

- [ ] Integración completa con backend
- [ ] Panel administrativo funcional
- [ ] Historial de verificaciones
- [ ] Exportar reportes
- [ ] Notificaciones push
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👥 Equipo

- **Frontend**: Angular + TypeScript
- **Backend**: [Pendiente - En desarrollo por el equipo]
- **Containerización**: Docker
- **Deploy**: [Por definir]
