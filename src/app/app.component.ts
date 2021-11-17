import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  searchcontrol = new FormControl();

  constructor() {
    this.searchcontrol.valueChanges
      .pipe(
        filter((text) => text.length > 3),
        debounceTime(4000)
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
