import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Note } from '../../models/note';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnChanges {
  private pNotes: Note[];
  @Input() set notes(notes: Note[]) {
    if (notes) {
      this.pNotes = notes;
    }
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.pNotes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Note>(this.pNotes);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue
    .trim()
    .toLowerCase();
  }
}
