import { Injectable } from '@angular/core';
import { Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Hey There, I am Saif',
      content: 'This is the first post'
    },
    {
      id: 2,
      title: 'I am Software Engineer',
      content: 'I graduated from FAST NUCES'      
    },
    {
      id: 3,
      title: 'Hey There, I am a proud son',
      content: 'This is the first website'
    },
    {
      id: 4,
      title: 'I am Angular Developer',
      content: 'I am too fast at coding'      
    },
    {
      id: 5,
      title: 'I like to walk on sundays',
      content: 'Sunday walk in park is my relaxing technique'
    },
    {
      id: 6,
      title: 'I love reading books',
      content: 'My favorite book is think and grow rich'      
    }
  ];
  getPosts(): Post[] {
    return this.posts;
  }
  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}