import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  queries: {
    hellosQuery: new ViewChildren(HelloComponent)
  }
})
export class AppComponent implements AfterViewInit {
  public name = 'v9ViewChildren';
  public hellosQuery: QueryList<HelloComponent>;

  @ViewChildren(HelloComponent) hellos: QueryList<any>; // Works

  ngAfterViewInit() {
    this.hellos.forEach(hello => console.log('PROPS', hello));

    this.hellosQuery.forEach(hello => console.log('QUERIES', hello));
  }
}
