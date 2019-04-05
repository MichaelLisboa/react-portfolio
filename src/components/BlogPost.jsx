import React, { Component } from 'react';
import { getBlogPostBySlug } from '../lib/contentful';
import BlogPostContent from './presentation/BlogPostContent.jsx';
import Contact from './Contact.jsx';

import '../css/Blog.css';

class BlogPost extends Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            subtitle: '',
            mainImage: '',
            date: '',
            content: '',
            imageGallery: '',
            path: '',
            status: '',
            isLoading: true
        };
    }

    componentDidMount () {
        const slug = this.props.match.params.blog;
        getBlogPostBySlug(slug)
            .then(response => {
                const post = response.items[0].fields;
                this.setState({ ...post, isLoading: false });
            })
    }

    render () {
        if (this.state.isLoading) {
            return (
                <div / >
            );
        }

        return (
            <React.Fragment>
                <BlogPostContent blog={this.state} />
                <Contact />
            </React.Fragment>
        );
    }
}

export default BlogPost;
