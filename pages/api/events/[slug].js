//Get array of events from ./data.json
const { events } = require('./data.json')

export default function handler(req, res) {

  // Filter only one event from the array by the slug (req.query.slug)
  const evt = events.filter(ev => ev.slug === req.query.slug)  

  if(req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}
