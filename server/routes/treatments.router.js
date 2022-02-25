const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/:category', rejectUnauthenticated, (req, res) => {
    console.log('req.body in treatmentsRouter get: ', req.params.category);
    
  const queryText = `
    SELECT * FROM events
    WHERE category=$1;        
  `
  pool.query(queryText, [req.params.category])
    .then(response => {
        console.log('response on tx get: ', response);
        res.send(response.rows);
    }).catch(err=> {
        console.log('Error on tx get: ', err);
        res.sendStatus(500);
    })
});

router.get('/current/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT "events".procedure, "runs_events".timestamp, "runs_events".id FROM "runs_events"
    JOIN "events" ON "events".id = "runs_events".events_id
    WHERE "runs_events".id = $1;
    `
    pool.query(queryText, [req.params.id])
        .then(response => {
            res.send(response.rows)
        }).catch(err => {
            console.log('Error on get for current tx: ', err);
            res.sendStatus(500);
        })
})

/**
 * POST route template
 */
router.post('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.body in post: ', req);
    
  // POST route code here
  const queryText = `
    INSERT INTO runs_events ("runs_id", "events_id")
    VALUES($1, $2);
  `
  const values = [req.body.run_id, req.params.id]
  pool.query(queryText, values)
    .then(response => {
        res.sendStatus(201)
    }).catch(err=> {
        console.log('Error on runs_events post: ', err);
        
        res.sendStatus(500)
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
    DELETE FROM "runs_events"
    WHERE id = $1;
    `
    pool.query(queryText, [req.params.id])
        .then(response => {
            res.sendStatus(204)
        }).catch( err => {
            console.log('Error on delete tx: ', err);
            res.sendStatus(500);
        })
})

module.exports = router;