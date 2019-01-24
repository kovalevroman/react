import React, {Component, PureComponent} from 'react'


class Article extends PureComponent{

    constructor(props){

        console.log('constructor article');

        super(props)

        this.state = {
            count: 0
        }

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    // Получены свойства
    // componentWillReceiveProps(nextProps, nextContext) {
    //
    //     if (nextProps.isOpen !== this.props.isOpen){
    //         this.setState({
    //             isOpen: nextProps.isOpen
    //         })
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return (this.state.isOpen !== nextState.isOpen)
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update article')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render(){

        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className="card-text">{article.text}</section>;

        return (
            <div className="card" style={{width: '50%'}}>
                <div className="card-header">
                    <h2 onClick={this.counter}>
                        {article.title} clicked {this.state.count}
                        <button className="btn btn-primary float-right" onClick={onButtonClick}>{isOpen?'close':'open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                </div>
                <h3>creation date {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    counter = () => {
        this.setState({
            count: this.state.count + 1
        })

    }
}

export default Article