import Speed, {Component, render} from 'strong-speed'
import axios from 'axios';
import showdown from 'showdown';
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      body: '',
      title: ''
    }
    this.coverter = new showdown.Converter();
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/blog/1'
    }).then((data) => {
        this.setState({
          title: data.data.title,
          body: this.coverter.makeHtml(data.data.body)
        });
    })
  }

  componentDidUpdate() {
    console.log('in update')
  }

  handleClick = () => {
    console.log('insssss');
  }

  render() {
    const {body, title} = this.state;
    return (
      <div className="container" id="container">
        list
      </div>
    )
  }
}