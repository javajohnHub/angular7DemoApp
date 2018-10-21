export class FlickrResult{
  id: string;
  owner: string;
  secret: string;
  server: string;
  title: string;
  farm: string;

  constructor(obj?: any){
    this.id = obj && obj.id || null;
    this.owner = obj && obj.owner || null;
    this.secret = obj && obj.secret || null;
    this.server = obj && obj.server || null;
    this.farm = obj && obj.farm || null;
    this.title = obj && obj.title || null;

  }
}

