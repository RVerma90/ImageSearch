import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
    selector: 'app-image-list',
    templateUrl: './image-list.component.html',
    styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
    images: any[];
    imagesFound: boolean = false;
    searching: boolean = false;

    constructor(private imageService: ImageService) {}

    ngOnInit() {
    }
    searchImages(query: string) {
      this.searching = true;
        return this.imageService.getImage(query).subscribe(
            data => this.handleSuccess(data),
            error => this.handleError(error),
            () => this.searching = false
        )
    }

    handleSuccess(data) {
        this.imagesFound = true;
        this.images = data.hits;
        console.log(data.hits);
    }


    handleError(error) {
        console.log(error);
    }



}
