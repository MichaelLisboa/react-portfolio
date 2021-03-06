import React from 'react';
import './Testimonials.css';

const Testimonials = props =>
    <section
        style={{backgroundColor: '#eceff1'}}
        className="uk-section uk-section-default uk-padding-small"
        uk-scrollspy={`cls: uk-animation-fade; delay: 500;`}>
        <div className="uk-container uk-container-small uk-child-width-2-3@m uk-margin-large-bottom uk-margin-large-top">
            <div className="testimonials uk-position-relative uk-margin-auto-left uk-margin-auto-right" data-uk-slider="autoplay: true;">
                <ul className="uk-slider-items uk-child-width-1-1">
                    <li>
                        <div className="">
                            <p className="uk-text-large">
                                <span className="uk-dropcap uk-float-left"
                                    data-uk-icon="icon: quote-right; ratio: 3;" />
                                We hired Michael to help define our entire user interface. The result was a
                                visually stunning UI that was also very intuitive to use.
                                Michael provided a huge amount of leadership, expertise and insight that
                                helped us navigate through the process to a great end result."
                            </p>
                            <p className="uk-text-center uk-text-bold">Daniel Dyer</p>
                            <p className="uk-text-meta uk-text-center">Hewlett-Packard, Distinguished technologist and senior architect</p>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <p className="uk-text-large">
                                <span className="uk-dropcap uk-float-left"
                                    data-uk-icon="icon: quote-right; ratio: 3;" />
                                Working with Michael on Elite Model Look 2012 was a pleasurable experience.
                                Michael is always generous to share his expertise and knowledge in the digital
                                space, he turned our rough ideas into clear concepts that surpassed our
                                expectations."
                            </p>
                            <p className="uk-text-center uk-text-bold">Eric Alexandre Ceret</p>
                            <p className="uk-text-meta uk-text-center">Executive Producer, Elite Models</p>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <p className="uk-text-large">
                                <span className="uk-dropcap uk-float-left"
                                    data-uk-icon="icon: quote-right; ratio: 3;" />
                                Michael worked very well with our company and delivered a very slick
                                product on time. He was willing to work with us on billing. His team
                                also really helped us with strategic marketing research to form our brand.
                                We wouldn't be the same without him."
                            </p>
                            <p className="uk-text-center uk-text-bold">David Neubert</p>
                            <p className="uk-text-meta uk-text-center">Co-Founder, Kapitall</p>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <p className="uk-text-large">
                                <span className="uk-dropcap uk-float-left"
                                data-uk-icon="icon: quote-right; ratio: 3;" />
                                Michael is one of those people who possesses the rare combination of strategic
                                business acumen, stunningly creative design talent, and the expert technical
                                chops to make it all happen. I have enjoyed working with Michael and would
                                gladly work with him again."
                            </p>
                            <p className="uk-text-center uk-text-bold">Mason Hale</p>
                            <p className="uk-text-meta uk-text-center">CEO/Founder, TeamTopia</p>
                        </div>
                    </li>
                </ul>
                <div className="uk-margin-medium-top">
                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                </div>
            </div>
        </div>
    </section>

export default Testimonials;
