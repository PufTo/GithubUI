// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.query;
    const response = await fetch(
      `https://github.com/login/oauth/access_token?client_id=ee75ebfda6802886b0fe&client_secret=bb3282db9635b328605553708fb9a5fcb981a355&code=${code}`,
      // 0d17b407a4adf6940348166fd4b846a7dae304f9
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
