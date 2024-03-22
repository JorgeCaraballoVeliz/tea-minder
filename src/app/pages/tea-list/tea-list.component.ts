import { Component, inject } from '@angular/core';
import { TeaService } from '../../data/tea.service';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrl: './tea-list.component.scss'
})
export class TeaListComponent {
  private service: TeaService = inject(TeaService)

  constructor() {
    console.log(this.service.owo());
  }
}
