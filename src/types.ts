interface PersonCardInfo {
  image: string;
  count: number;
  name: string;
  party: string;
  logo: string;
}

interface ShameCardInfo {
  image: string;
  name: string;
  add: string;
  date: string;
  description: string;
}

export type { PersonCardInfo, ShameCardInfo };
