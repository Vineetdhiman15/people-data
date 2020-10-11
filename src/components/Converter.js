import React from 'react';
import {
  connect
} from 'react-redux';
import {
  getDataOnLoad,
} from '../redux/action/index';

class Converter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount() {
      this.props.getDataOnLoad()
    }

    render() {
      const data = this.props.data ? this.props.data.map((item,i) => <ul key={i}><li>{item.id}</li>
      <li>First Name: {item.first_name}</li>
      <li>Last Name: {item.last_name}</li>
      <li>Email ID: {item.email}</li>
      <img src={item.avatar} alt='profilePicture'/>
      </ul>) : null
      return (
        this.props.data == null ? 'Loading' :
        <div>
        {data}
        </div>
        );
      }
    }

    const mapStateToProps = state => ({
      data: state.data
    })

    const mapDispatchToProps = dispatch => ({
      getDataOnLoad: () => dispatch(getDataOnLoad()),
    })

    export default connect(mapStateToProps, mapDispatchToProps)(Converter);
