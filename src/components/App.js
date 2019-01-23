import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component{

    constructor(props){
        console.log('constructor app')
        super(props)

        this.state = {
            reverted: false
        }
    }

    componentWillMount() {
        console.log('will mount App')
    }

    componentDidMount() {
        console.log('did mount App')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will receive props App')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should update App')
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update App')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update App')
    }

    render(){

        console.log('render App')

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3"> App Name
                        <button className="btn" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.reverse() : articles} />
            </div>
        )
    }

    revert = () => {
        console.log('before set state')

        this.setState({
            reverted: !this.state.reverted
        })

        console.log('after set state')
    }

}

export default App