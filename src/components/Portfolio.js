import React, { Component } from 'react';
import PortfolioItem from './presentation/PortfolioItem';
import { compose } from 'recompose';
import Contact from './Contact';
import '../css/Portfolio.css';
import { getPosts } from '../lib/contentful';

const headerStyles = {
    height: '30vh',
    backgroundColor: '#49839a'
};

const withLoading = (Component) => (props) =>
    <>
        <Component {...props} />
        <div className="interactions uk-container uk-container-expand uk-text-center uk-margin-large">
            {props.isLoading && <span className="uk-padding-remove uk-margin-remove uk-spinner" data-uk-spinner="ratio: 1" />}
        </div>
    </>

const PortfolioItems = ({items}) =>
    <section className="uk-section">
        <div className="uk-container uk-container-small">
            <div className="portfolio-items uk-grid uk-grid-small uk-child-width-1-2@m" data-uk-grid data-uk-height-match="target: .uk-card-body">
                {items}
            </div>
        </div>
    </section>

class Portfolio extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true
        };
    }

    componentDidMount () {
        getPosts()
            .then(response => {
                const posts = response.items.map(item => item.fields);
                this.setState({
                    posts,
                    isLoading: false
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render () {
        if (!this.state.posts.length) return null;
        const portfolioNodes = this.state.posts
            .sort((a, b) => new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime())
            .map((post, i) => {
                return (
                    <PortfolioItem
                        key={post.entrySlug}
                        portfolioItem={post}
                    />
                );
            });

        return (
            <>
                <header style={headerStyles}
                    className="uk-container uk-container-expand uk-light
                    uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-width-4-5 uk-width-2-3@s uk-text-center">
                        <h2>
                            <span className="uk-text-nowrap uk-margin-small-right">Brand.</span>
                            <span className="uk-text-nowrap uk-margin-small-right">UX.</span>
                            <span className="uk-text-nowrap">Code.</span>
                        </h2>
                        <p className="header-lead uk-text-lead uk-margin-remove-vertical">
                            Case studies of my work.
                        </p>
                    </div>
                </header>
                <PortfolioItemsWithLoading
                    items={portfolioNodes}
                    isLoading={this.state.isLoading}
                    />
                <Contact />
            </>
        );
    }
}

const PortfolioItemsWithLoading = compose(
    withLoading,
)(PortfolioItems);

export default Portfolio;
