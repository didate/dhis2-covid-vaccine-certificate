import { AUTRE_PROFESSION, AUTRE_SITE, CODE, DATE_NAISSANCE, DATE_VACCINATION, DISTRICT, LOT, NOM, PRENOM, PROFESSION, QUARTIER, REGION, SEXE, SITE, SOUS_PREFECTURE, TELEPHONE, TYPE_VACCIN } from "../constant";


export const createPersonObject = ({ person }) => {

    const createdPerson = {}

    person.attributes.forEach(item => {
        switch (item.attribute) {
            case CODE:
                createdPerson.code = item.value
                break
            case NOM:
                createdPerson.nom = item.value
                break
            case PRENOM:
                createdPerson.prenom = item.value
                break
            case SEXE:
                createdPerson.sexe = item.value
                break
            case PROFESSION:
                createdPerson.profession = item.value
                break
            case AUTRE_PROFESSION:
                createdPerson.autreProfession = item.value
                break
            case DATE_NAISSANCE:
                createdPerson.dateNaissance = item.value
                break
            case REGION:
                createdPerson.region = item.value
                break
            case DISTRICT:
                createdPerson.district = item.value
                break
            case SOUS_PREFECTURE:
                createdPerson.sousPrefecture = item.value
                break
            case QUARTIER:
                createdPerson.quartier = item.value
                break
            case TELEPHONE:
                createdPerson.telephone = item.value
                break
            default:
                createdPerson.default = 'default'
        }
    });

    if (createdPerson.profession === 'Autres') {
        createdPerson.profession = createdPerson.autreProfession
    }

    const events = getEvents(person)

    createdPerson.vaccine1 = events.vaccine1
    createdPerson.vaccine2 = events.vaccine2

    return createdPerson

}

const getEvents = (person) => {

    const vaccine = {
        vaccine1: {
            dateVaccination: '',
            typeVaccin: '',
            lot: '',
            site: ''
        },
        vaccine2: {
            dateVaccination: '',
            typeVaccin: '',
            lot: '',
            site: ''
        }
    }
    if (person.enrollments && person.enrollments.length > 0) {
        const events = person.enrollments[0].events
        if (events && events.length > 0) {
            vaccine.vaccine1 = getDataValues(events[0])
        }
        if (events && events.length > 1) {
            vaccine.vaccine2 = getDataValues(events[1])
        }
    }
    return vaccine
}

const getDataValues = (event) => {
    const vaccine = {
        dateVaccination: '',
        typeVaccin: '',
        lot: '',
        site: '',
        autreSite: ''

    }
    event.dataValues.forEach(item => {
        switch (item.dataElement) {
            case DATE_VACCINATION:
                vaccine.dateVaccination = item.value
                break
            case LOT:
                vaccine.lot = item.value
                break
            case TYPE_VACCIN:
                vaccine.typeVaccin = item.value
                break
            case SITE:
                vaccine.site = item.value
                break
            case AUTRE_SITE:
                vaccine.autreSite = item.value
                break

        }
    })

    if (vaccine.autreSite !== '') {
        vaccine.site = vaccine.autreSite
    }
    return vaccine;
}