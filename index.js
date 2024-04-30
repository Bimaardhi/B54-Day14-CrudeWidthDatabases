const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { title } = require("process");
const config = require("./config/config.json");
const {Sequelize, QueryTypes, where} = require("sequelize");
const sequelize = new Sequelize(config.development);
const projectModel = require("./models").tb_project;   

// setting variable global
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./views"))

app.use("/asset", express.static(path.join(__dirname, "./asset")))

app.use(express.urlencoded({ extended: false }))
//routing

app.get("/", home);
app.get("/detail", detail);
app.get("/addmyproject", addMyProject);
app.get("/edit/:id", editProject);
app.post("/detail", addetail);
app.get("/project/:id", project);
app.post("/delete/:id", deleteProject);
app.post("/edit", editNew);

const data = []

// service
function home(req, res) {

    res.render("index")
}

async function detail(req, res) {

    const query = "SELECT * FROM tb_projects"
    const data = await sequelize.query(query, {type: QueryTypes.SELECT})

    // const data = await projectModel.findAll()

    res.render("detail", { data })
}

async function addetail(req, res) {

    const {title, content } = req.body;

    const query = `INSERT INTO tb_projects(title,content,image,"createdAt","updatedAt") VALUES('${title}','${content}','https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=300', now(), now())`;
    

    const data = await sequelize.query(query, {type :QueryTypes.INSERT})

    // const data = await projectModel.create({
    //     title,
    //     content,
    //     image: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=300'
    // })

    res.redirect("detail")
}


async function project(req, res) {

    const { id } = req.params

    const query = `SELECT * FROM tb_projects WHERE id=${id}`
    const data = await sequelize.query(query, {type: QueryTypes.SELECT})
    
    // const data = await projectModel.findOne({
    //     where: { id },
    // });
    // res.render("project", { data: data })
    
    res.render("project", { data: data[0] })
}

function addMyProject(req, res) {

    res.render("addmyproject")
}


async function deleteProject(req, res) {
    const { id } = req.params;

    const query = `DELETE FROM tb_projects WHERE id=${id}`;
  const data = await sequelize.query(query, { type: QueryTypes.DELETE });

    // console.log("id yg di delete", id);
    // data.splice(id, 1)
    res.redirect("/detail")
}

async function editProject(req, res) {
    const { id } = req.params;

    const data = await projectModel.findOne ({
        where: { id },
    });

    res.render("edit", { data });
}

async function editNew(req, res) {
    const { title, content, id } = req.body;

    const query  = `UPDATE tb_projects SET title='${title}', content='${content}' WHERE id=${id}`
    const data = await sequelize.query(query, {type: QueryTypes.UPDATE})

    // const data = await projectModel({
    //     title,
    //     content,
    //     where: { id },
    // })

    res.redirect("/detail")
}

app.listen(port, () => {
    console.log('example app listening on PORT:', port)
})