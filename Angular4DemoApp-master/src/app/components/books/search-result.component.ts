import {
  Component, Input,
} from '@angular/core';
import {BookSearchResult} from '../../models/book-search-result';

@Component({
  selector: 'app-search-result',
  template: `
   <div>
   <h3><a href="{{canonicalVolumeLink}}" target="_blank">{{title}}</a></h3><small *ngIf="subtitle">{{subtitle}}</small>
     <div class="row">
       <div class="col-md-2"><img class="img-responsive img-thumbnail" *ngIf="thumbnail" [src]="thumbnail"></div>
       <div class="caption col-md-10">
         <p *ngIf="description">{{description}}</p>
       </div>
     </div>
     <div>{{result.volumeInfo.averageRating}}</div>
     - <span style="color:midnightblue"> {{ratingsCount || 0}}</span> votes
      <span style="color: midnightblue">
      <div *ngIf="epubIsAvailable">Available in epub</div>
      <div *ngIf="pdfIsAvailable">Available in pdf</div>
      </span>
      <hr/>
    </div>
  `
})
export class SearchResultComponent {
  @Input() result: BookSearchResult;
  public isReadonly = true;
  get id() {
    return this.result.id;
  }

  get title() {
    return this.result.volumeInfo.title;
  }

  get subtitle() {
    return this.result.volumeInfo.subtitle;
  }

  get description() {
    return this.result.volumeInfo.description;
  }
  get ratingsCount(){
    return this.result.volumeInfo.ratingsCount;
  }
  get authors() {
    return this.result.volumeInfo.authors;
  }
  get canonicalVolumeLink() {
    return this.result.volumeInfo.canonicalVolumeLink;
  }
  get pdfIsAvailable(){
    return this.result.accessInfo.pdf.isAvailable;
  }
  get epubIsAvailable(){
    return this.result.accessInfo.epub.isAvailable;
  }

  get thumbnail(): string | boolean {
    if (this.result.volumeInfo.imageLinks) {
      return this.result.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
}
