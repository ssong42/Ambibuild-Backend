// likesRouter.js
const express = require('express');

const router = express.Router();

let data = [
  {
    "id": "1",
    "title": "Fix the footer links please",
    "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
    "priority": "low",
    "user_email": "mario@netninja.dev"
  },
  {
    "id": "2",
    "title": "Add in a new stylesheet",
    "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
    "priority": "medium",
    "user_email": "mario@netninja.dev"
  },
  {
    "id": "3",
    "title": "Fix the footer links",
    "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
    "priority": "high",
    "user_email": "peach@netninja.dev"
  }
]

// Endpoint to get all tickets
router.get('/', async (req, res) => {
    res.json(data);
});

// Endpoint to get a specific ticket
router.get('/:id', async (req, res) => {
  const id = req.params.id;

  let request = data.find(data => data.id === id);
  if (request === undefined){
    console.log(request)
    res.status(404).json({ error: 'Ticket not found' });
  }
  else {
    res.json(request)
  }
});


// Endpoint to create a ticket
router.post('/', async (req, res) => {
  const { title, body, priority, user_email } = req.body;

  try {
    let newTicket = {title, body, priority, user_email}
    data.push(newTicket)

    res.json(rnewTicket);
  } catch (error) {
    console.error('Error creating like:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;