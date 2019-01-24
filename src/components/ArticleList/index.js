import React, {Component, PureComponent} from 'react'
import Article from "../Article";
import './style.css'

export default class ArticleList extends PureComponent{

    constructor(props){
        super(props)

        this.state = {
            openArticleId: null
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }


    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //
    //     return true
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {


        const articleElements = this.props.articles.map((article, index) =>
            <li className="article-list__li" key={article.id}>
                <Article article={article}
                         isOpen={this.state.openArticleId === article.id}
                         onButtonClick = {this.handleClick.bind(this, article.id)}
                />
            </li>
        )

        return (
            <ul>
                {articleElements}
            </ul>
        )

    }

    handleClick = openArticleId => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        })
    }

}