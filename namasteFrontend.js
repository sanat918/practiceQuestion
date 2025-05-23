// security headers 
//1. x-Powered-By it can be removed from header as it's tells about the server it's express or any other
//2. Referrel policy if i back or navigating from one page to another so in Referer i can see all params which i have passed in earlier request so it's not a good practice.
//3. X-content-type-option X-content-type-option :"nosniff"
//4. x-xss-protection 
//5. x-content-types-option
//6. HSTS

//Client Storage security
//1.Storing data on client storage
// a. try ar server to store the data
// b. Encrypt the data if storing on localStorage
// c. token expiry
//2. Authentication (like JWT or OAuth Token,  Token ssession(Expiry) , Multi-factor authentication)
//3. Data Integrity 
// a. checkSum--- Here i will store the checksum data in localStorage with my actual data which is needed to store in localstorage and before performing any task can comapre that checksum and the data is store in localstorage for use is equal or not. It's only to verify that someone has not performed any temper with data which is stored in localStorage which using the app.
//4. Storage Limit (localStorage(5-10 MB),cookie((4-20 KB)), indexedDB(50- 100 MB approx.), sessionStorage(5-10 MB), cache (around 100 MB))
//5. Session management


//SecureCommunication security
//1.Data Encryption(TSL)
//2.Authentication(SSL & TSL)
//3.Data Integripty(MAC)
//4.Protection against Phishing
//5. Data Privacy
//6.Compliance with security standards
//7.Trust and reputations
//8.Search engine ranking
//9.Potection against browser warnings
//10.Faster website loading(HTTP2)


/*DependencySecurity*/
//1. Regular audits of dependencies(npm audits, npm update)
//2. Enforcing auditing(npm set audit true) we can setup workflows in github using workflow that will keep track of these automatically in yaml file or github hooks.
//3. COde and dependency monitor
//4. Dependency locking(package-locking.json)
//5. Security penetration testing using tools

/*Compliance and Regulations*/
// https://www.kiteworks.com/risk-compliance-glossary/regulatory-compliance-definition/#:~:text=Regulatory%20compliance%20is%20the%20process,regulations%20to%20maintain%20their%20operations.


/* INputValidation and Sanitization */
//1. Use framework or library(like react it's take care of these malicious activities)
//2. Whitelisting validation
//3. Regular Expression(to ensure the data value)
//4. Escape user input
//5. Parameterized URLs
//6. Validate DataTypes
//7. Length and Size check
//8. Images & files
//9. Add Client side validation as well as server
//10.  Error Handling and Security Headers
//11. Regualar updates and patch

/* 
SSRF(Server side request forgery)
1. Unvalidated user input
2. Lack of whiteListing
3. Insufficient policy control
4. XML  External Entity (XXE)
*/

/*
Server-side javascript Injection
1. Inadequate input validation
2. Direct execution of user provided code
3. using dangerous functions
4. Insecure serialization

*/

1.14