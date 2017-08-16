import React from 'react';
import NewsTable from './NewsTable';
import { connect } from 'react-redux'
import * as actions from '../../actions'

function getDatas() {
  const datas = [];
  const startId = datas.length;
  for (let i = 0; i < 12; i++) {
    const id = startId + i;
    datas.push({
      _id: "adasfaga" + id,
      news_title: 'News name ' + id,
      category: Math.floor((Math.random() * 1)),
      news_role: Math.floor((Math.random() * 12)),
      updated_at: "2016-11-15 17:12",
      views: Math.floor((Math.random() * 20000) + 1),
    });
  }
  return datas;
}


class NewsTableRec extends React.Component {
  componentWillMount() {
    this.props.fetchAllNews().then(() => {
      this.datas = this.props.newsList
    })
  }
  constructor(props) {
    super(props);
    console.log(this.props.newsList)
    this.datas = getDatas();
    this.filteredData = [];
    this.filtering = {
      currentFilter: {},
      searchText: []
    };
    this.sorting = {
      sortField: '',
      sortOrder: ''
    };
    this.state = {
      data: this.datas.slice(0, this.props.sizePerPage),
      totalDataSize: this.datas.length,
      sizePerPage: this.props.sizePerPage,
      currentPage: 1
    };
  }
  
  getCurrentData() {
    return (this.filteredData.length > 0) ? this.filteredData : this.datas;
  }

  onSortChange(sortName, sortOrder) {
    let datas = this.getCurrentData();

    datas = this.sort(datas, sortName, sortOrder);

    const currentIndex = (this.state.currentPage - 1) * this.state.sizePerPage;
    this.sorting = {
      sortField: sortName,
      sortOrder: sortOrder
    };
    this.setState({
      data: datas.slice(currentIndex, currentIndex + this.state.sizePerPage)
    });
  }

  sort(list, sortName, sortOrder) {
    if (sortOrder === 'asc') {
      list.sort(function (a, b) {
        if (parseInt(a[sortName], 10) > parseInt(b[sortName], 10)) {
          return 1;
        } else if (parseInt(b[sortName], 10) > parseInt(a[sortName], 10)) {
          return -1;
        }
        return 0;
      });
    } else {
      list.sort(function (a, b) {
        if (parseInt(a[sortName], 10) > parseInt(b[sortName], 10)) {
          return -1;
        } else if (parseInt(b[sortName], 10) > parseInt(a[sortName], 10)) {
          return 1;
        }
        return 0;
      });
    }

    return list;
  }

  onFilterChange(filterObj, colInfos) {
    let data = [];

    if (Object.keys(filterObj).length === 0) {
      this.filtering.currentFilter = {};
      if (this.filtering.searchText.length > 0) {
        this.filteredData = this.search(this.datas, colInfos);
        data = this.filteredData;
      } else {
        this.filteredData = [];
        data = this.datas;
      }
    } else {
      this.filtering.currentFilter = filterObj;
      data = this.filter(this.datas);
      if (this.filtering.searchText.length > 0) {
        data = this.search(data, colInfos);
      }
      this.filteredData = data;
    }

    if (this.sorting.sortField && this.sorting.sortOrder) {
      data = this.sort(data, this.sorting.sortField, this.sorting.sortOrder);
    }

    this.setState({
      data: data.slice(0, this.state.sizePerPage),
      totalDataSize: data.length,
      currentPage: 1
    });
  }

  filter(datas) {
    const currentFilter = this.filtering.currentFilter;
    return datas.filter((product) => {
      let valid = true;
      let filterValue;
      for (const key in currentFilter) {
        const targetValue = product[key];
        switch (currentFilter[key].type) {
          case 'NumberFilter': {
            filterValue = parseInt(currentFilter[key].value.number, 10);
            valid = this.filterNumber(targetValue, filterValue, currentFilter[key].value.comparator);
            break;
          }
          default: {
            filterValue = (typeof currentFilter[key].value === 'string') ?
              currentFilter[key].value.toLowerCase() : currentFilter[key].value;
            valid = this.filterText(targetValue, filterValue);
            break;
          }
        }

        if (!valid) {
          break;
        }
      }
      return valid;
    });
  }

  filterNumber(targetVal, filterVal, comparator) {
    let valid = true;
    switch (comparator) {
      case '=': {
        if (targetVal !== filterVal) {
          valid = false;
        }
        break;
      }
      case '>': {
        if (targetVal <= filterVal) {
          valid = false;
        }
        break;
      }
      case '<=': {
        if (targetVal > filterVal) {
          valid = false;
        }
        break;
      }
      default: {
        console.error('Number comparator provided is not supported');
        break;
      }
    }
    return valid;
  }

  filterText(targetVal, filterVal) {
    if (targetVal.toString().toLowerCase().indexOf(filterVal) === -1) {
      return false;
    }

    return true;
  }

  onSearchChange(searchText, colInfos, multiColumnSearch) {
    let data = [];

    const text = searchText.trim();
    if (text === '') {
      this.filtering.searchText = [];
      if (Object.keys(this.filtering.currentFilter).length !== 0) {
        this.filteredData = this.filter(this.datas);
        data = this.filteredData;
      } else {
        this.filteredData = [];
        data = this.datas;
      }
    } else {
      if (multiColumnSearch) {
        this.filtering.searchText = text.split(' ');
      } else {
        this.filtering.searchText.push(text);
      }
      const datas = this.getCurrentData();
      data = this.search(datas, colInfos);
      this.filteredData = data;
    }

    if (this.sorting.sortField && this.sorting.sortOrder) {
      data = this.sort(data, this.sorting.sortField, this.sorting.sortOrder);
    }

    this.setState({
      data: data.slice(0, this.state.sizePerPage),
      totalDataSize: data.length,
      currentPage: 1
    });
  }

  search(datas, colInfos) {
    const searchText = this.filtering.searchText;
    return datas.filter((product) => {
      const keys = Object.keys(product);
      let valid = false;
      for (let i = 0, keysLength = keys.length; i < keysLength; i++) {
        const key = keys[i];
        if (colInfos[key] && product[key]) {
          const { format, filterFormatted, formatExtraData, searchable, hidden } = colInfos[key];
          let targetVal = product[key];
          if (!hidden && searchable) {
            if (filterFormatted && format) {
              targetVal = format(targetVal, product, formatExtraData);
            }
            for (let j = 0, textLength = searchText.length; j < textLength; j++) {
              const filterVal = searchText[j].toLowerCase();
              if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
                valid = true;
                break;
              }
            }
          }
        }
      }
      return valid;
    });
  }

  onPageChange(page, sizePerPage) {
    const datas = this.getCurrentData();

    const currentIndex = (page - 1) * sizePerPage;
    this.setState({
      data: datas.slice(currentIndex, currentIndex + sizePerPage),
      currentPage: page
    });
  }

  onSizePerPageList(sizePerPage) {
    const datas = this.getCurrentData();

    let currentIndex = (this.state.currentPage - 1) * sizePerPage;
    if (currentIndex > datas.length - 1) {
      const lastPage = Math.ceil(datas.length / sizePerPage);
      currentIndex = (lastPage - 1) * sizePerPage;
    }
    this.setState({
      data: datas.slice(currentIndex, currentIndex + sizePerPage),
      sizePerPage: sizePerPage
    });
  }

  onDeleteRow(row) {
    this.datas = this.datas.filter((product) => {
      return product.id !== row[0];
    });

    if (this.filteredData.length > 0) {
      this.filteredData = this.filteredData.filter((product) => {
        return product.id !== row[0];
      });
    }

    const data = this.getCurrentData();

    // if we removed the last item of the current page, then we will jump to the page before
    const currentPage = (this.state.data.length === 1) ?
      this.state.currentPage - 1 : this.state.currentPage;

    const currentIndex = (currentPage - 1) * this.state.sizePerPage;
    this.setState({
      data: data.slice(currentIndex, currentIndex + this.state.sizePerPage),
      totalDataSize: data.length,
      currentPage: currentPage
    });
  }

  onExportToCSV() {
    return this.getCurrentData();
  }

  render() {
    console.log(this.props.newsList)
    return (
      <NewsTable onSortChange={this.onSortChange.bind(this)}
        onFilterChange={this.onFilterChange.bind(this)}
        onSearchChange={this.onSearchChange.bind(this)}
        onPageChange={this.onPageChange.bind(this)}
        onSizePerPageList={this.onSizePerPageList.bind(this)}
        onDeleteRow={this.onDeleteRow.bind(this)}
        onExportToCSV={this.onExportToCSV.bind(this)}
        { ...this.state } />
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    newsList: state.news.all_news
  }
}
export default connect(mapStateToProps, actions)(NewsTableRec)