import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn, SearchField } from 'react-bootstrap-table';
import { browserHistory } from 'react-router'

export default class CareersTables extends React.Component {
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
              alert(`You will go view detail of ${row.career_name}. `);
              browserHistory.push('#/News/Detail');
              location.reload();
            } else {
              alert(`You cancel.`);
            }
          }
        }}>
        <TableHeaderColumn dataField='careerId' isKey dataSort>DonateId</TableHeaderColumn>
        <TableHeaderColumn dataField='career_name' filter={{ type: 'TextFilter' }} dataSort>Donates name</TableHeaderColumn>
        <TableHeaderColumn dataField='Capacity' filter={{
          type: 'NumberFilter',
          numberComparators: ['=', '>', '<='],
          defaultValue: { number: 0, comparator: '>' }
        }} dataSort>Capacity</TableHeaderColumn>
        <TableHeaderColumn dataField='Company' filter={{ type: 'TextFilter' }} dataSort>Company</TableHeaderColumn>
        <TableHeaderColumn dataField='created_at' filter={{ type: 'DateFilter' }} dataSort>Created at</TableHeaderColumn>
        <TableHeaderColumn dataField='updated_at' filter={{ type: 'DateFilter' }} dataSort>Updated at</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
