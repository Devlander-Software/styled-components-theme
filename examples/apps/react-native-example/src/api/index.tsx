import  ApiConnected from './api';
 const {
    userServices,
    mailServices,
    galleryServices,
    gearServices,
    producerServices,
    stripeServices,
    searchServices,
    saveTokenFunc,
    getTokenFunc,
} = ApiConnected;

export {
    userServices,
    mailServices,
    galleryServices,
    gearServices,
    producerServices,
    stripeServices,
    searchServices,
    saveTokenFunc as saveToken,
    getTokenFunc as getToken
}

