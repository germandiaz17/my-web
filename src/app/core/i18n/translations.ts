export type Lang = 'es' | 'en';

export const translations: Record<Lang, Record<string, any>> = {
  es: {
    nav: {
      stack: '[stack]',
      exp: '[exp]',
      courses: '[cursos]',
      contact: '[contacto]',
    },
    hero: {
      tagline: 'Construyendo soluciones digitales, un byte a la vez.',
      viewProjects: '[ ver proyectos ]',
      contact: '[ contacto ]',
      scrollDown: 'scroll down',
    },
    techStack: {
      title: 'stack tecnológico',
      subtitle: '// tecnologías con las que trabajo',
    },
    projects: {
      title: 'proyectos',
      subtitle: '// algunas cosas que he construido',
      code: '[código]',
      demo: '[demo]',
    },
    experience: {
      title: 'experiencia',
      subtitle: '// mi trayectoria profesional',
    },
    courses: {
      title: 'cursos & formación',
      subtitle: '// aprendizaje continuo',
    },
    contact: {
      title: 'contacto',
      subtitle: '// hablemos',
      terminalString: '"¡Hablemos!"',
      subject: '"Saludo"',
      response: '// Espero tu mensaje :)',
      sendEmail: '[ enviar email ]',
      footer: 'built with Angular + pixel love',
    },
  },
  en: {
    nav: {
      stack: '[stack]',
      exp: '[exp]',
      courses: '[courses]',
      contact: '[contact]',
    },
    hero: {
      tagline: 'Building digital solutions, one byte at a time.',
      viewProjects: '[ see projects ]',
      contact: '[ contact ]',
      scrollDown: 'scroll down',
    },
    techStack: {
      title: 'tech stack',
      subtitle: '// technologies I work with',
    },
    projects: {
      title: 'projects',
      subtitle: '// some things I have built',
      code: '[code]',
      demo: '[demo]',
    },
    experience: {
      title: 'experience',
      subtitle: '// my professional journey',
    },
    courses: {
      title: 'courses & education',
      subtitle: '// continuous learning',
    },
    contact: {
      title: 'contact',
      subtitle: "// let's talk",
      terminalString: '"Let\'s talk!"',
      subject: '"Hello"',
      response: '// Looking forward to your message :)',
      sendEmail: '[ send email ]',
      footer: 'built with Angular + pixel love',
    },
  },
};
