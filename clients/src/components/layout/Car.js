import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

class Car extends Component {
  state = {
    carData: [],
    loading: true,
    column: [
      {
        title: 'Brand',
        key: '1',
        dataIndex: 'Brand',
      },
      {
        title: 'Name',
        key: '2',
        dataIndex: 'Model',
      },
      {
        title: 'Price',
        key: '3',
        dataIndex: 'Price',
      },
      {
        title: 'Fuel',
        key: '4',
        dataIndex: 'Fuel',
      },
      {
        title: 'Engine',
        key: '5',
        dataIndex: 'Engine',
      },
      {
        title: 'Body',
        key: '6',
        dataIndex: 'Body',
      },
      {
        title: 'Seats',
        key: '7',
        dataIndex: 'Seats',
      },
    ],
  };
  componentDidMount() {
    this.dataRequest(this.props.match.params.CarId);
  }
  dataRequest = (CarId) => {
    fetch(`http://localhost:5000/gaadi/${CarId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ carData: [json], loading: false });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        {this.state.carData.length > 0 ? (
          <div>
            <img
              className='image'
              src={this.state.carData[0].Image}
              style={{ height: 450 }}
            />
            <Table
              dataSource={this.state.carData}
              columns={this.state.column}
              pagination={{
                total: this.state.carData.length,
                pageSize: this.state.carData.length,
                hideOnSinglePage: true,
              }}
            />
            <Link to={`/Showrooms/${this.state.carData[0].Brand}`}>
              <div align='center' style={{ paddingTop: 40, paddingBottom: 40 }}>
                <button class='example_d'>View Showrooms</button>
              </div>
            </Link>
          </div>
        ) : (
          <div
            align='center'
            style={{
              justifyContent: 'center',
              marginTop: '10%',
              marginBottom: '10%',
            }}
          >
            <Spin indicator={antIcon} />
          </div>
        )}
      </div>
    );
  }
}

export default Car;
