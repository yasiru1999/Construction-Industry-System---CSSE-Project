const Site = require('../models/site.model');

const addSite = async (request, response) => {

    const site = new Site(request.body);

    console.log(site);


    await site.save((error, site) => {
        if(error){
            response.status(500).json({ error: error.message });
            console.log(error.message)
        }
        else{
            response.status(200).
            json({
                success: true,
                site: site
            })
        }
    });
}

const getSite = async(request,response) => {
    try {
        Site.findById(request.params.id, (error, data) => {
            if (error) {
                response.status(500).json({error: error.message});
            } else {
                response.status(200).json({
                    success: true,
                    site: data
                })
            }
        })
    } catch (e) {
        console.log(e);
    }
}
const getSites = async (request, response) => {
    
        try{
            const sites = await Site.find();
            response.status(200).
            json({
                success: true,
                sites: sites
            })
        } catch (error) {
            response.status(404).json({
                success: false,
                error: error.message
            });
        }
    }

//change
const updateSite = async (request,response) => {
    const site = new Site(request.body);

    console.log(site);

     await Site.findByIdAndUpdate(request.body._id,site,
        (error,site) => {
            if(error){
                console.log(error);
                response.status(500).json({ error: error.message });
            }
            else{
                response.status(200).
                json({
                    success: true,
                    site: site     
                })
            }
        });
}

const deleteSite = async (request,response) => {
    await Site.findByIdAndRemove(request.params.id,(error,site) => {
        if(error){
            response.status(500).json({ error: error.message });
        }
        else{
            response.status(200).
            json({
                success: true,
                site: site
            })
        }
    })
}




module.exports = {
    addSite,
    getSite,
    getSites,
    updateSite,
    deleteSite

}

