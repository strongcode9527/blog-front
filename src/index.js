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
      showState: 1
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
    const { body, title, showList, showState } = this.state;
    return (
      <div className="container" id="container">
        { showState === 0 && <List /> }
        { showState === 1 && <Detail id={1} />}
      </div>
    )
  }
}

render(<App aa="aaa"></App>, document.getElementById('root'))