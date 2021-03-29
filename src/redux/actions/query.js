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