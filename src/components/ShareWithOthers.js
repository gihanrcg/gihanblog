import React, { Component } from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    TwitterShareButton
} from 'react-share';
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share";

class ShareWithOthers extends Component {
    render() {
        return (
            <div>
                Share this article :)
                <table cellPadding="5px">
                    <tbody>
                        <tr>
                            <td>
                                <FacebookShareButton
                                    url={this.props.url}
                                    quote={this.props.title}
                                    className="Demo__some-network__share-button"
                                >
                                    <FacebookIcon size={48} round />
                                </FacebookShareButton>
                            </td>
                            <td>
                                <LinkedinShareButton
                                    url={this.props.url}
                                    quote={this.props.title}
                                    className="Demo__some-network__share-button"
                                >
                                    <LinkedinIcon size={48} round />
                                </LinkedinShareButton>
                            </td>
                            <td>
                                <TwitterShareButton
                                    url={this.props.url}
                                    quote={this.props.title}
                                    className="Demo__some-network__share-button"
                                >
                                    <TwitterIcon size={48} round />
                                </TwitterShareButton>
                            </td>
                            <td>
                                <WhatsappShareButton
                                    url={this.props.url}
                                    quote={this.props.title}
                                    className="Demo__some-network__share-button"
                                >
                                    <WhatsappIcon size={48} round />
                                </WhatsappShareButton>
                            </td>
                        </tr>
                    </tbody>
                </table>







            </div>
        );
    }
}

export default ShareWithOthers;