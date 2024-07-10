import FakerData from './faker.json';

export const fakerAPI = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(JSON.parse(FakerData));
        }, 8000);
    })
}