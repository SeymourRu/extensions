import { Component } from '@angular/core';
import { MtxLoader } from '@ng-matero/extensions/loader';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxLoader],
})
export class AppComponent {}
