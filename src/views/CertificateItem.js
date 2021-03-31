import QRCode from "react-qr-code";
import React, { Component } from 'react'
import './page.css'
import embleme from '../images/embleme.jpg'
import anss from '../images/anss.png'
import { createPersonObject } from "./Person";

export default class CertificateItem extends Component {


    render() {

        const person = createPersonObject(this.props)
        return (

            <page>
                <div className="row">
                    <div className="col-3">
                        <img src={embleme} alt="Embleme" height={'120px'} width={'120px'} />
                    </div>
                    <div className="col-6 text-center">
                        <small>
                            <strong> REPUBLIQUE DE GUINEE <br />
                                <span style={{ color: 'red' }}>Travail</span>-<span style={{ color: 'orange' }}>Justice</span>-<span style={{ color: 'green' }}>Solidarité</span> <br />

                                MINISTERE DE LA SANTE <br />

                        AGENCE NATIONALE DE SECURITE SANITAIRE (ANSS) <br />
                        CERTIFICAT DE VACCINATION CONTRE LA COVID-19
                        </strong>
                        </small>
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
                                    <td>{person.code}</td>
                                    <td rowSpan='3' colSpan='2' >
                                        <QRCode value={person.code} size={100} className="float-right" />
                                    </td>
                                </tr>

                                <tr>
                                    <th>Nom</th>
                                    <td>{person.nom}</td>
                                </tr>
                                <tr>
                                    <th>Prenom</th>
                                    <td>{person.prenom}</td>
                                </tr>
                                <tr>
                                    <th>Sexe</th>
                                    <td>{person.sexe}</td>
                                    <th>Date Naissance</th>
                                    <td>{person.dateNaissance}</td>
                                </tr>
                                <tr>
                                    <th>Téléphone</th>
                                    <td>{person.telephone}</td>
                                    <th>Profession</th>
                                    <td>{person.profession}</td>
                                </tr>
                                <tr>
                                    <th>Region</th>
                                    <td>{person.region}</td>
                                    <th>Prefecture</th>
                                    <td>{person.district}</td>
                                </tr>
                                <tr>
                                    <th>Sous Prefecture</th>
                                    <td>{person.sousPrefecture}</td>
                                    <th>Quartier</th>
                                    <td>{person.quartier}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>





                    <div className="alert alert-secondary">Dose 1</div>
                    <div className="row">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th>Date de vaccination</th>
                                    <td>{person.vaccine1.dateVaccination}</td>
                                    <th>Site de vaccination</th>
                                    <td>{person.vaccine1.site}</td>
                                </tr>
                                <tr>
                                    <th>Type de vaccin</th>
                                    <td>{person.vaccine1.typeVaccin}</td>
                                    <th>Lot</th>
                                    <td>{person.vaccine1.lot}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="alert alert-secondary">Dose 2</div>
                    <div className="row">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th>Date de vaccination</th>
                                    <td>{person.vaccine2.dateVaccination}</td>
                                    <th>Site de vaccination</th>
                                    <td>{person.vaccine2.site}</td>
                                </tr>
                                <tr>
                                    <th>Type de vaccin</th>
                                    <td>{person.vaccine2.typeVaccin}</td>
                                    <th>Lot</th>
                                    <td>{person.vaccine2.lot}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </page>
        )
    }
}
