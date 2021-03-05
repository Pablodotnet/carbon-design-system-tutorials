import { Injectable } from "@angular/core";

// Carbon Elements
import { TableHeaderItem, TableItem } from "carbon-components-angular";

// Cdst Table Elements
import { Movie } from "../interfaces/Movie";

@Injectable({
    providedIn: 'root'
})
export class CdstTableCoreLayer {

    generateCdstTableHeaders(headers: string[]): Array<TableHeaderItem> {
        return headers.map(header => new TableHeaderItem({ data: header }));
    }

    generateCdstTableData(movies: Movie[]): Array<TableItem[]> {
        return movies.map(movie => this.generateCdstTableRow(movie));
    }

    generateCdstTableRow({ name, description, rate }: Movie): TableItem[] {
        return [
            new TableItem({ data: name }),
            new TableItem({ data: description }),
            new TableItem({ data: rate }),
        ];
    }

}