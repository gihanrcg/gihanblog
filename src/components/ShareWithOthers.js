import React, { Component } from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    TwitterShareButton
} from 'react-share';
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share";

class ShareWithOthers extends Component {
    render() {
        return (
            <div>
                <table cellPadding="5px">
                    <tr>
                        Share
                        </tr>
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
                </table>







            </div>
        );
    }
}

export default ShareWithOthers;