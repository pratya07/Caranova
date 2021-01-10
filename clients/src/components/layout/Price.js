import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

class Price extends Component {
  state = {
    data: null,
    loading: true,
  };
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.dataRequest(values);
  }
  dataRequest = ({ lessthan, greaterthan }) => {
    fetch(`http://localhost:5000/range`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lessthan,
        greaterthan,
      }),
    })
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h2 className='heading'>Price Range</h2>
        {this.state.data ? (
          this.state.data.map((element) => {
            return (
              <div className='list'>
                <img src={`${element.Image}`} style={{ height: 150 }}></img>
                <Link to={`/Car/${element._id}`}>
                  <h3>{element.Model}</h3>
                </Link>
              </div>
            );
          })
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

export default Price;
