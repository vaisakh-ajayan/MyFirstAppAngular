import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myNumbersSubscription:Subscription;

  constructor(private router: Router) { }

  loadServers(){
    console.log('loading servers ....');
    this.router.navigate(['/controlpannel']);
  }

  ngOnInit(): void {
    //creating an observable
    const myObservable = Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
        observer.next('First package');
        console.log('inside observable');
      },2000);
      setTimeout(()=>{
        observer.next('Second package');
      }, 5000);
      setTimeout(()=>{
        observer.error('Failed package');
      }, 8000);
    });

    //subscribing Observable by passing an observer object
    myObservable.subscribe(
      (data : string)=>{
        console.log(data);
      },
      (error : string)=>{
        console.log(error);
      },
      ()=>{
        console.log('Observer completed');
      }
    );

    //interval observable from rxjs package
    const myNumbers = interval(3000);
    this.myNumbersSubscription = myNumbers.subscribe(
      (number:number)=>{
        console.log(number);
      }
    );

    console.log("is this asynchronous");
  }

  ngOnDestroy(){
    this.myNumbersSubscription.unsubscribe();
  }

}
