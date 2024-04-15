import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TeaService } from '../../data/tea.service';
import { TeaModel } from '../../models/tea.model';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrl: './tea-list.component.scss'
})
export class TeaListComponent implements OnInit, OnDestroy{
  private teaService: TeaService = inject(TeaService)
   teaList: TeaModel[] = [];

  teaList$: Observable<TeaModel[]> = this.teaService.getAllTeas();

  private destroy$: Subject<void> = new Subject();

  constructor() {
    //console.log(this.teaService.owo());
  }

  ngOnInit(): void {
    this.teaService
    .getAllTeas()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (value: TeaModel[]) => {
        //console.log(value);
        this.teaList = value;
      }
    });
    console.log('aberrrr: ', this.teaList$)
    //console.log('DATA =>', this.teaService.getAllTeas())
  }
  changeSelectedTea(tea: TeaModel): void {
    //console.log(tea)
    this.teaService.setTea(tea);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
