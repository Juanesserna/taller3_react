# Venta de Vinilos

Aplicación web de comercio electrónico para la venta de vinilos construida con React y Material UI. Permite explorar un catálogo de discos, agregar productos al carrito de compras y guardar favoritos, con una interfaz oscura inspirada en la estética del vinilo.

---

## Descripción

**Venta de Vinilos** es un taller académico desarrollado en React que simula una tienda online de discos de vinilo. La aplicación cuenta con navegación por rutas, gestión de estado global mediante Context API, formulario de autenticación con validaciones y una sección interactiva de hooks de React con ejemplos visuales en tiempo real.

---

## Características Principales

- **Catálogo de productos** con cards de vinilos, imagen, artista, precio y acciones de compra/favorito
- **Carrito de compras** — agrega productos, acumula cantidades y muestra el total en tiempo real
- **Lista de favoritos** — guarda vinilos sin duplicados y permite eliminarlos
- **Contador en el header** — badges dinámicos sobre los iconos de "Mis compras" y "Mis favoritos"
- **Formulario de inicio de sesión** con validación de correo (regex) y contraseña (mínimo 6 caracteres), con toggle de visibilidad
- **Sección de Hooks** — demostración interactiva de `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, `useReducer` y `useContext`
- **Diseño responsive** — menú hamburguesa en móvil, grids adaptativos por breakpoint
- **Navegación con React Router** usando `HashRouter` y `NavLinks` activos

---

## Interfaz Gráfica

La interfaz sigue una estética **dark con acento vino oscuro**, coherente en toda la aplicación:

| Elemento | Valor |
|---|---|
| Fondo principal | `#000000` |
| Color de cards | `#2c0101` / `#3d0000` |
| Acento / título | `#ff5722` |
| Botones de acción | `#000000` con texto blanco |
| Texto principal | `#ffffff` |
| Texto secundario | `rgba(255,255,255,0.6)` |
| Tipografía | Arial, sans-serif |

## Vistas disponibles

| Ruta | Vista |
|---|---|
| `/` | Página de inicio con hero, colección y acordeones |
| `/article` | Catálogo de vinilos con botones Comprar / Favorito |
| `/offers` | Sección de hooks de React con ejemplos interactivos |
| `/myaccount` | Formulario de inicio de sesión con validaciones |
| `/mybuys` | Lista de productos comprados con total acumulado |
| `/myfavorities` | Lista de vinilos guardados como favoritos |

---

## Arquitectura del Proyecto

```
src/
├── App.jsx                          # Entrada principal, rutas y ShopProvider
├── features/
│   ├── context/
│   │   └── ShopContext.jsx          # Context API global (compras y favoritos)
│   ├── layout/
│   │   └── components/
│   │       ├── Header.jsx           # AppBar con badges y menú responsive
│   │       ├── Footer.jsx           # Pie de página
│   │       └── Content.jsx          # Página de inicio
│   ├── view/
│   │   └── components/
│   │       ├── Article.jsx          # Catálogo de productos
│   │       └── Offers.jsx           # Grid de hooks de React
│   ├── auth/
│   │   └── components/
│   │       ├── Myaccount.jsx        # Login con validaciones
│   │       ├── Mybuys.jsx           # Mis compras
│   │       └── Myfavorities.jsx     # Mis favoritos
│   └── hooks/
│       └── AllHooks.jsx             # Todos los hooks en un solo archivo
public/
└── img/                             # Imágenes de productos y hero
```

## Flujo de datos

```
ShopProvider (App.jsx)
    ├── Header.jsx         → lee compras.length y favoritos.length (badges)
    ├── Article.jsx        → llama agregarCompra() y agregarFavorito()
    ├── Mybuys.jsx         → lee compras[], llama eliminarCompra()
    └── Myfavorities.jsx   → lee favoritos[], llama eliminarFavorito()
```

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| React 18 | Framework principal |
| Material UI (MUI) v5 | Componentes y sistema de diseño |
| React Router DOM v6 | Navegación con `HashRouter` |
| Context API | Estado global de carrito y favoritos |
| Vite | Bundler y servidor de desarrollo |

---

## Autor

| Campo | Detalle |
|---|---|
| **Nombre** | Juan Esteban Serna |
| **Programa** | Tecnología en Análisis y Desarrollo de Software |
| **Institución** | SENA |
| **Ficha / Trimestre** | Trimestre 3 — 2026 |
| **GitHub** | [github.com/Juanesserna/taller3_react](https://github.com/Juanesserna/taller3_react) |

---

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/Juanesserna/taller3_react.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```