import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports : [RouterModule,CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}