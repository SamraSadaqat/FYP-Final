import logger from "../../../helpers/logger";

export default async (body) => {
  const url = `http://20.121.214.26:8085/server/api/Accounts/Login`;
  const result = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body,
  });

  logger.log(result);
  if (result.status === 200) return result.json();
  else throw await result.json();
};