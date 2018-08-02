'use strict';
let userProfil = {};

exports.getUserInfo = (userInfo) => {
    if (userInfo){
        userProfil.name = userInfo.given_name
        userProfil.lastName = userInfo.family_name
        userProfil.username = userInfo.preferred_username
        userProfil.gender = userInfo.gender
        userProfil.birthdate = userInfo.birthdate
        userProfil.birthplace = userInfo.birthplace
        userProfil.country = userInfo.birthcountry
    }
    return userProfil;
}