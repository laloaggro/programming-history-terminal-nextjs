import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import TerminalHeader from '@/components/TerminalHeader';
import TerminalNavbar from '@/components/TerminalNavbar';
import CatalogSidebar from '@/components/CatalogSidebar';
import TerminalContent from '@/components/TerminalContent';
import CommandPrompt from '@/components/CommandPrompt';
import SubcategoryModal from '@/components/SubcategoryModal';

// Datos de hechos de programación
const factsData = [
  {
    date: "1 de enero",
    title: "Primer error informático",
    content: "En 1947, los ingenieros encontraron el primer error real en una computadora: una polilla atrapada en un relé de la computadora Harvard Mark II. De aquí proviene el término 'bug' en informática."
  },
  {
    date: "7 de enero",
    title: "Creación de COBOL",
    content: "En 1959, Grace Hopper ayudó a crear COBOL, un lenguaje de programación diseñado para ser legible y autodocumentado para aplicaciones empresariales."
  },
  {
    date: "15 de febrero",
    title: "Ada Lovelace",
    content: "Considerada la primera programadora del mundo, Ada Lovelace escribió el primer algoritmo destinado a ser procesado por la Máquina Analítica de Charles Babbage en 1843."
  },
  {
    date: "1 de marzo",
    title: "Creación de JavaScript",
    content: "En 1995, Brendan Eich creó JavaScript en solo 10 días mientras trabajaba en Netscape. Se convirtió en uno de los lenguajes de programación más utilizados."
  },
  {
    date: "1 de abril",
    title: "RFC del Día de los Inocentes",
    content: "El primero de abril es conocido por RFCs (Request for Comments) que son bromas, como el RFC 7919 que define el algoritmo de 'Recolección de Basura Infinita'."
  },
  {
    date: "22 de mayo",
    title: "Lanzamiento de Java",
    content: "Java 1.0 fue lanzado por Sun Microsystems en 1995. El lenguaje originalmente se llamaba Oak antes de ser renombrado a Java."
  },
  {
    date: "14 de junio",
    title: "Creación de Python",
    content: "Guido van Rossum lanzó Python al público en 1991. Lo nombró en honor al grupo de comedia británico Monty Python."
  },
  {
    date: "20 de julio",
    title: "Computadora de Guía Apollo",
    content: "En 1969, la Computadora de Guía Apollo que ayudó a aterrizar humanos en la luna fue programada por un equipo liderado por Margaret Hamilton, pionera en conceptos de ingeniería de software."
  },
  {
    date: "1 de agosto",
    title: "Cumpleaños de Linux",
    content: "El 25 de agosto de 1991, Linus Torvalds anunció la primera versión de Linux, un kernel de sistema operativo gratuito tipo Unix."
  },
  {
    date: "2 de agosto",
    title: "Linux anunció públicamente",
    content: "El 2 de agosto de 1991, Linus Torvalds anunció públicamente el desarrollo de lo que se convertiría en el kernel de Linux en el grupo de noticias comp.os.minix."
  },
  {
    date: "27 de septiembre",
    title: "World Wide Web",
    content: "En 1991, Tim Berners-Lee publicó el primer sitio web, marcando el comienzo de la World Wide Web como la conocemos."
  },
  {
    date: "2 de octubre",
    title: "Lenguaje de programación C",
    content: "Dennis Ritchie completó el desarrollo del lenguaje de programación C en los Laboratorios Bell en 1972. C se convirtió en la base para muchos lenguajes de programación modernos."
  },
  {
    date: "21 de noviembre",
    title: "Hito de Fortran",
    content: "En 1957, IBM lanzó Fortran, el primer lenguaje de programación de alto nivel ampliamente utilizado, que significa Formula Translation."
  },
  {
    date: "9 de diciembre",
    title: "Primera conexión ARPANET",
    content: "En 1969, se envió el primer mensaje a través de ARPANET, el precursor de Internet moderno, entre UCLA y el Instituto de Investigación de Stanford."
  },
  {
    date: "12 de diciembre",
    title: "Lanzamiento de Perl",
    content: "En 1987, Larry Wall lanzó Perl, un lenguaje de programación de alto nivel conocido por su potencia en procesamiento de texto y expresiones regulares."
  }
];

// Datos del catálogo
const catalogData = [
  {
    id: 'personal',
    title: '🚀 Proyectos Personales',
    items: [
      {
        id: 'portafolio',
        title: 'Portafolio profesional',
        description: 'CV interactivo con proyectos, habilidades y contacto'
      },
      {
        id: 'blog',
        title: 'Blog técnico',
        description: 'usando Jekyll, Hugo o Hexo para escribir sobre programación, diseño, etc.'
      },
      {
        id: 'curriculum',
        title: 'Currículum online',
        description: 'con diseño minimalista o interactivo'
      },
      {
        id: 'landing',
        title: 'Landing page',
        description: 'para tu marca personal, freelancing o servicios'
      }
    ]
  },
  {
    id: 'creatividad',
    title: '🎨 Creatividad y Diseño',
    items: [
      {
        id: 'galeria',
        title: 'Galería de arte/diseño',
        description: 'muestra ilustraciones, fotografía o diseños CSS/JS'
      },
      {
        id: 'experimentos',
        title: 'Experimentos web',
        description: 'animaciones con CSS/JS, efectos visuales, shaders'
      },
      {
        id: 'linktree',
        title: 'Linktree personalizado',
        description: 'para centralizar tus redes sociales/proyectos'
      },
      {
        id: 'tutoriales',
        title: 'Tutoriales interactivos',
        description: 'ej: cómo funciona un algoritmo con demostraciones en JS'
      }
    ]
  },
  {
    id: 'herramientas',
    title: '🛠 Herramientas Útiles',
    items: [
      {
        id: 'documentacion',
        title: 'Documentación de un proyecto',
        description: 'como alternativa a ReadTheDocs'
      },
      {
        id: 'generador',
        title: 'Generador de contraseñas',
        description: 'o herramientas simples (calculadoras, conversores)'
      },
      {
        id: 'cheatsheets',
        title: 'Cheatsheets',
        description: 'hojas de referencia para comandos, atajos, frameworks'
      },
      {
        id: 'recursos',
        title: 'Lista de recursos',
        description: 'libros, cursos, herramientas recomendadas sobre un tema'
      }
    ]
  },
  {
    id: 'entretenimiento',
    title: '🎮 Entretenimiento y Juegos',
    items: [
      {
        id: 'juegos',
        title: 'Juegos web simples',
        description: 'como un tres en raya, memoria, o un mini-RPG con JS'
      },
      {
        id: 'peliculas',
        title: 'Web de películas/series',
        description: 'para reseñar tus favoritas, estilo Letterboxd'
      },
      {
        id: 'memes',
        title: 'Generador de memes',
        description: 'o de frases aleatorias'
      }
    ]
  },
  {
    id: 'educacion',
    title: '📚 Educación y Comunidad',
    items: [
      {
        id: 'apuntes',
        title: 'Apuntes o resúmenes',
        description: 'de cursos, universidad, bootcamps'
      },
      {
        id: 'traductor',
        title: 'Traductor básico',
        description: 'para lenguajes inventados o jerga técnica'
      },
      {
        id: 'colaborativa',
        title: 'Web colaborativa',
        description: 'para un grupo de estudio o comunidad'
      }
    ]
  },
  {
    id: 'ideas',
    title: '💡 Ideas Originales',
    items: [
      {
        id: 'maquina',
        title: 'Una "máquina del tiempo"',
        description: 'linterna mágica con fotos/eventos de tu vida'
      },
      {
        id: 'mensajes',
        title: 'Web para enviarte mensajes al futuro',
        description: 'con JavaScript y localStorage'
      }
    ]
  }
];

// Detalles de subcategorías
const subcategoryDetails = {
  'documentacion': {
    title: 'Documentación de un proyecto',
    description: 'Crear una web para documentar proyectos de forma clara y organizada.',
    content: `
      <div>
        <h3>Alternativa a ReadTheDocs</h3>
        <p>Puedes crear tu propia plataforma de documentación usando tecnologías como:</p>
        <ul>
          <li>Markdown para escribir la documentación</li>
          <li>Generadores estáticos como Jekyll, Hugo o Docusaurus</li>
          <li>Sistema de búsqueda integrado</li>
          <li>Versionado de documentación</li>
          <li>Temas personalizados</li>
        </ul>
        <h3>Ventajas:</h3>
        <ul>
          <li>Control total sobre el diseño y funcionalidad</li>
          <li>Personalización específica para tus necesidades</li>
          <li>Sin dependencia de servicios externos</li>
          <li>Integración con tu flujo de trabajo existente</li>
        </ul>
      </div>
    `
  },
  'generador': {
    title: 'Generador de contraseñas y herramientas simples',
    description: 'Herramientas útiles para tareas cotidianas.',
    content: `
      <div>
        <h3>Tipos de herramientas</h3>
        <ul>
          <li>Generadores de contraseñas seguras</li>
          <li>Calculadoras personalizadas</li>
          <li>Convertidores de unidades</li>
          <li>Generadores de texto aleatorio</li>
          <li>Herramientas de procesamiento de texto</li>
        </ul>
        <h3>Tecnologías recomendadas:</h3>
        <ul>
          <li>HTML5 para la interfaz</li>
          <li>CSS3 para el diseño</li>
          <li>JavaScript para la lógica</li>
          <li>Librerías como Crypto.js para funciones criptográficas</li>
        </ul>
        <h3>Características útiles:</h3>
        <ul>
          <li>Copiar al portapapeles</li>
          <li>Personalización de parámetros</li>
          <li>Historial de resultados</li>
          <li>Modo oscuro/claro</li>
        </ul>
      </div>
    `
  },
  'cheatsheets': {
    title: 'Cheatsheets',
    description: 'Hojas de referencia rápida para comandos, atajos y frameworks.',
    content: `
      <div>
        <h3>Tipos de Cheatsheets</h3>
        <ul>
          <li>Comandos de terminal (Linux, Git, Docker)</li>
          <li>Atajos de teclado (IDEs, editores, sistemas operativos)</li>
          <li>Sintaxis de lenguajes (JavaScript, Python, CSS)</li>
          <li>Frameworks y librerías (React, Vue, Bootstrap)</li>
        </ul>
        <h3>Características recomendadas:</h3>
        <ul>
          <li>Búsqueda rápida</li>
          <li>Categorización por temas</li>
          <li>Modo impresión amigable</li>
          <li>Descarga en PDF</li>
          <li>Personalización (agregar/quitar elementos)</li>
        </ul>
        <h3>Tecnologías para implementar:</h3>
        <ul>
          <li>HTML5 semántico</li>
          <li>CSS Grid/Flexbox para layouts</li>
          <li>JavaScript para interactividad</li>
          <li>Almacenamiento local para preferencias</li>
        </ul>
      </div>
    `
  },
  'recursos': {
    title: 'Lista de recursos',
    description: 'Colección de libros, cursos y herramientas recomendadas.',
    content: `
      <div>
        <h3>Tipos de recursos</h3>
        <ul>
          <li>Libros técnicos y guías</li>
          <li>Cursos online (plataformas como Coursera, Udemy)</li>
          <li>Herramientas y software recomendados</li>
          <li>Blogs y sitios web especializados</li>
          <li>Comunidades y foros</li>
        </ul>
        <h3>Categorías comunes:</h3>
        <ul>
          <li>Programación y desarrollo web</li>
          <li>Diseño y UX/UI</li>
          <li>Seguridad informática</li>
          <li>Inteligencia artificial y machine learning</li>
          <li>DevOps y herramientas de desarrollo</li>
        </ul>
        <h3>Funcionalidades útiles:</h3>
        <ul>
          <li>Filtrado por categoría</li>
          <li>Búsqueda por palabras clave</li>
          <li>Sistema de votación/recomendación</li>
          <li>Enlaces actualizados automáticamente</li>
          <li>Exportación de listas personalizadas</li>
        </ul>
      </div>
    `
  },
  'portafolio': {
    title: 'Portafolio profesional',
    description: 'CV interactivo con proyectos, habilidades y contacto.',
    content: `
      <div>
        <h3>Componentes esenciales</h3>
        <ul>
          <li>Sección de presentación personal</li>
          <li>Galería de proyectos con descripciones</li>
          <li>Lista de habilidades técnicas</li>
          <li>Formación académica y certificaciones</li>
          <li>Formulario de contacto</li>
        </ul>
        <h3>Tecnologías recomendadas:</h3>
        <ul>
          <li>HTML5 semántico</li>
          <li>CSS3 con animaciones y transiciones</li>
          <li>JavaScript para interactividad</li>
          <li>Frameworks como React o Vue para SPA</li>
        </ul>
        <h3>Características avanzadas:</h3>
        <ul>
          <li>Modo oscuro/claro</li>
          <li>Responsive design</li>
          <li>Animaciones de scroll</li>
          <li>Integración con redes sociales</li>
          <li>Descarga de CV en PDF</li>
        </ul>
      </div>
    `
  },
  'blog': {
    title: 'Blog técnico',
    description: 'Publicaciones sobre programación, diseño y tecnología.',
    content: `
      <div>
        <h3>Plataformas recomendadas</h3>
        <ul>
          <li>Jekyll (basado en Ruby)</li>
          <li>Hugo (escrito en Go, muy rápido)</li>
          <li>Hexo (basado en Node.js)</li>
          <li>Gatsby (basado en React)</li>
          <li>Next.js (framework de React)</li>
        </ul>
        <h3>Características importantes:</h3>
        <ul>
          <li>Sistema de etiquetas y categorías</li>
          <li>Búsqueda de contenido</li>
          <li>Comentarios (con Disqus o alternativas)</li>
          <li>Compartir en redes sociales</li>
          <li>Suscripción por email</li>
        </ul>
        <h3>Contenido sugerido:</h3>
        <ul>
          <li>Tutoriales paso a paso</li>
          <li>Reseñas de herramientas y tecnologías</li>
          <li>Proyectos personales detallados</li>
          <li>Opiniones sobre tendencias tecnológicas</li>
          <li>Guías de solución de problemas</li>
        </ul>
      </div>
    `
  }
};

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showCatalog, setShowCatalog] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [content, setContent] = useState<any[]>([]);
  const [monthlyFact, setMonthlyFact] = useState<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Inicializar el contenido
  useEffect(() => {
    // Mostrar mensaje de bienvenida
    const welcomeMessage = {
      type: 'welcome',
      content: [
        "Bienvenido a la Terminal de Historia de la Programación v1.0",
        'Escribe "hoy" para ver el hecho de programación del día',
        'Escribe "aleatorio" para ver un hecho de programación aleatorio',
        'Escribe "hechos" para buscar en todos los hechos disponibles',
        'Escribe "ayuda" para ver todos los comandos disponibles',
        'Escribe "modo" para cambiar entre modo oscuro/claro'
      ]
    };

    // Seleccionar hecho del mes
    const now = new Date();
    const currentMonth = now.getMonth();
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    
    const monthlyFacts = factsData.filter(fact => {
      try {
        const factMonth = fact.date.split(' ')[2];
        return months[currentMonth] === factMonth;
      } catch (e) {
        return false;
      }
    });

    let selectedMonthlyFact = null;
    if (monthlyFacts.length > 0) {
      selectedMonthlyFact = monthlyFacts[Math.floor(Math.random() * monthlyFacts.length)];
    }

    setContent([welcomeMessage]);
    setMonthlyFact(selectedMonthlyFact);
  }, []);

  // Manejar comandos
  const processCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    
    // Agregar el comando al contenido
    const commandElement = {
      type: 'command',
      content: `> ${command}`
    };
    
    let newContent = [...content, commandElement];
    
    switch (cmd) {
      case 'ayuda':
        newContent = [...newContent, {
          type: 'help',
          content: [
            'Comandos disponibles:',
            '  ayuda    - Mostrar este mensaje de ayuda',
            '  hoy      - Mostrar el hecho de programación de hoy',
            '  aleatorio - Mostrar un hecho de programación aleatorio',
            '  hechos   - Listar todos los hechos disponibles',
            '  limpiar  - Limpiar la pantalla de la terminal',
            '  inicio   - Volver a la pantalla principal',
            '  modo     - Cambiar entre modo oscuro/claro',
            'También puedes usar los enlaces en la barra de navegación para acceder rápidamente a las secciones.'
          ]
        }];
        break;
        
      case 'hoy':
        const now = new Date();
        const day = now.getDate();
        const months = [
          "enero", "febrero", "marzo", "abril", "mayo", "junio",
          "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];
        const month = months[now.getMonth()];
        const formattedDate = day + " de " + month;
        
        let foundFact = null;
        for (let i = 0; i < factsData.length; i++) {
          if (factsData[i].date === formattedDate) {
            foundFact = factsData[i];
            break;
          }
        }
        
        if (foundFact) {
          newContent = [...newContent, {
            type: 'fact',
            content: foundFact
          }];
        } else {
          newContent = [...newContent, {
            type: 'no-fact',
            content: {
              date: formattedDate,
              message: "No tenemos registrado un hecho importante de la historia de la programación para el día de hoy. ¡Puedes ayudarnos contribuyendo con información!"
            }
          }];
        }
        break;
        
      case 'aleatorio':
        const randomIndex = Math.floor(Math.random() * factsData.length);
        newContent = [...newContent, {
          type: 'fact',
          content: factsData[randomIndex]
        }];
        break;
        
      case 'hechos':
        newContent = [...newContent, {
          type: 'all-facts',
          content: factsData
        }];
        break;
        
      case 'limpiar':
        // Mantener solo el mensaje de bienvenida
        newContent = [content[0]];
        break;
        
      case 'inicio':
        // Volver a la pantalla principal
        newContent = [content[0]];
        break;
        
      case 'modo':
        setTheme(theme === 'dark' ? 'light' : 'dark');
        break;
        
      case '':
        // No hacer nada para comandos vacíos
        break;
        
      default:
        newContent = [...newContent, {
          type: 'unknown',
          content: `Comando no encontrado: ${command}. Escribe 'ayuda' para ver los comandos disponibles.`
        }];
    }
    
    setContent(newContent);
    
    // Desplazarse hacia abajo
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    }, 0);
  };

  // Mostrar detalles de subcategoría
  const showSubcategoryDetails = (id: string) => {
    setActiveSubcategory(id);
  };

  // Cerrar modal de detalles
  const closeSubcategoryModal = () => {
    setActiveSubcategory(null);
  };

  // Alternar visibilidad del catálogo
  const toggleCatalog = () => {
    setShowCatalog(!showCatalog);
  };

  // Volver al inicio
  const goHome = () => {
    // Mantener solo el mensaje de bienvenida
    setContent([content[0]]);
  };

  // Cambiar tema
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Head>
        <title>Terminal de Historia de la Programación</title>
        <meta name="description" content="Explora la historia de la programación con esta terminal interactiva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="matrix-bg"></div>
      
      <div id="terminal">
        <TerminalHeader />
        
        <div id="top-bar">
          <button className="back-button" onClick={goHome}>Inicio</button>
          <div id="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '◐' : '◑'}
          </div>
        </div>
        
        <TerminalNavbar toggleCatalog={toggleCatalog} />
        
        <div id="main-content">
          <CatalogSidebar 
            showCatalog={showCatalog} 
            catalogData={catalogData} 
            showSubcategoryDetails={showSubcategoryDetails} 
          />
          
          <div id="terminal-content">
            <TerminalContent 
              contentRef={contentRef}
              content={content}
              monthlyFact={monthlyFact}
              subcategoryDetails={subcategoryDetails}
            />
            <CommandPrompt onProcessCommand={processCommand} />
          </div>
        </div>
      </div>
      
      {activeSubcategory && (
        <SubcategoryModal 
          subcategory={activeSubcategory}
          details={subcategoryDetails[activeSubcategory as keyof typeof subcategoryDetails] || {title: 'Detalles', description: 'Información detallada', content: '<p>Información detallada no disponible para esta categoría.</p>'}}
          onClose={closeSubcategoryModal}
        />
      )}
    </div>
  );
}