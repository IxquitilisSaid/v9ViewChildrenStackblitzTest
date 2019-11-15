import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  name = 'v9ViewChildren';

  @ViewChildren(HelloComponent) hellos: QueryList<any>;

  ngAfterViewInit() {
    this.hellos.forEach(hello => console.log(hello));
  }
}
