// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.query;
    const response = await fetch(
      `https://github.com/login/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_APP_ID}&client_secret=${process.env.APP_KEY}&code=${code}`,
      {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
        }),
      }
    );

    const data = await response.json();
    const finalValue = {};
    finalValue.data = data;
    res.status(200).json(finalValue);
  }

  res.status(200).json({ name: "John Doe" });
}
