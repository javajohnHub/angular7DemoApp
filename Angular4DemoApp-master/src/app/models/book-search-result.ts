export class BookSearchResult {
  id: string;
  accessInfo: {
    pdf: {
      isAvailable: boolean
    }
    epub: {
      isAvailable: boolean
    }
  };
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
  constructor(obj?: any){
    this.id = obj && obj.id || null;
    this.volumeInfo.title = obj && obj.volumeInfo.title || null;
    this.volumeInfo.subtitle = obj && obj.volumeInfo.subtitle || null;
    this.volumeInfo.authors = obj && obj.volumeInfo.authors || null;
    this.volumeInfo.canonicalVolumeLink = obj && obj.volumeInfo.canonicalVolumeLink || null;
    this.volumeInfo.publisher = obj && obj.volumeInfo.publisher || null;
    this.volumeInfo.publishDate = obj && obj.volumeInfo.publishDate || null;
    this.volumeInfo.description = obj && obj.volumeInfo.description || null;
    this.volumeInfo.averageRating = obj && obj.volumeInfo.averageRating || null;
    this.accessInfo = obj && obj.accessInfo || null;
    this.volumeInfo.ratingsCount = obj && obj.volumeInfo.ratingsCount || null;
    this.volumeInfo.imageLinks.thumbnail = obj && obj.volumeInfo.imageLinks.thumbnail || null;
    this.volumeInfo.imageLinks.smallThumbnail = obj && obj.volumeInfo.imageLinks.smallThumbnail || null;

  }
}


