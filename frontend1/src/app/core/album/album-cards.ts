export class AlbumCards {

  id: number;
  url: string;
  name: string;
  comment: string;
  description: string;

  constructor(id: number, url: string, name: string, comment: string, description: string) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.comment = comment;
    this.description = description;
  }
}
