

🍽️ Sabor Cuscatleco - Landing Page de Gastronomía Salvadoreña

¡Bienvenido al repositorio oficial de **Sabor Cuscatleco**! Este proyecto consiste en una landing page responsiva de una sola página desarrollada desde cero para promover y exaltar el arte culinario tradicional de El Salvador. El desarrollo incluye la implementación avanzada de semántica HTML5, estilos modernos con CSS Grid y Flexbox, interactividad mediante la manipulación del DOM y validación estricta de formularios con JavaScript puro (Vanilla JS).

---

## 🎯 Propósito del Proyecto
El objetivo principal de esta aplicación es ofrecer una experiencia de usuario inmersiva que conecte a los comensales con la riqueza gastronómica cuscatleca (pupusas tradicionales, sopa de gallina india y talleres interactivos), cumpliendo rigurosamente con los estándares web modernos, accesibilidad y diseño adaptativo a dispositivos móviles.

---

## 📋 Secciones Obligatorias Implementadas

De acuerdo con los requerimientos técnicos fijados en la rúbrica de evaluación, el sitio cuenta con las siguientes secciones en un único archivo de flujo continuo:

1. **Hero Section (Portada):** Imagen de impacto a pantalla completa mediante el uso de un CDN estable, acompañada de un título jerárquico (`<h1>`) con sombras de realce, un subtítulo descriptivo de la propuesta de valor y un botón de llamada a la acción (CTA) estilizado.
2. **Navbar (Navegación Fija):** Barra superior de navegación con posición fija (`position: fixed`) que permanece visible durante el scroll. Incluye enlaces de anclaje interno para una navegación fluida (`scroll-behavior: smooth`) y un botón de menú hamburguesa completamente funcional en entornos móviles.
3. **Nosotros:** Reseña histórica y conceptual del negocio con textos e información 100% original, omitiendo el uso de texto de relleno plano (*cero Lorem Ipsum*).
4. **Servicios (Menú Especial):** Estructuración de tarjetas (cards) informativas maquetadas con **CSS Grid Avanzado** (`repeat(auto-fit, minmax(300px, 1fr))`), adaptándose dinámicamente al ancho del viewport. Cada tarjeta incorpora imágenes optimizadas mediante la propiedad `object-fit: cover` y efectos de microinteracción en el evento `:hover`.
5. **Formulario de Reservas:** Sección interactiva para la captación de clientes con campos de texto, correo electrónico y numéricos, procesados en tiempo real.
6. **Footer:** Pie de página institucional que unifica derechos de autor, año de vigencia (2026), créditos de desarrollo y perfiles simulados de redes sociales.

---

## 🛠️ Tecnologías y Criterios Técnicos Utilizados

* **HTML5 Semántico:** Uso adecuado de etiquetas como `<header>`, `<nav>`, `<section>`, `<article>` y `<footer>` para un correcto SEO y accesibilidad.
* **CSS3 Avanzado:**
  * Uso de **CSS Grid** y **Flexbox** para la distribución inteligente de los elementos.
  * Técnicas de diseño elástico y breakpoints con **Media Queries** para asegurar un comportamiento responsive impecable en smartphones, tablets y pantallas de escritorio.
  * Efectos de transición suavizados (`transition`) y elevación tridimensional sobre el eje Y (`transform: translateY`) para enriquecer la experiencia visual.
* **JavaScript (Vanilla JS):**
  * **Manipulación del DOM:** Apertura y cierre interactivo de la barra de navegación en entornos móviles mediante el intercambio de clases dinámicas (`classList.toggle('active')`).
  * **Validación Lógica de Formularios:** Intercepción del evento `submit` para prevenir envíos erróneos (`preventDefault()`), control de campos vacíos mediante saneamiento de strings (`.trim()`), validación de patrones de correo estructurado por medio de Expresiones Regulares (RegEx) y restricciones aritméticas en el contador de comensales.

---

## 🚀 Control de Versiones y Despliegue

* **Git & GitHub:** El desarrollo se encuentra documentado de manera secuencial a través de un historial lógico de confirmaciones (*commits*) que evidencian la evolución y maquetación progresiva de la arquitectura del software.
* **GitHub Pages:** La aplicación se encuentra desplegada con éxito y en producción dentro del servicio de hosting gratuito provisto por la plataforma.

---
*Desarrollado con fines educativos y de evaluación académica  por Nelson Peña— 2026.*
"""

