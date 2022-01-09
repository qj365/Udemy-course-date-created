const id = document
    .querySelector('body#udemy')
    .getAttribute('data-clp-course-id');
let data = '';
const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHander;

function apiHander(response) {
    if (requestSender.readyState === 4 && requestSender.status === 200) {
        data = response.target.response
            .split(',')[2]
            .split('T')[0]
            .replaceAll('"', '')
            .replace('c', 'C')
            .replace(':', ' : ');
        console.log(data);
    }
}

requestSender.open(
    'GET',
    `https://udemy.com/api-2.0/courses/${id}/?fields[course]=created`,
    true
);

console.log(`https://udemy.com/api-2.0/courses/${id}/?fields[course]=created`);

requestSender.send();

window.onload = () => {
    document.querySelector('.last-update-date').prepend(data);
};
