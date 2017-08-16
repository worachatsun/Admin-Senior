import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn, SearchField } from 'react-bootstrap-table';
import { browserHistory } from 'react-router'


export default class EventsTablesMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
              if (confirm("Would you like to see Event details?") == true) {
                alert(`You will go view detail of ${row.name}. `);
                browserHistory.push('#/Events/Detail');
                location.reload();
              } else {
                alert(`You cancel.`);
              }
            }
          }}>
          <TableHeaderColumn dataField='id' isKey dataSort>EventId</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter' }} dataSort>Events name</TableHeaderColumn>
          <TableHeaderColumn dataField='limit' filter={{
            type: 'NumberFilter',
            numberComparators: ['=', '>', '<='],
            defaultValue: { number: 0, comparator: '>' }
          }} dataSort>Person limit</TableHeaderColumn>
          <TableHeaderColumn dataField='location' filter={{ type: 'TextFilter' }} dataSort>location</TableHeaderColumn>
          <TableHeaderColumn dataField='RegisterDate' filter={{ type: 'DateFilter' }} dataSort>Register Date</TableHeaderColumn>
          <TableHeaderColumn dataField='EventDate' filter={{ type: 'DateFilter' }} dataSort>Events Date</TableHeaderColumn>
          <TableHeaderColumn dataField='EventOwner' filter={{ type: 'TextFilter' }} dataSort>Events Owner</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
