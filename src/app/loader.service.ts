import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
private isLoadingBehaviro = new BehaviorSubject(false)
constructor() { }

getLoading(){
  return this.isLoadingBehaviro
}
setLoading(newValue){
this.isLoadingBehaviro.next(newValue)
}
}
