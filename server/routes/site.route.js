const express = require('express');
const router = express.Router();

const SiteService = require('../services/site.service');

module.exports = () => {

    router.get('/', SiteService.getSites);
    router.get('/:id', SiteService.getSite);
    router.post('/add', SiteService.addSite);
    //change
    router.put('/', SiteService.updateSite);
    router.delete('/:id',SiteService.deleteSite)

    return router;
}
