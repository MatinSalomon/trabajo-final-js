// const api = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAa4VgMQ5L0E7tOdxu7X1_4_ra49A2Cvi8&channelid=UCB1d0urSX-_jl18TrFN0YUw&part=snippet,id&order=date&maxResults=5'

// fetch(api)
// .then(Response => Response.json())
// .then(data => {
//     console.log(data)
//     const resultado = document.getElementById('apiVideo');
//     for (const i in data.items) {
//         let tituloVideo = data.items[i].snippet.title;
//         let urlVideo = data.items[i].snippet.thumbnails.high.url;
//         resultado.innerHTML +=`<div>
//                              <img src="${urlVideo}" alt="">
//                              <p class="pDeVideo">${tituloVideo}</p>
//                              </div>
//                              `
//     };
// })
// .catch(err =>console.log(err))
