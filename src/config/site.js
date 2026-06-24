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
