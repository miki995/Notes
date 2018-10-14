module.exports = function (app, db) {

    const collection = app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title};

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
