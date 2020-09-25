export class AlbumCard {

  id: number;
  active: boolean;
  type: string;
  stop: string;
  start: string;
  total: number;
  quality: number;

  constructor(id: number, type: string, stop: string, start: string, total: number, quality: number, active: boolean) {
    this.id = id;
    this.active = active;
    this.type = type;
    this.stop = stop;
    this.start = start;
    this.total = total;
    this.quality = quality;
  }
}

// export class AlbumCard {
//
//   id: number;
//   url: string;
//   name: string;
//   date: string;
//   time: string;
//   active: boolean;
//   comment: string;
//   description: string;
//
//   constructor(id: number, url: string, name: string,
//               date: string, time: string, active: boolean, comment: string, description: string) {
//     this.id = id;
//     this.url = url;
//     this.name = name;
//     this.active = active;
//     this.comment = comment;
//     this.description = description;
//   }
// }
