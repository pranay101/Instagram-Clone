export default function handler(req, res) {
  const credentials = {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
  }
  if (req.method === 'POST') {
    const payload = req.body.json()
    if (
      payload.username === credentials.username &&
      payload.password === credentials.password
    ) {
      const data = {
        ok: true,
        ...credentials,
        data: {
          token: 'bffuervbr78vr',
          refreshToken: '39nt759t',
        },
      }
      console.log(data)
      res.send(data)
    }
  }
}
