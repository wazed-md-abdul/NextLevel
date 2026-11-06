import fs from "fs";
const logger = (req, res, next) => {
    console.log("Method - URL - Time:", req.method, req.url, Date.now());
    const log = `\nMethod -> ${req.method} - Time -> ${Date.now()} - URL -> ${req.url}\n`;
    fs.appendFile("logger.txt", log, (err) => { });
    next();
};
export default logger;
