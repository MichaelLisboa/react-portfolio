import React, {Component} from "react";

import SonyLogo from '../../images/client_logos/sony.png';
import CitibankLogo from '../../images/client_logos/citibank.png';
import HpLogo from '../../images/client_logos/hp.png';
import AnzLogo from '../../images/client_logos/anz.png';
import MicrosoftLogo from '../../images/client_logos/microsoft.png';
import OreoLogo from '../../images/client_logos/oreo.png';
import RaidersLogo from '../../images/client_logos/raiders.png';
import InseadLogo from '../../images/client_logos/insead.png';
import NecLogo from '../../images/client_logos/nec.png';
import AiaLogo from '../../images/client_logos/aia.png';
import FairmontLogo from '../../images/client_logos/fairmont.png';
import PepsiLogo from '../../images/client_logos/pepsi.png';

const clients = [SonyLogo, CitibankLogo, HpLogo, AnzLogo, MicrosoftLogo, OreoLogo,
    RaidersLogo, InseadLogo, NecLogo, AiaLogo, FairmontLogo, PepsiLogo]

const clientLogos = clients.map((logo, i) => {
    return (
        <div key={i}>
            <img
                src={logo}
                alt="client"
                data-uk-img
            />
        </div>
    )
})

class ClientsContent extends Component {
    render () {
        return (
            <div className="client-grid uk-grid-small uk-child-width-1-4 uk-child-width-1-3@s uk-child-width-1-4@m
                uk-margin-remove-top uk-margin-medium-top@m uk-margin-large-bottom" data-uk-grid>
                {clientLogos}
            </div>
        )
    }
};

export default ClientsContent;
