import Speed, {Component, render} from 'strong-speed'
import axios from 'axios';
import showdown from 'showdown';
class App extends Component {
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
          title: data.title,
          body: this.coverter.makeHtml(data.data.body)
        })
        const container = document.getElementById('container').innerHTML = this.coverter.makeHtml(data.data.body)
    })
  }

  componentDidUpdate() {
    console.log('in update')
  }

  handleClick = () => {
    console.log('insssss');
  }

  render() {
    console.log(this.state)

    return (
      <div onClick={() => {console.log('in')}} style={{background: 'red'}} className="container" id="container">
        <span data-index={this.state.num}>strong2</span>
      </div>
    )
  }
}

render(<App aa="aaa"></App>, document.getElementById('root'))