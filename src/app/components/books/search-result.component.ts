import {
  Component, Input,
} from '@angular/core';
import {BookSearchResult} from '../../models/book-search-result';

@Component({
  selector: 'app-search-result',
  template: `

    <div layout="row" layout-margin layout-wrap layout-align="center center">
    <div flex="25">
    <div class="row">
      <div><img *ngIf="thumbnail" [src]="thumbnail"></div>
      <div style="overflow: auto;">
        <!--<p *ngIf="description">{{description}}</p>-->
      </div>
    </div>
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
