const express = require('express')
const multer = require('multer')
const cors = require('cors')

const upload = multer()
const app = express()
app.use(cors())

app.post('/analyze', upload.single('file'), (req, res) => {
  // simple fake analysis
  const filename = req.file ? req.file.originalname : 'unknown.pdf'
  setTimeout(() => {
    res.json({
      candidateName: filename.replace(/\.(pdf|docx?)$/i, ''),
      fraudScore: Math.floor(Math.random() * 80),
      highlights: [
        'Inconsistent employment dates',
        'Unverified education entry',
      ]
    })
  }, 1200)
})

const port = 5000
app.listen(port, () => console.log(`Mock analyze server listening on http://localhost:${port}`))
