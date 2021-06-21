import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { posts } from '../post';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  loadedPosts=[];
  errors=null;
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
  }

  onCreatePosts(postData:posts){
    this.blogService.createPost(postData).subscribe((responseData)=>{
      console.log(responseData);
    })
  }

  fetchPosts(){
    this.blogService.fetchPost().subscribe((posts)=>{
      this.loadedPosts=posts;
    },
    (error)=>{
      this.errors=error.message;
    });
  }

  onClickFetchPosts(){
    this.fetchPosts();
  }

  onDeletePosts(){
    this.blogService.deletePosts().subscribe(()=>{
      this.loadedPosts=[];
    });
  }
}
