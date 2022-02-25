const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const queryText = `INSERT INTO "user" (username, password, clearance_level)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, 0])
    .then(response => {
      console.log('response from register post: ', response.rows);
      const newUserId = response.rows.id
      const newQueryText = `
      INSERT INTO currentRun (user_id)
      VALUES $1
      `
      pool.query(newQueryText, [newUserId])
        .then(response => {
          res.sendStatus(201)
        }).catch(err => {
          res.sendStatus(500)
        })
    }).catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/buttonLayout/:category', rejectUnauthenticated, (req, res) => {
  console.log('req.body in buttonlayout category:', req.body);
  console.log('params in buttonlayout put: ', req.params.category);
  const queryText = `
  UPDATE "user"
  SET ${req.params.category} = $1
  WHERE id = $2;
  `
  const values = [req.body, req.user.id]
  pool.query(queryText, values)
    .then(response => {
      console.log('response.rows from put buttonlayout: ', response.rows);
      res.sendStatus(204);
      
    })
})

module.exports = router;
