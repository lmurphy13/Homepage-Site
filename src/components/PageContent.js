/* Copyright (c) 2024 - Liam M. Murphy */

import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';

class PageContent extends React.Component {
    getPage() {
        switch (this.props.page) {
            case "home": return (<Home/>);
            case "about": return (<About/>);
            default:
                return (<span>Unimplemented page</span>);
        }
    }

    render() {
        return (
            <>
                {this.getPage()}
            </>
        );
    }
}

export default PageContent;