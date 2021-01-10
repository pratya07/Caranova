import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Input, Tabs, Slider, Switch, Button } from 'antd';

const { Search } = Input;

const { TabPane } = Tabs;

class Landing extends Component {
  state = {
    values: [500000, 1000000],
    ModelName: null,
  };
  render() {
    return (
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='large'>Find Your Car</h1>
            <Search
              style={{ marginBottom: '4%' }}
              className='search'
              placeholder='Search by model name'
              onSearch={(e) =>
                this.setState({ ModelName: e }, () =>
                  this.props.history.push(`/Model/${this.state.ModelName}`)
                )
              }
            />

            <br />
            <p>
              <Tabs className='tabs'>
                <TabPane tab='Brands' key='1'>
                  <div>
                    <Link to='/Brand/Maruti Suzuki'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Maruti Suzuki')}
                      >
                        Maruti Suzuki
                      </a>
                    </Link>
                    <Link to='/Brand/Hyundai'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Hyundai')}
                      >
                        Hyundai
                      </a>
                    </Link>
                    <Link to='/Brand/Tata'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Tata')}
                      >
                        Tata
                      </a>
                    </Link>
                    <Link to='/Brand/Toyota'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Toyota')}
                      >
                        Toyota
                      </a>
                    </Link>
                    <Link to='/Brand/Honda'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Honda')}
                      >
                        Honda
                      </a>
                    </Link>
                    <Link to='/Brand/Mahindra'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Mahindra')}
                      >
                        Mahindra
                      </a>
                    </Link>
                    <Link to='/Brand/Ford'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Ford')}
                      >
                        Ford
                      </a>
                    </Link>
                    <Link to='/Brand/Volkswagen'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Volkswagen')}
                      >
                        Volkswagen
                      </a>
                    </Link>
                    <Link to='/Brand/Renault'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Renault')}
                      >
                        Renault
                      </a>
                    </Link>
                    <Link to='/Brand/Skoda'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Skoda')}
                      >
                        Skoda
                      </a>
                    </Link>
                    <Link to='/Brand/MG'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('MG')}
                      >
                        MG
                      </a>
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab='Budget' key='2'>
                  <Slider
                    onChange={(element) => this.setState({ values: element })}
                    range
                    min={100000}
                    max={5000000}
                    defaultValue={this.state.values}
                  />
                  <Link
                    to={{
                      pathname: '/Budget/',
                      search: `?greaterthan=${this.state.values[0]}&lessthan=${this.state.values[1]}`,
                    }}
                  >
                    <div align='center'>
                      <button class='example_d'>Search</button>
                    </div>
                  </Link>
                </TabPane>
                <TabPane tab='Body Type' key='3'>
                  <div>
                    <Link to='/Types/Hatchback'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Hatchback')}
                      >
                        Hatchback
                      </a>
                    </Link>
                    <Link to='/Types/SUV'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('SUV')}
                      >
                        SUV
                      </a>
                    </Link>
                    <Link to='/Types/MUV'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('MUV')}
                      >
                        MUV
                      </a>
                    </Link>
                    <Link to='/Types/Sedan'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Sedan')}
                      >
                        Sedan
                      </a>
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab='Fuel Type' key='4'>
                  <div>
                    <Link to='/Fuel/Petrol'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Petrol')}
                      >
                        Petrol
                      </a>
                    </Link>
                    <Link to='/Fuel/Diesel'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('Diesel')}
                      >
                        Diesel
                      </a>
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab='Seating Capacity' key='5'>
                  <div>
                    <Link to='/Cars/5'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('5')}
                      >
                        Five
                      </a>
                    </Link>
                    <Link to='/Cars/6'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('6')}
                      >
                        Six
                      </a>
                    </Link>
                    <Link to='/Cars/7'>
                      <a
                        className='links'
                        onClick={() => this.dataRequest('7')}
                      >
                        Seven
                      </a>
                    </Link>
                  </div>
                </TabPane>
              </Tabs>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(Landing);
