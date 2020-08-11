const students =[
    {id: 21, name: 'Suresh Chakma'},
    {id:31, name: 'Jeff Bejaj'},
    {id: 32, name: 'Mark Zuckerburg'},
    {id: 45, name: 'Bil Gates'},
    {id: 41, name: 'Lery Page'},
    {id: 33, name: 'Jack Ma'}
];

const names= students.map(s => s.name);
const Ids = students.map(s => s.id);
const bigger =students.filter(s =>s.id>31);
const isThere =students.find(s =>s.id>31);
console.log(isThere);