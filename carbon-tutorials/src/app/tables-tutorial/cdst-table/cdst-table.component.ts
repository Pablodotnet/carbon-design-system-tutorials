import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Carbon Elements
import { TableModel } from 'carbon-components-angular';
// App Table Elements
import { CdstTableCoreLayer } from './cdst-table.core-layer';
import { CdstTableService } from '../service/cdst-table.service';
import { Movie } from '../interfaces/Movie';

@Component({
  selector: 'app-cdst-table',
  templateUrl: './cdst-table.component.html',
  styleUrls: ['./cdst-table.component.scss']
})
export class CdstTableComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  tablesDocsUrl = 'https://angular.carbondesignsystem.com/?path=/story/components-table--basic';

  isLoadingResources = false;

  cdstTableModel = new TableModel();
  cdstHeaders = ['Name', 'Description', 'Rate'];

  constructor(
    private coreLayer: CdstTableCoreLayer,
    private cdstTableService: CdstTableService,
  ) { }

  ngOnInit(): void {
    this.setTableHeaders(this.cdstHeaders);
    this.getAllMovies();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setTableHeaders(headers: Array<string>): void {
    this.cdstTableModel.header = this.coreLayer.generateCdstTableHeaders(headers);
  }

  getAllMovies(): void {
    this.toggleLoading();
    this.subscription.add(
      this.cdstTableService.getAllMovies().subscribe(
        (response: Movie[]) => this.setTableData(response),
        error => this.handleError(error),
      )
    );
  }

  setTableData(movies: Movie[]): void {
    const moviesRows = this.coreLayer.generateCdstTableData(movies);
    moviesRows.forEach(movieRow => this.cdstTableModel.addRow(movieRow));
    this.toggleLoading();
  }

  handleError(error: Error) {
    console.error(error);
    this.toggleLoading();
  }

  toggleLoading(): void {
    this.isLoadingResources = !this.isLoadingResources;
  }

}
