import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumsService } from '../albums.service';

import { Albums } from '../models';
import { POSTS } from '../fake-db';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Albums[];
  newAlbum!: Albums;
  isLoaded: boolean = false;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.getAlbums();
    this.newAlbum = {
      userId: 1,
      id: 101,
      title: ''
    }
  }


   getAlbums(){
    this.isLoaded = false;
    this.albumsService.getAlbums().subscribe((albums) => 
    { 
      this.albums = albums;
      this.isLoaded = true
    });
  }

  addAlbum(){
    this.albumsService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      alert('Album added successfully!');
    });
    this.newAlbum.title = '';
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(album => album.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(()=>{
      console.log('Album deleted');
    });
  }


}
