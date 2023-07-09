const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM consumidor', (err, customers)=> {
            if (err){
                restart.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
          
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO consumidor set ?', [data], (err, customer)=> {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM consumidor WHERE id = ?', [id], (err, customer) => {
            res.render('customer_edit',{
            data: customer[0]
            });  
         });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
      conn.query('UPDATE consumidor set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
        res.redirect('/');
      });  
    });
};

controller.delete = (req, res) => {
    const { id }  = req.params;
    req.getConnection((err, conn) => {
    conn.query('DELETE FROM consumidor WHERE id = ?', [id], (err, rows) => {
    res.redirect('/');
    });   
    })
};


module.exports = controller;
