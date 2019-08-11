import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from './core/services/test.service';
import { HttpErrorService } from './core/services/http-error.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './core/services/auth.service';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('myGrid') myGrid: AgGridAngular;

  private gridOptions: Partial<GridOptions>;
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  userSubscriber: Subscription;

  rowData: any;

  constructor(
    private authService: AuthService,
    private test: TestService) {

    this.columnDefs = [
      { headerName: 'User Id', field: 'id', sortable: true },
      { headerName: 'First Name', field: 'first_name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Last Name', field: 'last_name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Email', field: 'email', sortable: true },
      { headerName: 'Gender', field: 'gender', sortable: true },
      { headerName: 'Company', field: 'company', sortable: true }
    ];

    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 2;

    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 90,
      paginationPageSize: 90,
      rowModelType: 'infinite',
    }
  }

  onGridReady(params) {
    console.log('On Grid Ready');

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var datasource = {
      getRows: (params: IGetRowsParams) => {
        //  TODO: Call a service that fetches list of users
        console.log("Fetching startRow " + params.startRow + " of " + params.endRow);
        console.log(params);
        this.test.getUsers(params)
          .subscribe(data => { 
            console.log(data);
            params.successCallback(data['users'], data['totalRecords']) 
          });
      }
    }

    this.gridApi.setDatasource(datasource);
  }

  onPaginationChanged() {

  }

  ngOnInit() { }
}
