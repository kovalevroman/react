import React, {Component} from 'react'


class Article extends Component{

    constructor(props){

        console.log('constructor article');

        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }

    }

    componentWillMount() {
        console.log('will mount article' + this.props.article.id)

    }

    componentDidMount() {
        console.log('did mount article' + this.props.article.id)
    }

    // Получены свойства
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will receive props in article')
        if (nextProps.defaultOpen !== this.props.defaultOpen){
            this.setState({
                isOpen: nextProps.defaultOpen
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should update article')
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update article')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update article')
    }


    render(){
        console.log('render article')
        const {article} = this.props;
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>;

        return (
            <div className="card" style={{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-primary float-right" onClick={this.handleClick}>{this.state.isOpen?'close':'open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                </div>
                <h3>creation date {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {

        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article