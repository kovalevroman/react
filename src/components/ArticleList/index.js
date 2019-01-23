import React, {Component} from 'react'
import Article from "../Article";
import './style.css'

export default class ArticleList extends Component{

    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will receive props in articleList')
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should component update articleList')
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update articleList')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update articleList')
    }

    render() {

        console.log('render articleList')
        const articleElements = this.props.articles.map((article, index) =>
            <li className="article-list__li" key={article.id}><Article article={article} defaultOpen={index === 0}/></li>
        )

        return (
            <ul>
                {articleElements}
            </ul>
        )

    }
}