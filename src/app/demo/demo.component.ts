import { Component,DoCheck,AfterContentInit, AfterContentChecked, Input, OnChanges,
   OnInit, SimpleChanges, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterContentChecked, OnChanges, DoCheck,
 AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

 @Input() value: string = 'procademy'

 constructor(){
   console.log('Constructor called!');
  // console.log(this.value)
 }

 ngOnChanges(change: SimpleChanges){                // get call only for the first time
  console.log('ngOnChanges called!');
  console.log(change)
 }


 ngOnInit(){
  console.log('ngOnInit called!');
  //console.log(this.value);
 }

 ngDoCheck(){
  console.log('ngDoCheck called!');
 }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }
  
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!') 
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!') 
 }

 ngOnDestroy(){
  console.log('ngOnDestroy called!') 
}
 }