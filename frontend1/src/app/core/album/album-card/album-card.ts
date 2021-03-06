export class AlbumCard {

  id: number;
  url: string;
  name: string;
  date: string;
  time: string;
  active: boolean;
  comment: string;
  description: string;

  constructor(id: number, url: string, name: string,
              date: string, time: string, active: boolean, comment: string, description: string) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.active = active;
    this.comment = comment;
    this.description = description;
  }
}
