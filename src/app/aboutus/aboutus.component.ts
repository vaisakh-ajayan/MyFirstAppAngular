import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [
    trigger('elementState',[
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)'
        })
      ),
      state(
        'minify',
        style({
          backgroundColor: 'green',
          transform: 'translateX(0) scale(0.5)'
        })
      ),
      transition('normal=>highlighted', animate(300)), //.3s
        transition('highlighted=>normal', animate(600)),
        transition('minify<=>*',[
          style({   //intermediate style
            backgroundColor: 'orange',
            borderRadius: '0'
          }),   //in 3s border radius will be 50%
          animate(
            3000,
            style({
              borderRadius: '50px',
            })
          ),    //after that in 6s it will become its normal minify style given in state()
          animate(6500),
        ]
        ),
    ])
  ],
})
export class AboutusComponent implements OnInit {
  state = 'normal'
  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(){
    this.state === 'highlighted' ? this.state = 'normal' : this.state='highlighted'
  }

  onMinify(){
    this.state='minify'
  }

}
