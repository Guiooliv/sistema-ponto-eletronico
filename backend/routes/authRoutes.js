const express = require ('express')
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



router.post('/login', (req, res) => {
    console.log('recebido no backend /api/login' )
    const { username, password } = req.body

    if (username && password) { 
        res.json({ success: true, message: 'usuario logado com sucesso!' , username: username, password:password })
    } else { 
        res.status(400).json ({ success: false, message: 'usuario ou senha nao fornecidos' })
    }
})

router.post('/register', async (req, res) => {
    if (!req.body ) {
        return res.json({ message: "Erro: nenhum corpo enviado" });
    }

    const { email, username, password, role, cargaHoraria } = req.body;

    if (!email || !username || !password || !role || !cargaHoraria) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios' });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                email: email,
                username: usuario,
                password: password,
                role: role,
                cargaHoraria: parseInt(cargaHoraria),
            },
        });

        res.status(201).json({ success: true, message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ success: false, message: 'Erro ao criar usuário', error: error.message });
    }
});

module.exports = router;