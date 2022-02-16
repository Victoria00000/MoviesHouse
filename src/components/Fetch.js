const API = 'https://api.themoviedb.org/3/';

export const Fetch = (path) => {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjJlN2Q0ODgxZWZhODE4Y2RmOGY3M2E3MGMwNmZhOCIsInN1YiI6IjYyMGFhNzhkYTMxM2I4MDBiNWNmYjc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8szRIxcTL_b77Cn976wq3O2rfP89TCOlfkPAL3x6SYc",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(rta => rta.json())
}