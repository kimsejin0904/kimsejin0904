const users = []

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {})

app.post('/create', (req, res) => {
    users.push(req.body);
    console.log("회원 데이터", users)
    res.status(200).json({
        success:true,
        message: "회원등록 성공"
    })
})