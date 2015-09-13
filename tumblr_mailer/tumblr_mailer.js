var fs = require('fs');
var ejs = require('ejs');
var tumblr = require('tumblr.js')
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('UOoALJHmxKSKU62YHImBeg');

var csvFile = fs.readFileSync("friend_list.csv","utf8");
var emailTemplate = fs.readFileSync("email_template.html", "utf8")

var client = tumblr.createClient({
  consumer_key: 'XXXXXXXXXXXXX',
  consumer_secret: 'XXXXXXXXXXXXXXX',
  token: 'XXXXXXXXXXXXXXXXXXX',
  token_secret: 'XXXXXXXXXXXXXXXXX'
});

function csvParse(csv) {
	var objectArray = [];
	var csvArray = csv.split("\n");
	var keys = csvArray.shift().split(",")
	csvArray.forEach(function(contact) {
		contact = contact.split(',')
		var obj = {};
		for (i = 0; i < contact.length; i++) {
			obj[keys[i]] = contact[i]
		}
		objectArray.push(obj)
	})
	return objectArray
}

var friendList = csvParse(csvFile)

client.posts('adventureintoprogramming.tumblr.com', function(error, blog) {
	var latestPosts = []
	blog.posts.forEach(function(entry) {
		var today = new Date();
		var currentDate = today.getTime()/(1000*3600*24);
		var entryDate = entry.timestamp/(3600*24);
		var TimeDiff = Math.floor(Math.abs(currentDate-entryDate));
		if (TimeDiff <= 7) {
			latestPosts.push(entry);
		}
	})
	friendList.forEach(function(friend) {
	var firstName = friend["firstName"];
	var numMonthsSinceContact = friend["numMonthsSinceContact"];
	var templateCopy = emailTemplate;
	var customizedTemplate = ejs.render(templateCopy, {
		firstName: firstName,
		numMonthsSinceContact: numMonthsSinceContact,
		latestPosts: latestPosts
		});
	sendEmail(firstName, friend["emailAddress"], "Josh Mazen", "joshmazen14@gmail.com", "My Coding Blog", customizedTemplate);
	});
});

function sendEmail(to_name, to_email, from_name, from_email, subject, message_html) {
    var message = {
        "html": message_html,
        "subject": subject,
        "from_email": from_email,
        "from_name": from_name,
        "to": [{
                "email": to_email,
                "name": to_name
            }],
        "important": false,
        "track_opens": true,    
        "auto_html": false,
        "preserve_recipients": true,
        "merge": false,
        "tags": [
            "Fullstack_Tumblrmailer_Workshop"
        ]    
    };
    var async = false;
    var ip_pool = "Main Pool";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
        // console.log(message);
        // console.log(result);   
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
 }