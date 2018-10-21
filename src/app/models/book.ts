export interface Book {
  totalItems: number;
  items:  [ {
    volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    canonicalVolumeLink: string;
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    }
  }
  }];
}
