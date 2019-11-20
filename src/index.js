import Speed, {Component, render} from 'strong-speed'
import axios from 'axios';
import showdown from 'showdown';
import Detail from './page/details';
import List from './page/list';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      body: '',
      title: '',
      showList: false
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
    setTimeout(() => {
      this.setState({
        showList: true
      })
    }, 1000) 
  }

  componentDidUpdate() {
    console.log('in update')
  }

  handleClick = () => {
    console.log('insssss');
  }

  render() {
    const { body, title, showList } = this.state;
    console.log(this);
    return (
      <div className="container" id="container">
        {this.state.showList && <List /> }
        {false && <Detail />}
      </div>
    )
  }
}

render(<App aa="aaa"></App>, document.getElementById('root'))