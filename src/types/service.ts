
export interface ServiceCardType {
  id: string;
  slug: string;
  icon: string; // 
  emoji: string;
  title: string;
  shortDescription: string;
  description: string;
  href: string;
  features: string[];
  bgColor: string;
  category: string;
}

export interface ServiceSectionType {
  sectionId: string;
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  cards: ServiceCardType[];
}
