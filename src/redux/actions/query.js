export const teisQuery = (programUid) => {
    return {
        result: {
            resource: 'trackedEntityInstances/query',
            params: {
                program: programUid,
                ouMode: 'ACCESSIBLE',
                order: 'created:desc',
                pageSize: 50,
                totalPages: true
            }
        }
    }
}

//attribute = cWAOfDiaXRJ: LIKE: 628204721 & attribute=A1bNxMuvb66 & attribute=bbOBxG4F6ja & attribute=bXEwbxbLR9a & attribute=X2ewZ9nk3r0 & attribute=Mj4c07bIa9v & attribute=rkQEv1WFZ1u
export const teisFilterQuery = (programUid, { nom, prenom, telephone, localid }) => {
    const paramNom = nom ? `:LIKE:${nom}` : ''
    const paramPrenom = prenom ? `:LIKE:${prenom}` : ''
    const paramTelphone = telephone ? `:LIKE:${telephone}` : ''
    const paramLocalId = localid ? `:LIKE:${localid}` : ''
    return {
        result: {
            resource: 'trackedEntityInstances/query',
            params: {
                program: programUid,
                attribute: [`cWAOfDiaXRJ${paramTelphone}`, `A1bNxMuvb66${paramLocalId}`, `bbOBxG4F6ja${paramNom}`, `bXEwbxbLR9a${paramPrenom}`, 'X2ewZ9nk3r0', 'Mj4c07bIa9v', 'rkQEv1WFZ1u'],
                ouMode: 'ACCESSIBLE',
                order: 'created:desc',
                pageSize: 50,
                totalPages: true
            }
        }
    }
}

export const teiQuery = (trackedEntityInstance, programUid) => {
    return {
        result: {
            resource: `trackedEntityInstances/${trackedEntityInstance}`,
            params: {
                program: programUid,
                fields: '*'
            }
        }
    }
}