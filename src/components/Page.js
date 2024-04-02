/* Copyright (c) 2024 - Liam M. Murphy */

import React from "react";
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import PageContent from "./PageContent";

class Page extends React.Component {
    render() {
        return (
            <div>
                <CustomHeader />
                <PageContent page={this.props.page} />
                <CustomFooter />
            </div>
        );
    }
}

export default Page;
