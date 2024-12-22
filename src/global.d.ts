declare type Credits = {
  writtenBy: string;
  arrangedBy: string;
  producedBy: string;
  mixedBy: string;
  masteredBy: string;
  recordedAt: string[];
  personel: string[];
  albumArtDesignedBy: string;
  albumArtBy: string;
};

declare type Link = {
  spotify?: string;
  bandcamp?: string;
  smartLink?: string;
};

declare type Album = {
  img: ImageMetadata;
  title: string;
  releaseDate: string;
  tracklist: Object;
  about: string;
  credits: Credits;
  links: Link;
  id: number;
};

declare type Video = {
  url: ImageMetadata;
  title: string;
  src: string;
  id: number;
};

declare type GigAttributes = {
  venue: string;
  date: string;
  doors: string;
  ticket_url: string;
  city: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

declare type Gig = {
  id: number;
  attributes: GigAttributes;
};

declare type DayTicket = {
  id: number;
  attributes: DayTicketAttributes;
};

declare type DayTicketAttributes = {
  title: string;
  body: string;
  date_created: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt: Date;
  slug?: string;
};
