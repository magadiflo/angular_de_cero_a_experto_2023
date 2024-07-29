import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Input() initialValue: string = '';
  @Input() placeholder: string = 'Buscar';
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  private _debouncer$: Subject<string> = new Subject();
  private _unsubscribe$: Subject<void> = new Subject();

  ngOnInit(): void {
    this._debouncer$
      .pipe(
        takeUntil(this._unsubscribe$),
        debounceTime(500)
      )
      .subscribe(value => this.onDebounce.emit(value));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }

  onKeyPress(searchTerm: string): void {
    this._debouncer$.next(searchTerm);
  }

}
