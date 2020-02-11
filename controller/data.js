const sequelize = require("../config/database");
const Data = require("../model/data");
const axios = require("axios");
const names = ["DANGCEM",
                 "GUARANTY", 
                 "ZENITHBANK",
                  "DANGSUGAR",
                    "MTNN",
                    "NB",
                "ZENITHBANK",
                "UNILEVER",
                "GUARANTY",
                "AFRIPRUD"];
const cron = require("node-cron");


//fetching the data 
const scrape = (name) => {
    axios(`http://www.nse.com.ng/REST/api/issuers/companydirectory?$filter=Symbol%20eq%20%27${name}%27`)
    .then(response =>  {
        const details = response.data[0];
        addData(details);
    })
    
    .catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}; 

// cron job for 10:30am
cron.schedule("30 10 * * *", function () {
    names.forEach(scrape);
});


// cron job for 3:00pm
cron.schedule("* 15 * * *", function () {
    names.forEach(scrape);
});

// posting to th DB
const addData = (data) => {
    const {Symbol,
           PrevClose,
           OpenPrice,
           CompanyName,
            StockPricePercChange,
            StockPriceChange,
            StockPriceCur,
            HIGH52WK_PRICE,
            LOW52WK_PRICE  } = data;
    Data.create({
        Symbol,
        PrevClose,
        OpenPrice,
        CompanyName, 
        StockPricePercChange,
        StockPriceChange,
        StockPriceCur,
        HIGH52WK_PRICE,
        LOW52WK_PRICE 
    })
    .then((newData) => {
        console.log({newData, msg: "Success"})
    })
    .catch((err) => {
        console.error({msg: "error occured", err})
    })
};

sequelize.sync()
    .then(result => {
        //create a server and listens
    })
    .catch((err) => console.log(err || "failed to connect"));