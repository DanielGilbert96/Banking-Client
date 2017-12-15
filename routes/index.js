var express = require('express');
var router = express.Router();
var rest = require('restler');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Customer', {
        title: 'Express'
    });
});
router.get('/customer', function(req, res, next) {
    res.render('Customer', {
        title: 'Express'
    });
});
router.post('/create_customer', function(req, res) {
    var fname = req.body.fname;
    var sname = req.body.sname;
    var address = req.body.address;
    var password = req.body.password;
    var securityQ = req.body.securityQ;
    var SecurityAns = req.body.SecurityAns;
    var email = req.body.email;
    var pin = req.body.pin;
    var jsonData = {
        fname: fname,
        sname: sname,
        address: address,
        password: password,
        securityQ: securityQ,
        SecurityAns: securityAns,
        email: email,
        pin: pin
    };
    rest.postJson('http://localhost:49002/api/customer', jsonData).on('complete', function(data, response) {
        // handle response
        console.log(response.rawEncoded);
        res.render('Customer', {response: response.rawEncoded});
    });
});

router.post('/get_customer', function(req, res) {
    var custId = req.body.custId;

    rest.get('http://localhost:49002/api/customer/' + custId, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Customer', {response1: response.rawEncoded});
    });
});


router.post('/update_customer', function(req, res) {


    var fname = req.body.fname;
    var sname = req.body.sname;
    var address = req.body.address;
    var password = req.body.password;
    var securityQ = req.body.securityQ;
    var SecurityAns = req.body.SecurityAns;
    var email = req.body.email;
    var pin = req.body.pin;
    var custId = req.body.custId;

    var jsonData = {
        fname: fname,
        sname: sname,
        address: address,
        password: password,
        securityQ: securityQ,
        SecurityAns: SecurityAns,
        email: email,
        pin: pin
    };

    rest.putJson('http://localhost:49002/api/customer' + custId, jsonData).on('complete', function(data, response) {
        // handle response
        console.log(response.rawEncoded);
        res.render('Customer', {response2: response.rawEncoded});
    });

});


router.post('/delete_customer', function(req, res) {
    var custId = req.body.custId;

    rest.del('http://localhost:49002/api/customer/' + custId, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Customer', {response3: response.rawEncoded});
    });
});
/* GET home page. */
router.get('/account', function(req, res, next) {
    res.render('Account', {
        title: 'Express'
    });
});


router.post('/get_account', function(req, res) {
    var accountId = req.body.accountId;

    rest.get('http://localhost:49002/api/account/' + accountId, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Account', {response4: response.rawEncoded});
    });
});

router.post('/get_list_account', function(req, res) {
    var custId = req.body.cust_id;

    rest.get('http://localhost:49002/api/account/' + custId+ '/list', {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Account', {response5: response.rawEncoded});
    });
});

router.post('/get_balance', function(req, res) {
    var accountId = req.body.accountId;

    rest.get('http://localhost:49002/api/account/balance/' + accountId, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Account', {response6: response.rawEncoded});
    });
});

router.post('/create_account', function(req, res) {
    res.render('Account', {
        title: 'Express'
    });
    var cust_id = req.body.cust_id;

    rest.post('http://localhost:49002/api/account/' + cust_id, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Account', {response7: response.rawEncoded});
    });
});


/* GET home page. */
router.get('/transaction', function(req, res, next) {
    res.render('Transaction', {
        title: 'Express'
    });
});


router.post('/make_lodgement', function(req, res) {
    var accountId = req.body.accountId;
    var cardNum = req.body.cardNum;
    var amount = req.body.amount;

    rest.get('http://localhost:49002/api/account/lodgement/' +accountId+"/"+cardNum+"/"+amount, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Transaction', {response7: response.rawEncoded});
    });
});
router.post('/make_withdrawal', function(req, res) {
    var accountId = req.body.accountId;
    var cardNum = req.body.cardNum;
    var amount = req.body.amount;

    rest.get('http://localhost:49002/api/account/withdrawal/' +accountId+"/"+cardNum+"/"+amount, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Transaction', {response8: response.rawEncoded});
    });
});
router.post('/make_transfer', function(req, res) {
    var accountFrom = req.body.accountFrom;
    var accountTo = req.body.accountTo;
    var amount = req.body.amount;

    rest.get('http://localhost:49002/api/account/transfer/' +accountFrom+"/"+accountTo+"/"+amount, {
        timeout: 10000
    }).on('timeout', function(ms) {
        console.log('did not return within ' + ms + ' ms');
    }).on('complete', function(data, response) {
        console.log(response.rawEncoded);
        res.render('Transaction', {response9: response.rawEncoded});
    });
});
module.exports = router;
