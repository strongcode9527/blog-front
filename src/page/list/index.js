import Speed, {Component, render} from 'strong-speed'
import axios from 'axios';
import showdown from 'showdown';
import safeGetValue from '../../utils/safeGetValue';
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [{
        title: '000'
      }]
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
    const {data} = this.state;
    console.log(this.state.data)
    return (
      <div className="container" id="container">
        {
          data.map((item => (
            <div>
              {item.title}
            </div>
          )))
        }
      </div>
    )
  }
}