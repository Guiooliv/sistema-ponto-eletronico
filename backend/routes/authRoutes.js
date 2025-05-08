const express = require('express')
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();


router.post('/register', async (req, res) => {
    const { email, usuario, password, role, cargaHoraria } = req.body;

    if (!email || !usuario || !password || !role || !cargaHoraria) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios' });
    }

    try {
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                usuario: usuario,
                password: hashedPassword,
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

router.post('/login', async (req, res) => {
    console.log('Testando no backend /api/login')

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'E-mail ou senha não fornecidos' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if (!user) {
            return res.status(401).json({ success: false, message: 'E-mail ou senha incorretos' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            console.log('Usuario logado!')
            return res.json({
                success: true,
                message: "Usuário logado com sucesso",
                role: user.role,
                usuario: user.usuario
            });
        } else {
            console.log('senha incorreta')
            return res.status(401).json({ success: false, message: "Senha incorreta" });
        }

    } catch (error) {
        console.error("Erro ao tentar logar:", error);
        return res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
});

module.exports = router;