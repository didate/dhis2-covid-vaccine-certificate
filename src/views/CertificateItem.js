

import React, { Component } from 'react'

export default class CertificateItem extends Component {


    render() {
        const { person } = this.props;


        const code = person.attributes ? person.attributes.filter(item => item.attribute === 'A1bNxMuvb66')[0].value : ''
        const nom = person.attributes ? person.attributes.filter(item => item.attribute === 'bbOBxG4F6ja')[0].value : ''
        const prenom = person.attributes ? person.attributes.filter(item => item.attribute === 'bXEwbxbLR9a')[0].value : ''
        const telephone = person.attributes ? person.attributes.filter(item => item.attribute === 'cWAOfDiaXRJ')[0].value : ''


        return (
            <div className="main-body">
                <div className="row gutters-sm">

                    <div className="col-md-8">

                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4>John Doe</h4>
                                        <p className="text-secondary mb-1">Full Stack Developer</p>
                                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                        <br />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Code</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {code}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Nom</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {nom}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Prenom</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {prenom}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Téléphone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {telephone}
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
