import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports : [RouterModule,CommonModule],
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
  }
}