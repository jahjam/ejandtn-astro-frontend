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
  img: string;
  title: string;
  releaseDate: string;
  tracklist: Object;
  about: string;
  credits: Credits;
  links: Link;
};
