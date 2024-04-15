import { Component, OnInit, inject } from '@angular/core';
import { TeaService } from './data/tea.service';
import { TeaModel } from './models/tea.model';
import { AuthService } from './data/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  teaService: TeaService = inject(TeaService);
  authservice: AuthService = inject(AuthService);
  teaSelected: TeaModel = {
    name: 'no tea selected',
    id: -1,
    description: 'none'
  }; 
  userUpadate: string | null = null;
  title = 'tea-minder';


  constructor() {
    this.teaService.teaSelected.subscribe({
      next: (value: TeaModel) => {
        console.log('APP_COMPONENT TEA_SELECTED =>', value);
        this.teaSelected = value;
      }
    })
  }


  ngOnInit(): void {
    console.log(this.authservice.user$);
    this.authservice.user$.subscribe({
      next: (value: string) => {
        console.log('usuario: ', value);
        this.userUpadate = value;
      }
    })
  }

  // onClick() {
  //   console.log("my button is working");
  // }
}
