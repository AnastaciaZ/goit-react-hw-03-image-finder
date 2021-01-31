
function fetchImgQuery (searchQuery, page) {
    return fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page+1}&key=19205756-78e39cd266210d4983cef747c&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => { 
            if (response.ok) { 
                return response.json();
            }
            return Promise.reject(
                new Error('По данному запросу нет изображений')
            )
        })
        .then(({ hits }) => { return hits; });
};

const api = {
    fetchImgQuery,
};

export default api;