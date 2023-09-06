const data = [
    {name: 'Arif', views: '10k'},
    {name: 'Shakil', views: '5.5k'},
    {name: 'Shahid', views: '12.1k'},
    {name: 'Epon', views: '15K'},
    {name: 'Emon', views: '7.6k'},
    {name: 'Samad', views: '75k'},
];



const numbers = [9, 7, 3, 20, 34, 7];

const sortData = data.sort((a,b) => {
    const viewA = parseFloat(a.views);
    const viewB = parseFloat(b.views);

    return viewB - viewA;
});

console.log(sortData)
