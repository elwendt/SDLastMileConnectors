require('es6-promise').polyfill();
require('isomorphic-fetch');
require('faker');
require('fetch');

//-------------- POST---------------------------//

// const newPost = {
//     email: 'elukewendt@gmail.com',
// }
//
// const options = {
//     method: 'POST',
//     body: JSON.stringify(newPost),
//     headers: {
//         'Device-id': '<123E4567-E99B-12D3-A446-426655440000>',
//         'Platform': 'ios',
//         'Content-Type': 'application/json'
//     }
// }
//
// fetch(`https://api.bird.co/user/login`, options)
//     .then(res => res.json())
//     .then(posts => console.log(posts))

//-------------- GET-Request ---------------------------//

// { id: '6bf41674-7479-4ae9-9ec5-de145cade3fa',
//   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwidXNlcl9pZCI6ImFjZjE3NzFkLWYzMmItNDU3OS05MmU1LTQ1MzZkNmJiZjU3OCIsImRldmljZV9pZCI6IjwxMjNFNDU2Ny1FODlCLTEyRDMtQTQ0Ni00MjY2NTU0NDAwMDA-IiwiZXhwIjoxNTc0ODgzMTE1fQ.OUm-WhLKEISCLkAqnsLbOeFql1M2gwYgwVv2spyYVIE' }

// eric.wendt@sandag.org
//{ id: '38c0b6e9-6e2d-4dc2-a0f3-374ae46a1cf1',
  // token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwidXNlcl9pZCI6IjdmZTY5OGNjLTYxYzItNDlhYy04ZDlhLTM4NDhmNjBlYmViMyIsImRldmljZV9pZCI6IjwxMjNFNDU2Ny1FODlCLTEyRDMtQTQ0Ni00MjY2NTU0NDAwMDA-IiwiZXhwIjoxNTc0ODg1Mzc2fQ.Fig7gaT-tRi21W5QnR4WJJEUlsLV_rrxKSklUC-_Yqg' }

// elukewendt@gmail.com
//{ id: 'f6f3fa64-591c-4d62-b46a-bd03f2da7789',
  // token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwidXNlcl9pZCI6IjIwOThiYjc1LTNhOWQtNDFjMC1hNWEzLTZjZWY5OGMwZDdiMCIsImRldmljZV9pZCI6IjwxMjNFNDU2Ny1FOTlCLTEyRDMtQTQ0Ni00MjY2NTU0NDAwMDA-IiwiZXhwIjoxNTc0ODg2OTM4fQ.s_HN0vSGfkkh3ACv3G6LZbu275GElL5p0fapwDWNHlo' }

const getRequest = {
    email: 'mettasphere@gmail.com',
}

const input = {
    method: 'GET',
    body: JSON.stringify(getRequest),
    headers: {
        'Authorization': {'id':'5015aeb4-7cf3-40d3-95e2-853391fb24a3', 'token':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwidXNlcl9pZCI6IjIwOThiYjc1LTNhOWQtNDFjMC1hNWEzLTZjZWY5OGMwZDdiMCIsImRldmljZV9pZCI6IjwxMjNFNDU2Ny1FOTlCLTEyRDMtQTQ0Ni00MjY2NTU0NDAwMDA-IiwiZXhwIjoxNTc0ODg2OTM4fQ.s_HN0vSGfkkh3ACv3G6LZbu275GElL5p0fapwDWNHlo'},
        'Device-id': '<123E4567-E89B-12D3-A446-426655440000>',
        'Platform': 'ios',
        'Content-Type': 'application/json',
        'App-Version': '4.6.4',
        'Location': {"latitude":32.713406,"longitude":-117.160500,"altitude":500,"accuracy":100,"speed":-1,"heading":-1}
    }
}

fetch(`https://api.bird.co/bird/nearby?latitude=32.713406&longitude=-117.160500&radius=1000`, input)
    .then(res => res.json())
    .then(posts => console.log(posts))




