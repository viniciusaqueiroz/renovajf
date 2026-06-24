const env = import.meta.env;

const siteName = env.VITE_SITE_NAME ?? "RenovaJF";
const whatsappNumber = env.VITE_WHATSAPP_NUMBER ?? "553232261709";
const whatsappLink = env.VITE_WHATSAPP_LINK ?? `https://wa.me/${whatsappNumber}`;
const contactPhone = env.VITE_CONTACT_PHONE ?? "(32) 3226-1709";
const contactEmail = env.VITE_CONTACT_EMAIL ?? "contato@renovajf.com.br";
const contactAddress =
  env.VITE_CONTACT_ADDRESS ?? "Rua Vitar Maria de Oliveira, 536 - Juiz de Fora, MG";
const instagramUrl =
  env.VITE_INSTAGRAM_URL ?? "https://www.instagram.com/renovadorajf";
const facebookUrl =
  env.VITE_FACEBOOK_URL ??
  "https://www.facebook.com/renovadoradeestofados/?locale=pt_BR";
const catalogPdf = env.VITE_CATALOG_PDF ?? "/catalogo.pdf";

export const siteConfig = {
  siteName,
  whatsappNumber,
  whatsappLink,
  contactPhone,
  contactEmail,
  contactAddress,
  instagramUrl,
  facebookUrl,
  catalogPdf,
};

export const seoConfig = {
  title: "Renovadora JF | Manutenção de Cadeiras, Peças e Estofados Técnicos em Juiz de Fora",
  description:
    "Manutenção de cadeiras, venda de peças, cadeiras novas e reforma de estofados técnicos para empresas, academias, clínicas e escritórios em Juiz de Fora e região.",
  keywords: [
    "manutenção de cadeiras",
    "conserto de cadeiras",
    "peças para cadeiras",
    "cadeira de escritório",
    "manutenção de equipamentos de academia",
    "reforma de maca clínica",
    "estofados técnicos",
    "Juiz de Fora",
  ].join(", "),
};

export const businessContent = {
  hero: {
    headline: "Manutenção, peças e cadeiras novas para empresas, escritórios e academias",
    subheadline:
      "Desde 1974 oferecendo soluções em cadeiras, estofados técnicos e reposição de peças com qualidade, conforto e durabilidade em Juiz de Fora e região.",
    badges: ["Cadeiras corporativas", "Peças para cadeiras", "Atendimento empresarial"],
  },
  solutions: [
    {
      title: "Manutenção de cadeiras",
      text: "Ajustes, troca de componentes e recuperação completa para cadeiras corporativas e de uso intenso.",
    },
    {
      title: "Venda de cadeiras novas",
      text: "Modelos para escritório, operação, recepção e uso contínuo com foco em ergonomia e durabilidade.",
    },
    {
      title: "Peças para cadeiras",
      text: "Reposição de peças e componentes para reduzir paradas e ampliar a vida útil dos assentos.",
    },
    {
      title: "Estofados técnicos",
      text: "Revestimentos e manutenção para aplicações de alto uso, com acabamento resistente e funcional.",
    },
    {
      title: "Academias e fitness",
      text: "Manutenção de bancos, apoios e superfícies acolchoadas para equipamentos de academia.",
    },
    {
      title: "Clínicas e macas",
      text: "Reforma e manutenção de macas clínicas e equipamentos acolchoados para ambientes de saúde.",
    },
  ],
  chairLines: [
    {
      title: "Linha Econômica",
      models: ["Secretária", "Executiva", "Diretor", "Presidente", "Universitária"],
      text: "Soluções práticas para escritório, atendimento e operação diária com foco em custo-benefício.",
    },
    {
      title: "Linha Premium",
      models: ["Addit", "Liss", "Zip", "Volt", "Pollux"],
      text: "Modelos com mais presença, conforto e acabamento para ambientes corporativos exigentes.",
    },
    {
      title: "Linha Multifuncional",
      models: ["Bit", "Luna", "Up"],
      text: "Opções versáteis para diferentes postos de trabalho, recepções e espaços compartilhados.",
    },
  ],
  parts: [
    "Pistão",
    "Flange Relax",
    "Flange Universal",
    "Backsystem",
    "Alongador",
    "Rodízios",
    "Base estrela fixa",
    "Base estrela giratória",
    "Apoio de braço",
    "Braços botão",
    "Braços corsa",
    "Assento e encosto",
    "Lâmina",
    "Canoa",
    "Volante",
  ],
  corporate: {
    title: "Atendimento empresarial em Juiz de Fora e região",
    text:
      "Estrutura para atender empresas, escritórios, escolas, clínicas, coworkings, academias e operações que exigem agilidade, continuidade e padronização.",
    highlights: [
      "Atendimento recorrente",
      "Manutenção preventiva",
      "Reposição de peças",
      "Padronização de parque",
    ],
  },
  fitness: {
    title: "Academias e equipamentos fitness",
    text:
      "Manutenção de bancos, apoios, estofados e superfícies acolchoadas para equipamentos de academia, com foco em resistência ao uso intenso.",
    items: ["Bancos acolchoados", "Apoios de musculação", "Revestimentos técnicos", "Manutenção corretiva"],
  },
  clinics: {
    title: "Clínicas, macas e equipamentos acolchoados",
    text:
      "Reforma e manutenção de macas clínicas, apoios e superfícies de atendimento, com acabamento limpo, durável e funcional.",
    items: ["Macas clínicas", "Apoios de atendimento", "Equipamentos acolchoados", "Revestimento técnico"],
  },
  about: {
    kicker: "Sobre a empresa",
    title: "Tradição, estrutura e atendimento especializado",
    subtitle:
      "Uma marca construída para atender empresas, escritórios, academias e clínicas com agilidade e cuidado técnico.",
  },
};
