import QRCode from "react-qr-code";
import React, { Component } from 'react'
import './page.css'
import embleme from '../images/embleme.jpg'
import anss from '../images/anss.png'

export default class CertificateItem extends Component {


    render() {
        const { person } = this.props;


        const code = person.attributes ? person.attributes.filter(item => item.attribute === 'A1bNxMuvb66')[0].value : ''
        const nom = person.attributes ? person.attributes.filter(item => item.attribute === 'bbOBxG4F6ja')[0].value : ''
        const prenom = person.attributes ? person.attributes.filter(item => item.attribute === 'bXEwbxbLR9a')[0].value : ''
        const telephone = person.attributes ? person.attributes.filter(item => item.attribute === 'cWAOfDiaXRJ')[0].value : ''
        const quartier = person.attributes ? person.attributes.filter(item => item.attribute === 'wlud1vswX9j')[0].value : ''
        const region = person.attributes ? person.attributes.filter(item => item.attribute === 'WAvcn9eW1IH')[0].value : ''
        const district = person.attributes ? person.attributes.filter(item => item.attribute === 'rkQEv1WFZ1u')[0].value : ''
        const sousPrefecture = person.attributes ? person.attributes.filter(item => item.attribute === 'xCc7On3MR53')[0].value : ''

        const sexe = person.attributes ? person.attributes.filter(item => item.attribute === 'Mj4c07bIa9v')[0].value : ''

        const dateNaissance = person.attributes ? person.attributes.filter(item => item.attribute === 'X2ewZ9nk3r0')[0].value : ''

        let profession = person.attributes ? person.attributes.filter(item => item.attribute === 'oM60JxeliEy')[0].value : ''
        if (profession === 'Autres') {
            profession = person.attributes ? person.attributes.filter(item => item.attribute === 'NbzrdyiCgYF')[0].value : ''
        }

        //const events = person.enrollments[0].events;
        //console.log(events)

        return (

            <page>
                <div className="row">
                    <div className="col-3">
                        <img src={embleme} alt="Embleme" height={'120px'} width={'120px'} />
                    </div>
                    <div className="col-6 text-center">
                        <p>REPUBLIQUE DE GUINEE</p>
                        <p><span style={{ color: 'red' }}>Travail</span>-<span style={{ color: 'orange' }}>Justice</span>-<span style={{ color: 'green' }}>Solidarité</span></p>
                        <strong>
                            MINISTERE DE LA SANTE <br />

                        AGENCE NATIONALE DE SECURITE SANITAIRE (ANSS) <br />
                        CARTE DE VACCINATION CONTRE LA COVID-19
                        </strong>
                    </div>
                    <div className="col-3">
                        <img src={anss} alt="ANSS" height={'120px'} width={'160px'} />
                    </div>

                </div>

                <hr />

                <div className="main-body">

                    <div className="alert alert-secondary">Informations personnelles</div>


                    <div className="row">

                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th>Code</th>
                                    <td>{code}</td>
                                    <td rowSpan='3' >
                                        <QRCode value={code} size={100} className="float-right" />
                                    </td>
                                </tr>

                                <tr>
                                    <th>Nom</th>
                                    <td>{nom}</td>
                                </tr>
                                <tr>
                                    <th>Prenom</th>
                                    <td>{prenom}</td>
                                </tr>
                                <tr>
                                    <th>Sexe</th>
                                    <td>{sexe}</td>
                                    <th>Date Naissance</th>
                                    <td>{dateNaissance}</td>
                                </tr>
                                <tr>
                                    <th>Téléphone</th>
                                    <td>{telephone}</td>
                                    <th>Profession</th>
                                    <td>{profession}</td>
                                </tr>
                                <tr>
                                    <th>Region</th>
                                    <td>{region}</td>
                                    <th>Prefecture</th>
                                    <td>{district}</td>
                                </tr>
                                <tr>
                                    <th>Sous Prefecture</th>
                                    <td>{sousPrefecture}</td>
                                    <th>Quartier</th>
                                    <td>{quartier}</td>
                                </tr>
                            </tbody>
                        </table>




                    </div>





                    <div className="alert alert-secondary">Vaccination 1</div>
                    <div className="alert alert-secondary">Vaccination 2</div>

                </div>
            </page>
        )
    }
}
