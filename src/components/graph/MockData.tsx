export const nodes = [
    {id: '001', label: 'Einführung in die Informatik', sem: 1},
    {id: '002', label: 'Datenbanken', sem: 1},
    {id: '003', label: 'Mathematik 1', sem: 1},
    {id: '004', label: 'Schlüsselkompetenzen 1', sem: 1},
    {id: '005', label: 'Technische Informatik 1', sem: 1},
    {id: '006', label: 'Algorithmen und Datenstrukturen', sem: 2},
    {id: '007', label: 'Modellierung', sem: 2},
    {id: '008', label: 'Mathematik 2', sem: 2},
    {id: '009', label: 'Technische Informatik 2', sem: 2},
    {id: '010', label: 'Schlüsselkompetenzen 2', sem: 2},
    {id: '011', label: 'Logik', sem: 2},
    {id: '012', label: 'Intelligente Systeme', sem: 3},
    {id: '013', label: 'IT-Projektmanagement', sem: 3},
    {id: '014', label: 'Computernetze 1', sem: 3},
    {id: '015', label: 'Mathematik 3', sem: 3},
    {id: '016', label: 'Google Cloud School', sem: 2},
    {id: '017', label: 'Grundlagen der Theoretischen Informatik', sem: 3},
    {id: '018', label: 'Nebenfach', sem: 3},
    {id: '019', label: 'Sichere Systeme', sem: 4},
    {id: '020', label: 'Software Engineering', sem: 4},
    {id: '021', label: 'Grundlagen der Theoretischen Informatik 2', sem: 4},
    {id: '022', label: 'Programmierparadigmen', sem: 4},
    {id: '023', label: 'Nebenfach', sem: 4},
    {id: '024', label: 'Softwareprojekt', sem: 4}
];
export const edges = [
    {
        source: '001',
        target: '006',
        id: '001-005',
    },
    {
        source: '005',
        target: '019',
        id: '006-019',
    },
    {
        source: '006',
        target: '012',
        id: '006-012',
    }, {
        source: '006',
        target: '020',
        id: '006-020',
    }, {
        source: '006',
        target: '022',
        id: '006-022',
    },
    {
        source: '005',
        target: '009',
        id: '005-009',
    },
    {
        source: '011',
        target: '017',
        id: '011-017',
    },
    {
        source: '004',
        target: '010',
        id: '004-010',
    }
    ,
    {
        source: '010',
        target: '013',
        id: '010-013',
    },
    {
        source: '013',
        target: '020',
        id: '013-020',
    }, {
        source: '017',
        target: '021',
        id: '017-021',
    }, {
        source: '002',
        target: '016',
        id: '002-016',
    }, {
        source: '007',
        target: '020',
        id: '007-020',
    }, {
        source: '005',
        target: '014',
        id: '005-014',
    }, {
        source: '013',
        target: '024',
        id: '013-024',
    }, {
        source: '002',
        target: '024',
        id: '002-024',
    }, {
        source: '006',
        target: '024',
        id: '013-024',
    },
];