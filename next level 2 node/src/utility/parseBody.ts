import type { IncomingMessage } from "http";

export const parseBody = (req : IncomingMessage ): Promise<any> => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const parse = JSON.parse(body)
        resolve(parse);
      } catch (err) {
        reject(err);
      }
    });

  });
}
