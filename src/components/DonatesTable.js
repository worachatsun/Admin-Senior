import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn, SearchField } from 'react-bootstrap-table';
import { browserHistory } from 'react-router'
export default class DonatesTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BootstrapTable data={this.props.data}
                remote={true}
                pagination={true}
                search={true}
                multiColumnSearch={true}
                fetchInfo={{ dataTotalSize: this.props.totalDataSize }}
                deleteRow={true} selectRow={{ mode: 'checkbox' }}
                options={{
                    sizePerPage: this.props.sizePerPage,
                    sizePerPageList: [5, 10],
                    page: this.props.currentPage,
                    onPageChange: this.props.onPageChange,
                    onSizePerPageList: this.props.onSizePerPageList,
                    onSortChange: this.props.onSortChange,
                    onFilterChange: this.props.onFilterChange,
                    onSearchChange: this.props.onSearchChange,
                    onDeleteRow: this.props.onDeleteRow,
                    onExportToCSV: this.props.onExportToCSV,
                    onRowClick: function (row) {
                        if (confirm("Would you like to see news details?") == true) {
                            alert(`You will go view detail of ${row.news_title}. `);
                            browserHistory.push('#/News/Detail');
                            location.reload();
                        } else {
                            alert(`You cancel.`);
                        }
                    }
                }}>
                <TableHeaderColumn dataField='DonateId' isKey dataSort>DonateId</TableHeaderColumn>
                <TableHeaderColumn dataField='project_name' filter={{ type: 'TextFilter' }} dataSort>Donates name</TableHeaderColumn>
                <TableHeaderColumn dataField='project_owner' filter={{ type: 'TextFilter' }} dataSort>Owner name</TableHeaderColumn>
                <TableHeaderColumn dataField='created_at' filter={{ type: 'DateFilter' }} dataSort>Created at</TableHeaderColumn>
                <TableHeaderColumn dataField='updated_at' filter={{ type: 'DateFilter' }} dataSort>Updated_at</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}
