import React, {Component} from 'react'


class Article extends Component{

    state = {
        isOpen: true
    }

    render(){
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