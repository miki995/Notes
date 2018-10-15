const ObjectID = require("mongodb").ObjectID;

module.exports = function (app, db) {

    app.get('/notes/:id', (req, res) => {

        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('g_notes').findOne(details, (err, item) => {

            if (err) {
                res.send({'error': 'An error has occurred!'});
            } else {
                res.send(item);
            }
        });
    });

    app.delete('/notes/:id', (req, res) => {

        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('g_notes').remove(details, (err, item) => {

            if (err) {
                res.send({'error': 'An error has occurred!'});
            } else {
                res.send('Note' + id + ' deleted.');
            }
        });
    });

    app.put('/notes/:id', (req, res) => {

        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const note = { text: req.body.body, title: req.body.title};
        db.collection('g_notes').update(details, note,  (err, item) => {

            if (err) {
                res.send({'error': 'An error has occurred!'});
            } else {
                res.send(note);
            }
        });
    });

    app.post('/notes', (req, res) => {
        const note = {text: req.body.body, title: req.body.title};

        db.collection('g_notes').insert(note, (err, result) => {

            if (err) {
                res.send({'error': 'An error occurred.'})
            } else {
                res.send(result.ops[0]);
            }
        });
    });


    app.post('/notes', (req, res) => {
        res.send('Hello World!');
    })
};
