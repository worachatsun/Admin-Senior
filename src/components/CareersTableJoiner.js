import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn, SearchField } from 'react-bootstrap-table';
import { browserHistory } from 'react-router'

export default class CareerTablesJoiner extends React.Component {
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
          exportCSV={true}
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
                alert(`You will go view detail of ${row.name}. `);
                browserHistory.push('#/News/Detail');
                location.reload();
              } else {
                alert(`You cancel.`);
              }
            }
          }}>
          <TableHeaderColumn dataField='id' isKey filter={{ type: 'TextFilter' }} dataSort>User Id</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter' }} dataSort>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='surname' filter={{ type: 'TextFilter' }} dataSort>Surname</TableHeaderColumn>
          <TableHeaderColumn dataField='phone' filter={{ type: 'TextFilter' }} dataSort>Tel.</TableHeaderColumn>
          <TableHeaderColumn dataField='email' filter={{ type: 'TextFilter' }} dataSort>E-mail</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
