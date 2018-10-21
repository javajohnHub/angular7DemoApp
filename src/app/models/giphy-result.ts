export class GiphyResult{
  id: string;
  type: string;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  import_datetime: string;
  is_indexable: number;
  rating: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  trending_datetime: string;
  username: string;
  mp4: string;
  image: string;
  looping: string;
  constructor(obj?: any){
    this.id = obj && obj.id || null;
    this.type = obj && obj.type || null;
    this.slug = obj && obj.slug || null;
    this.url = obj && obj.url || null;
    this.bitly_gif_url = obj && obj.bitly_gif_url || null;
    this.bitly_url = obj && obj.bitly_url || null;
    this.content_url = obj && obj.content_url || null;
    this.embed_url = obj && obj.embed_url || null;
    this.import_datetime = obj && obj.import_datetime || null;
    this.is_indexable = obj && obj.is_indexable || null;
    this.rating = obj && obj.rating || null;
    this.source = obj && obj.source || null;
    this.source_post_url = obj && obj.source_post_url || null;
    this.source_tld = obj && obj.source_tld || null;
    this.trending_datetime = obj && obj.trending_datetime || null;
    this.username = obj && obj.username || null;
    this.mp4 = obj && obj.mp4 || null;
    this.image = obj && obj.image || null;
    this.looping = obj && obj.looping || null;
  }
}

