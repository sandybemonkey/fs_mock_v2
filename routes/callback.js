'use strict';

const express = require('express');
const router = express.Router();
const axios = require('axios');
const querystring = require('querystring');
const config = require('./../config/config.json');
const userInfosHelper = require('./../helpers/getUserInfo');

//TODO use async/await
router.get('/', function(req, res) {
    const tokenUrl = config.TOKEN_URL;
    const redirectUrl = config.REDIRECT_URL;
    const clientId = config.CLIENT_SECRET;
    const secretKey = config.SECRET_KEY;

    //if code param exist
    if(req.query.code) {
        //request URL
        const url = tokenUrl;
        //request Body
        const body = {
            'grant_type': 'authorization_code',
            'redirect_uri': redirectUrl,
            'client_id': clientId,
            'client_secret': secretKey,
            'code': req.query.code
        }
        //request header
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        //Get access_token
        axios.post(url, querystring.stringify(body), config)
            .then(response => {
                return response.data;
            })
            .then( tokenData => {
                axios({
                    method: 'POST',
                    headers: {"Authorization" : "Bearer " + tokenData.access_token },
                    url: 'http://localhost:4000',
                }).catch( err => {
                   console.error(err.message);
                })

                //request URL
                const userInfoUrl = 'https://fcp.integ01.dev-franceconnect.fr/api/v1/userinfo'

                //request header
                const config = {
                    headers: {
                        'Authorization': 'Bearer ' + tokenData.access_token
                    }
                }

                //Get userInfo
                axios.get(userInfoUrl, config)
                    .then( response => {
                        // TODO fix this
                        //req.session.userProfil = userInfosHelper.getUserInfo(response.data);
                        let userProfile = userInfosHelper.getUserInfo(response.data);
                        res.render('pages/profile', {
                            user: userProfile
                        });
                    })
                    .catch( err => {
                        res.send(err.message);
                    })
            })
            .catch( err => {
                res.send(err.message);
            })
    }
});

module.exports = router;