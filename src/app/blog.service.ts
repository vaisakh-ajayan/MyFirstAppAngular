import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { posts } from './post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  createPost(postData:posts){
    return this.http.post(
      "https://windows-mashup-angular-default-rtdb.firebaseio.com/posts.json",
    postData);
  }

  //fetch server data with get request
  fetchPost(){
    return this.http.get("https://windows-mashup-angular-default-rtdb.firebaseio.com/posts.json",
    {headers:new HttpHeaders({'custom-header':'Hello world'}),
    params:new HttpParams().set('print','pretty')}
    )
    .pipe(
      map((responseData:{[key:string]:posts})=>{
        const postArray : posts[]= [];
        for(const key in responseData){
          if(responseData.hasOwnProperty){
            postArray.push({...responseData[key],id:key});
          }
        }
        return postArray;
      })
    );
  }

  deletePosts(){
    return this.http.delete(
      "https://windows-mashup-angular-default-rtdb.firebaseio.com/posts.json"
    );
  }
}
