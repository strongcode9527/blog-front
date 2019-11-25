import Speed, {Component, render} from 'strong-speed'
import axios from 'axios';
import showdown from 'showdown';
import safeGetValue from '../../utils/safeGetValue';
import formatTime from '../../utils/formatTime';
import './index.less';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    this.coverter = new showdown.Converter();
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/list'
    }).then((data) => {
        this.setState({
          data: safeGetValue([], ['data'], data)
        })
    })
  }

  render() {
    const { data } = this.state;
    console.log(Array.isArray(data), data)
    return (
      <div className="container" id="container">
        {
          data.map((item) => (
            <div>
              <div>{item.title}</div>
              <div>{formatTime(item.updated_at)}</div>
            </div>
          ))
        }
      </div>
    )
  }
}