import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

class Body extends Component {
  state = {
    data: null,
    loading: true,
  };
  componentDidMount() {
    this.dataRequest(this.props.match.params.BodyStyle);
  }
  dataRequest = (Body) => {
    fetch(`http://localhost:5000/vahan/${Body}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h2 className='heading'>{this.props.match.params.BodyStyle}s</h2>
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

export default Body;
