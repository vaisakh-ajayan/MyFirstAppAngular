import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';


export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next:HttpHandler){
        const newReq = req.clone({headers:req.headers.append('Auth','xyz')})
        console.log("request has been sent to url: "+req.url);
        //final next sends req to server and recieve server response
        return next.handle(newReq).pipe(
            tap((events)=>{
                if(events.type==HttpEventType.Response){
                    console.log(events.body);
                }
                console.log(events);
            })
        );
    }   
}