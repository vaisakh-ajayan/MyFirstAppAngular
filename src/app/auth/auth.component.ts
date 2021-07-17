import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../alert/alert.component';
import { AuthService } from '../auth.service'
import { PlaceholderDirective } from '../placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  errorMessage: string = null;
  isLoginMode = true
  //to access the place holder directive
  //instead of using id or claas of element to be found we use type
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  //to unsubscribe the listening to the alert component for close action
  closeSubscription: Subscription;
  constructor(private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitAuthForm(data) {
    if (this.isLoginMode) {
      this.authService.login(data.email, data.password).subscribe(
        (response) => {
          console.log(response)
          this.router.navigate(['/'])
        },
        (error) => {
          console.log(error)
          this.errorMessage = error.error.error.message
          this.showErrorAlert(this.errorMessage)
        }
      )
    }
    else {
      this.authService.signUp(data.email, data.password).subscribe(
        (response) => {
          console.log(response)
          this.router.navigate(['/'])
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }
  //this wont work
  //to handle event emitted
  onHandleError() {
    this.errorMessage = null
  }

  private showErrorAlert(message: string) {
    //to call the alertcomponent, resolve component factory
    //returning component factory is used to generate alertcomponent
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    )

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    //clear method to clear if anything existing in this reference
    hostViewContainerRef.clear();
    //giving componentFactory for placing contents
    const componentRef = hostViewContainerRef.createComponent(
      alertComponentFactory
    );

    //waiting for close action
    //passing the message to be shown to refernce of component
    componentRef.instance.message = message;
    //listening to event from alertbox by subscribing
    this.closeSubscription = componentRef.instance.close.subscribe(() => {
      //on getting response clear the container by unsubscribing it
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
