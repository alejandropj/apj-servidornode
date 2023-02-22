//Alejandro Parra Jiménez
const controlador = {};

controlador.list = (req,res) =>{
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM estudiante',(err,estudiantes) => {
            if(err){
                res.json(err);
            }
            res.render('estudiantes',{
                data : estudiantes
            });
        });
    });
};

controlador.save = (req,res) => {
    const datos = req.body;
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO estudiante(nombre,apellidos,email,edad,descripcion,foto,id_aula) VALUES (?,?,?,?,?,?,?)', [datos["nombre"],datos["apellidos"],datos["email"],datos["edad"],datos["descripcion"],datos["foto"],datos["id_aula"]], (err, rows) => {
            res.redirect('/');
        });
    });
};

controlador.edit = (req,res) => {
    const nia = req.params.nia;
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM estudiante WHERE nia =?', [nia], (err,estudiante) =>{
            res.render('modificarEstudiante', {
                data:estudiante[0]
            });
        })
    });
    
};
controlador.update = (req,res) => {
    const nia = req.params.nia;
    const nuevoEstudiante = req.body;
    req.getConnection((err,conn) =>{
        conn.query('UPDATE estudiante SET ? WHERE nia = ?', [nuevoEstudiante,nia], (err,rows) =>{
            res.redirect('/');
        })
    });
    
};
controlador.delete = (req,res) => {
    const nia = req.params.nia;
    req.getConnection((err,conn) =>{
        conn.query('DELETE FROM estudiante WHERE nia =?', [nia], (err,rows) => {
            res.redirect('/');
        })
    });
    
};

module.exports=controlador;