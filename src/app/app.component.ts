import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule, ToastComponent } from '@syncfusion/ej2-angular-notifications'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('toastObj') public toastObj: ToastComponent;

  public position = { X: 'Right', Y: 'Top' };

  showToast(args: any) {
    this.toastObj.show();
  }

  hideToast(args: any) {
    this.toastObj.hide('All');
  }
}
