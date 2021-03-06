const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/all', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT id, category, procedure FROM events
    ORDER BY category;
    `
    pool.query(queryText)
        .then(response => {
            res.send(response.rows)
        }).catch(err => {
            console.log('Error on get all tx: ', err);
            res.sendStatus(500);
        })
})

router.get('/:category', rejectUnauthenticated, (req, res) => {

    const queryText = `
    SELECT * FROM events
    WHERE category=$1;        
  `
    pool.query(queryText, [req.params.category])
        .then(response => {
            res.send(response.rows);
        }).catch(err => {
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
    console.log('req.body in post: ', req.body);

    // POST route code here
    const queryText = `
    INSERT INTO runs_events ("runs_id", "events_id")
    VALUES($1, $2);
  `
    const values = [req.body.run_id, req.params.id]
    pool.query(queryText, values)
        .then(response => {
            res.sendStatus(201)
        }).catch(err => {
            console.log('Error on runs_events post: ', err);

            res.sendStatus(500)
        })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    
    const queryText = `
    UPDATE runs_events
    SET events_id = $1,
    timestamp = $2
    WHERE id = $3;
    `
    const values = [req.body.treatment, req.body.treatment.timestamp, req.params.id]
    
    pool.query(queryText, values)
        .then(() => {
            res.sendStatus(201)
        }).catch(err => {
            console.log('Error on treatment put: ', err);
            res.sendStatus(500);
        })
})

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
    DELETE FROM "runs_events"
    WHERE id = $1;
    `
    pool.query(queryText, [req.params.id])
        .then(response => {
            res.sendStatus(204)
        }).catch(err => {
            console.log('Error on delete tx: ', err);
            res.sendStatus(500);
        })
})

module.exports = router;