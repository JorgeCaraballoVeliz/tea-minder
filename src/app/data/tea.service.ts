import { Injectable } from '@angular/core';
import { TeaModel } from '../models/tea.model';
import { BehaviorSubject, Observable, Subject, delay, of } from 'rxjs';
import { FAKE_DATA } from './fake-data';

@Injectable({
  providedIn: 'root'
})
export class TeaService {
  private _teaSelected: BehaviorSubject<TeaModel> = new BehaviorSubject<TeaModel>(FAKE_DATA[2]);
  teaSelected: Observable<TeaModel> = this._teaSelected.asObservable();

  constructor() { }

  getAllTeas(): Observable<TeaModel[]> {
    console.log('GET ALL TEAS')
    return of<TeaModel[]>(FAKE_DATA).pipe(delay(100));
  }

  setTea(tea: TeaModel): void {
    this._teaSelected.next(tea);
  }
  /*
  owo(): number {
    return 3;
   
  }
   */
}
