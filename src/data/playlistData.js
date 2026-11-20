export const PLAYLIST_INFO = {
  title: "A vida como ela é",
  creator: "Amanda Pimenta",
  photo: "/images/amanda.jpg",
  subtitle:
    "Estudante de Engenharia de Software na PUC Minas. Aqui reúno meus projetos, estudos e o que curto dentro e fora da programação.",
  githubProfile: "https://github.com/amandapfig",
  email: "amandapfigueiredo55@gmail.com",
  phoneDisplay: "(31) 98924-1044",
  phoneHref: "tel:+5531989241044",
  whatsappHref: "https://wa.me/553189241044",
  linkedinUrl: "https://www.linkedin.com/in/amandapimentaf", 
};

export const TRACKS = [
  {
    id: "who-am-i",
    number: "01",
    title: "Who Am I?",
    subtitle: "Sobre Mim • Trajetória & Objetivos",
    album: "Intro • Perfil",
    duration: "01:45",
  },
  {
    id: "my-skills",
    number: "02",
    title: "My Skills",
    subtitle: "Linguagens, Web & Ferramentas",
    album: "Tech Stack",
    duration: "02:20",
  },
  {
    id: "my-projects",
    number: "03",
    title: "My Projects",
    subtitle: "Projetos Acadêmicos em Destaque",
    album: "Code Sessions",
    duration: "03:40",
  },
  {
    id: "beyond-the-code",
    number: "04",
    title: "Beyond the Code",
    subtitle: "Hobbies & Personalidade",
    album: "Off-Screen",
    duration: "02:15",
  },
  {
    id: "my-journey",
    number: "05",
    title: "My Journey",
    subtitle: "PUC Minas & Idiomas",
    album: "Academic Life",
    duration: "01:55",
  },
  {
    id: "lets-connect",
    number: "06",
    title: "Let’s Connect",
    subtitle: "Contato & Redes",
    album: "Outro • Conexão",
    duration: "01:30",
  },
];

export const ABOUT_TEXTS = {
  pt: {
    badge: "Em busca do primeiro estágio em Tecnologia",
    heading: "Olá! Eu sou a Amanda Pimenta",
    paragraphs: [
      "Sou estudante de Engenharia de Software na Pontifícia Universidade Católica de Minas Gerais (PUC Minas).",
      "Sou uma pessoa criativa, curiosa, comunicativa e interessada em tecnologia, desenvolvimento de software e inovação. Gosto de aprender coisas novas, trabalhar em equipe, explorar ideias e transformar conhecimentos em projetos práticos.",
      "Atualmente, busco minha primeira oportunidade de estágio na área de tecnologia, com interesse em desenvolvimento de software e desenvolvimento web.",
    ],
    traits: [
      { title: "Criativa", desc: "Busco soluções originais e interfaces com identidade própria." },
      { title: "Curiosa", desc: "Sempre explorando novas tecnologias, conceitos e ideias." },
      { title: "Comunicativa", desc: "Facilidade para trocar ideias, ouvir e colaborar." },
      { title: "Trabalho em equipe", desc: "Experiência em projetos colaborativos acadêmicos." },
    ],
  },
  en: {
    badge: "Looking for my first Tech Internship",
    heading: "Hi! I’m Amanda Pimenta",
    paragraphs: [
      "I am a Software Engineering student at the Pontifical Catholic University of Minas Gerais (PUC Minas).",
      "I am a creative, curious, and communicative person interested in technology, software engineering, and innovation. I enjoy learning new things, working in teams, exploring ideas, and turning knowledge into practical projects.",
      "Currently, I am looking for my first internship opportunity in technology, with focus on software development and web development.",
    ],
    traits: [
      { title: "Creative", desc: "Driven to build thoughtful, expressive, and original solutions." },
      { title: "Curious", desc: "Always excited to learn new tools and software concepts." },
      { title: "Communicative", desc: "Clear communication and openness to feedback." },
      { title: "Team Player", desc: "Passionate about collaborative projects and shared goals." },
    ],
  },
};

export const SKILLS_GROUPS = [
  {
    category: "Linguagens de Programação",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "⚡" },
    ],
  },
  {
    category: "Desenvolvimento Web",
    items: [
      { name: "HTML"},
      { name: "CSS3"},
      { name: "JavaScript"},
      { name: "React"},
      { name: "Node.js"},
    ],
  },
  {
    category: "Ferramentas e Conhecimentos",
    items: [
      { name: "Git e GitHub"},
      { name: "MongoDB"},
      { name: "Lógica de Programação"},
      { name: "Desenvolvimento Web"},
      { name: "Programação Orientada a Objetos"},
      { name: "Trabalho em equipe"},
    ],
  },
];
export const PROJECTS = [
  {
    id: "pedalaki",
    trackCode: "EP 01",
    title: "PEDALAKI",
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Plataforma para registro e acompanhamento de problemas em ciclovias. Solução voltada à segurança, mobilidade urbana e incentivo ao ciclismo.",
    githubUrl: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-1-ti1-7620100-pedalaki.git",
    image: "/images/pedalaki.png",
    accent: "from-sky",
  },
  {
    id: "relogio-digital",
    trackCode: "EP 02",
    title: "RELÓGIO DIGITAL",
    techs: ["Python", "Tkinter"],
    description:
      "Aplicação em Python com interface gráfica desenvolvida em Tkinter, exibindo a hora em tempo real e realizando sua atualização automática.",
    githubUrl: "https://github.com/amandapfig/Curso-Udemy-Algoritmos-Relogio.git",
    image: "/images/relogio.png",
    accent: "from-royal",
  },
  {
    id: "jogo-da-forca",
    trackCode: "EP 03",
    title: "JOGO DA FORCA",
    techs: ["Python"],
    description:
      "Desenvolvimento de um jogo com seleção aleatória de palavras e sistema de tentativas. Aplicação de listas, strings, condicionais, loops, funções e modularização para estruturar a lógica do jogo.",
    githubUrl: "https://github.com/amandapfig/Curso-Udemy---Algoritmos---Jogo-da-forca.git",
    image: "/images/forca.png",
    accent: "from-cobalt",
  },
  {
    id: "jogo-de-corrida",
    trackCode: "EP 04",
    title: "JOGO DE CORRIDA",
    techs: ["Python", "Pygame"],
    description:
      "Desenvolvimento em equipe de um jogo de corrida 2D com obstáculos, moedas e aumento progressivo de dificuldade. Implementação de sistema de vidas, pontuação, loja de veículos, rankings e salvamento de dados entre sessões.",
    githubUrl: "https://github.com/Deignaura/TrabalhoPratico.git",
    image: "/images/corrida.png",
    accent: "from-indigo",
  },
  {
    id: "pimenta-sabor",
    trackCode: "EP 05",
    title: "PIMENTASABOR",
    techs: ["HTML", "CSS", "JavaScript", "JSON Server"],
    description:
      "Plataforma de indicações de restaurantes em Belo Horizonte desenvolvida na disciplina de DIW (1º semestre), com carrossel, cards, gráfico, sistema de login/cadastro, favoritos e CRUD completo para administradores.",
    githubUrl: "https://github.com/amandapfig/Trabalho-de-DIW---1.git",
    image: "/images/restaurante.png",
    accent: "from-sky",
  },
];

export const HOBBIES = [
  { icon: "🎧", title: "Ouvir música e conhecer artistas novos", tag: "Music Lover" },
  { icon: "🎬", title: "Assistir a filmes e séries", tag: "Cinema & Séries" },
  { icon: "🏀", title: "Praticar esportes", tag: "Esportes" },
  { icon: "✈️", title: "Conhecer lugares novos e viajar", tag: "Explorar" },
  { icon: "💙", title: "Passar tempo com amigos e família", tag: "Conexões" },
  { icon: "📸", title: "Fotografar e editar momentos especiais", tag: "Fotografia & Edição" },
  { icon: "✨", title: "Aprender coisas novas e explorar diferentes áreas", tag: "Curiosidade" },
  { icon: "🤝", title: "Participar de atividades em equipe e experiências colaborativas", tag: "Colaboração" },
];

export const EDUCATION = {
  degree: "Bacharelado em Engenharia de Software",
  institution: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
  period: "2026–2029",
};

export const LANGUAGES = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado" },
];
